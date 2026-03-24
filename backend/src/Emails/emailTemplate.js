export function generateEmailTemplate({ fullName, verificationLink }) {
  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>Welcome Email</title>
</head>
<body style="margin:0; padding:0; font-family: Arial, sans-serif; background:#f4f4f4;">

  <table align="center" width="600" style="background:#ffffff; margin-top:30px; border-radius:8px; overflow:hidden;">
    
    <!-- Header -->
    <tr>
      <td style="padding:20px; text-align:left;">
        <h2 style="margin:0; color:#333;">YourBrand</h2>
      </td>
    </tr>

    <!-- Icon -->
    <tr>
      <td style="text-align:center; padding:20px;">
        <img src="https://cdn-icons-png.flaticon.com/512/845/845646.png" width="80" alt="icon"/>
      </td>
    </tr>

    <!-- Title -->
    <tr>
      <td style="text-align:center;">
        <h1 style="color:#333;">Thank You!</h1>
      </td>
    </tr>

    <!-- Message -->
    <tr>
      <td style="padding:0 40px; text-align:center; color:#555; line-height:1.6;">
        <p>Hello <strong>${fullName}</strong>,</p>
        <p>
          We are excited to welcome you to our platform. We're here to provide you
          with the best experience and help you get started quickly.
        </p>
        <p>
          Thank you for joining us. Let's build something amazing together 🚀
        </p>
      </td>
    </tr>

    <!-- Button -->
    <tr>
      <td style="text-align:center; padding:30px;">
        <a href="${verificationLink}" target="_blank"
           style="background:linear-gradient(45deg,#6a5af9,#8f7bff);
                  color:#fff;
                  padding:12px 25px;
                  text-decoration:none;
                  border-radius:25px;
                  font-weight:bold;">
          Get Started
        </a>
      </td>
    </tr>

    <!-- Footer -->
    <tr>
      <td style="background:#222; color:#ccc; text-align:center; padding:20px;">
        <p>Follow Us</p>
        <p>
          🌐 Facebook | 🐦 Twitter | 💼 LinkedIn
        </p>
        <p style="font-size:12px;">
          You received this email because you signed up on our platform.
        </p>
      </td>
    </tr>

  </table>

</body>
</html>
  `;
}
