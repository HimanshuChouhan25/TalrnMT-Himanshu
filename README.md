# Talrn Assessment - React Application

A React.js application replicating Talrn.com home page and registration flow with email OTP verification.

## Features

- **Home Page**: Modern, responsive landing page with hero section, features, and call-to-action
- **Registration Flow**: Multi-step registration with email OTP verification
- **Email Integration**: Uses EmailJS for sending OTP to user's email
- **Form Validation**: Client-side validation for all form fields
- **Responsive Design**: Mobile-first responsive design

## Setup Instructions

1. Install dependencies:
```bash
npm install
```

2. Configure EmailJS:
   - Sign up at https://www.emailjs.com/
   - Create a service and template
   - Update the EmailJS configuration in `src/pages/Join.jsx`:
     - Replace `service_talrn` with your service ID
     - Replace `template_otp` with your template ID
     - Replace `your_public_key` with your public key

3. Start the development server:
```bash
npm start
```

## EmailJS Template Setup

Create an email template with these variables:
- `{{to_email}}` - Recipient email
- `{{otp_code}}` - 6-digit OTP code
- `{{user_name}}` - User's first name

## Deployment

Build for production:
```bash
npm run build
```

Deploy the `build` folder to any static hosting service like:
- Netlify
- Vercel
- GitHub Pages
- Firebase Hosting

## Project Structure

```
src/
├── components/
│   └── Header.jsx
├── pages/
│   ├── Home.jsx
│   └── Join.jsx
├── App.js
├── index.js
└── index.css
```

## Technologies Used

- React 18
- React Router DOM
- EmailJS
- CSS-in-JS styling
- Responsive design principles