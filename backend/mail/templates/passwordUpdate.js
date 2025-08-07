// passwordResetEmail.js

exports.passwordResetEmail = (token, userName, userEmail) => {
    const resetUrl = `http://localhost:3000/update-password/${token}`;
  
    return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="UTF-8">
      <title>Password Reset Requested</title>
      <style>
        body { background: #f3f4f6; font-family: Arial, sans-serif; margin: 0; padding: 0; }
        .container { max-width: 480px; margin: 40px auto; background: #ffffff; padding: 30px;
          border-radius: 8px; box-shadow: 0 2px 8px rgba(0,0,0,0.1); text-align: center; }
        .logo { max-width: 120px; margin-bottom: 20px; }
        h2 { color: #333333; margin-bottom: 15px; }
        p { color: #555555; font-size: 16px; line-height: 1.5; margin-bottom: 20px; }
        .btn { display: inline-block; padding: 12px 24px; font-size: 16px;
          color: #ffffff; background-color: #4f46e5; text-decoration: none;
          border-radius: 6px; margin: 15px 0; }
        .footer { font-size: 13px; color: #999999; }
        .footer a { color: #4f46e5; text-decoration: none; }
      </style>
    </head>
    <body>
      <div class="container">
        <a href="https://studynotion-edtech-project.vercel.app">
          <img class="logo" src="https://i.ibb.co/7Xyj3PC/logo.png" alt="StudyNotion Logo">
        </a>
        <h2>Password Reset Request</h2>
        <p>Hi ${userName},</p>
        <p>We received a request to reset your password for the account <strong>${userEmail}</strong>.</p>
        <a href="${resetUrl}" class="btn">Reset Your Password</a>
        <p>If you didn't request this, you can safely ignore this email.</p>
        <div class="footer">
          Questions? Contact us at 
          <a href="mailto:info@studynotion.com">info@studynotion.com</a>.
        </div>
      </div>
    </body>
    </html>`;
  };
  