# Contact Form Email Setup Guide

## Overview
The contact form now sends emails using Next.js API routes and Nodemailer. When a user submits the contact form, it will send an email to your specified address.

## Quick Setup

### 1. Configure Environment Variables
Edit the `.env.local` file in your project root with your email credentials:

```env
# Gmail Configuration (recommended)
EMAIL_USER=your-gmail@gmail.com
EMAIL_PASS=your-16-character-app-password
CONTACT_EMAIL=where-you-want-emails@gmail.com
```

### 2. Gmail Setup (Recommended)
1. **Enable 2-Factor Authentication** on your Gmail account
2. Go to [Google App Passwords](https://myaccount.google.com/apppasswords)
3. Generate an app password for "Mail"
4. Use that 16-character password in `EMAIL_PASS` (not your regular password)

### 3. Test the Form
1. Start your development server: `npm run dev`
2. Navigate to `/contact`
3. Fill out and submit the form
4. Check your email for the submission

## File Structure

```
src/
├── app/
│   ├── api/
│   │   └── contact/
│   │       └── route.js          # Email sending API endpoint
│   └── contact/
│       └── page.js               # Contact page route
└── components/
    └── ContactPage.jsx           # Contact form component
```

## Features

### Email Template
The email includes:
- **Sender Information**: Name, email, subject
- **Message Content**: Full message with line breaks preserved
- **Professional Styling**: HTML formatted email
- **Reply-To**: Set to sender's email for easy replies
- **Timestamp**: When the form was submitted

### Form Validation
- **Client-side**: Email and message fields are required
- **Server-side**: Additional validation in API route
- **Loading States**: Button shows "Sending..." during submission
- **Error Handling**: Specific error messages for different failure types

### User Experience
- **Success Message**: Confirmation when email is sent
- **Error Messages**: Clear feedback if something goes wrong
- **Form Reset**: Clears form after successful submission
- **Loading Indicator**: Visual feedback during submission

## Alternative Email Providers

### Outlook/Hotmail
```javascript
// In route.js, change the transporter to:
const transporter = nodemailer.createTransporter({
  service: 'outlook',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});
```

### Yahoo
```javascript
const transporter = nodemailer.createTransporter({
  service: 'yahoo',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});
```

### Custom SMTP
```javascript
const transporter = nodemailer.createTransporter({
  host: 'your-smtp-server.com',
  port: 587,
  secure: false,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});
```

## Troubleshooting

### Common Issues

#### "Authentication failed" Error
- **Gmail**: Make sure you're using an app password, not your regular password
- **2FA**: Ensure 2-Factor Authentication is enabled on your account
- **Credentials**: Double-check your email and password in `.env.local`

#### "Connection refused" Error
- Check your internet connection
- Verify the SMTP settings for your email provider
- Some ISPs block outgoing SMTP connections

#### Emails not arriving
- Check your spam/junk folder
- Verify the `CONTACT_EMAIL` address is correct
- Try sending to a different email address

#### Form submission stuck on "Sending..."
- Open browser developer tools and check the Console for errors
- Verify your `.env.local` file has the correct variable names
- Check that your development server restarted after changing environment variables

### Production Deployment

For production (Vercel, Netlify, etc.):
1. Add the same environment variables to your hosting platform
2. Never commit the `.env.local` file to version control
3. Consider using more robust email services like:
   - SendGrid
   - Amazon SES
   - Mailgun
   - Postmark

### Security Notes
- Environment variables are kept secure and not exposed to the client
- The API route validates input to prevent spam
- Rate limiting can be added for production use
- Consider adding CAPTCHA for additional spam protection

## Support
If you encounter issues:
1. Check the browser console for error messages
2. Check your server logs for API errors
3. Verify your environment variables are correct
4. Test with a simple email service like Gmail first
