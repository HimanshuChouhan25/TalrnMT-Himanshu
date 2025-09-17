# Talrn Assessment - React Application

A React.js application replicating Talrn.com home page and registration flow with email OTP verification.

## 🚀 Features

- **Home Page**: Exact replica of Talrn.com with animated developer cards
- **Registration Flow**: Multi-step registration with email OTP verification
- **Email Integration**: Uses EmailJS for sending OTP to user's email
- **Form Validation**: Client-side validation for all form fields
- **Responsive Design**: Mobile-first responsive design
- **Animated Cards**: Smooth sliding animation for developer profiles

## 🛠️ Technologies Used

- React 18
- React Router DOM
- EmailJS
- CSS-in-JS styling
- Responsive design principles

## 📦 Installation

1. **Clone the repository**
```bash
git clone https://github.com/HimanshuChouhan25/TalrnMT-Himanshu.git
cd TalrnMT-Himanshu
```

2. **Install dependencies**
```bash
npm install
```

3. **Configure EmailJS**
   - Sign up at https://www.emailjs.com/
   - Create a service and template
   - Copy `.env.example` to `.env` and update with your credentials:
     ```bash
     cp .env.example .env
     ```
   - Update the values in `.env` file with your EmailJS credentials

4. **Start the development server**
```bash
npm start
```

## 📧 EmailJS Template Setup

Create an email template with these variables:
- `{{to_email}}` - Recipient email
- `{{otp_code}}` - 6-digit OTP code
- `{{user_name}}` - User's first name

**Template Example:**
```
Subject: Your Talrn OTP Code

Hi {{user_name}},

Your OTP code is: {{otp_code}}

This code will expire in 10 minutes.

Best regards,
Talrn Team
```

## 🏗️ Project Structure

```
src/
├── components/
│   └── Header.jsx
├── pages/
│   ├── Home.jsx          # Talrn.com replica with animations
│   └── Join.jsx          # Registration flow with OTP
├── App.js
├── index.js
└── index.css
```

## 🎯 Key Features Implemented

### Home Page
- **Hero Section**: "Find & Hire iOS Developers with Ease" with search bar
- **Animated Cards**: Developer profiles with smooth sliding animation
- **Stats Section**: Key metrics (500+ developers, 48hrs hire time)
- **Features Grid**: Three main value propositions
- **Responsive Design**: Mobile-friendly layout

### Registration Flow
1. **Email Input**: User enters email address
2. **OTP Verification**: 6-digit code sent via EmailJS
3. **Complete Registration**: Name and password fields
4. **Success Page**: Registration confirmation

### Animation Details
- Cards slide from right side into queue
- Front card exits to top, others move forward
- Infinite loop with 3-second intervals
- Smooth transitions with cubic-bezier easing

## 🚀 Deployment

Build for production:
```bash
npm run build
```

Deploy the `build` folder to any static hosting service:
- Netlify
- Vercel
- GitHub Pages
- Firebase Hosting

## 📱 Responsive Design

- Mobile-first approach
- Breakpoints for tablets and desktops
- Optimized for all screen sizes
- Touch-friendly interface

## 🔧 Configuration

### EmailJS Setup
1. Go to https://dashboard.emailjs.com/admin
2. Create a new service (Gmail recommended)
3. Create email template with required variables
4. Get your Service ID, Template ID, and Public Key
5. Update the credentials in `Join.jsx`

### Environment Variables (Optional)
Create `.env` file for sensitive data:
```
REACT_APP_EMAILJS_SERVICE_ID=your_service_id
REACT_APP_EMAILJS_TEMPLATE_ID=your_template_id
REACT_APP_EMAILJS_PUBLIC_KEY=your_public_key
```

## 🎨 Design Highlights

- **Color Scheme**: Blue (#2563eb) primary color matching Talrn
- **Typography**: Modern, clean fonts with proper hierarchy
- **Animations**: Smooth, professional transitions
- **Layout**: Grid-based responsive design
- **Icons**: Emoji avatars for visual appeal

## 📝 Assessment Requirements

✅ **Task 1**: Replicate Talrn.com home page in React.js  
✅ **Task 2**: Create Talrn.com/join with email OTP verification  
✅ **Responsive Design**: Custom coded in React  
✅ **Email Integration**: Working OTP system  
✅ **Form Validation**: Complete validation flow  

## 🤝 Contributing

This is an assessment project. For any questions or improvements, please contact the developer.

## 📄 License

This project is created for assessment purposes.

## 👨‍💻 Developer

**Himanshu Chouhan**
- GitHub: [@HimanshuChouhan25](https://github.com/HimanshuChouhan25)
- Email: himanshu9382gurjar@gmail.com

---

**Note**: This application replicates Talrn.com for assessment purposes and demonstrates React.js skills, email integration, and responsive design principles.