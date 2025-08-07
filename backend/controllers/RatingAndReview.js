const RatingAndReview = require('../models/RatingAndReview')
const User =require('../models/User')
const Course = require('../models/Course')


//create rating
exports.createRating = async (req,res) =>{
    try {
        //get  userId
        const userId = req.user.id
        //fetch data from req 
        const {rating,review,courseId} = req.body
        console.log("userId",userId)
        console.log("req.user",req.user)
        console.log("courseId",courseId)
        // console.log("req.body",req.body)
        //check if user is enrolled or not 
        const courseDetails = await Course.findOne({
            _id:courseId,
            // studentsEnrolled: {$eleMatch:{$eq:userId}} 
            studentsEnrolled: userId
        })

        if(!courseDetails){
            return res.status(404).json({
                success:false,
                message:"Student is not Enrolled in this course"
            })
        }
        //check if user already reviewed the course
        const alreadyReviewed = await RatingAndReview.findOne({
            user:userId,
            course:courseId
        })
        if(alreadyReviewed){
            return res.status(403).json({
                success:false,
                message:"You have already reviewed this course"
            })
        }
         
        // create rating and Review
        const ratingAndReview = await RatingAndReview.create({
            rating,
            review,
            course:courseId,
            user:userId
        })
        //update the course with thisrating and review 
        const updateCourseDetails = await Course.findByIdAndUpdate(
          courseId,
          {
            $push: {
              ratingsAndReviews: ratingAndReview._id,
            },
          },
          { new: true }
        );
        console.log(updateCourseDetails);
        //return success response 
        return res.status(200).json({
            success:true,
            message:"Rating and Review Created Successfully",
            ratingAndReview
        })
     

    } catch (error) {
        console.error(error)
        res.status(500).json({
            success:false,
            message:"Error while Creating the Rating",
            error:error.message
        })
    }
}



//get average rating
exports.getAverageRating = async (req,res) =>{ 
    try {
        // get course Id
        const courseId = req.body.courseId
        //calculat Avg rating
         const result = await RatingAndReview.aggregate([
           {
             $match: {
               course: new mongoose.Types.ObjectId(courseId),
             },
           },
           {
             $group: {
               _id: null,
               averageRating: { $avg: "$rating" },
             },
           },
         ]);
        //return rating
        if(result.length>0){

          return res.status(200).json({
            success:true,
            message:"Average Rating fetched successfully",
            averageRating:result[0].averageRating
          })
        }else{
          //if not rating /review exist
          return res.status(200).json({
            success: false,
            message: "Average Rating is 0, not ratings given till now ",
            averageRating: 0 ,
          });
        }





    } catch (error) {
        console.error(error)
        res.status(500).json({
            success:false,
            message:"Error while getting the Average Rating",
            error:error.message
        })
    }
}


//get All Rating
exports.getAllRating = async( req,res) =>{
  try {
    //getAllrating
    const allReviews = await RatingAndReview.find()
                                                  .sort({rating:"desc"})
                                                  .populate({
                                                    path:"user",
                                                    select: "firstName lastName email image"
                                              
                                                  })
                                                  .populate({
                                                    path:"course",
                                                    select:"courseName"
                                                  })
                                                  .exec() 
    if(!allReviews){
        return res.status(404).json({
            success:false,
            message:"No rating exist"
        })
    }
    return res.status(200).json({
        success:true,
        message:"All reviews fetched successfully",
        allReviews
    })
  } catch (error) {
    console.error(error)
    res.status(500).json({
        success:false,
        message:"Error while getting the Average Rating",
        error:error.message
    })
  }
}