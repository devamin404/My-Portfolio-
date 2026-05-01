# Portfolio Website

[![Live Demo](https://img.shields.io/badge/Live-Demo-68dbe9?style=for-the-badge&logo=vercel)](https://muhammadaminportfolio.vercel.app)
[![GitHub](https://img.shields.io/badge/GitHub-Repository-181717?style=for-the-badge&logo=github)](https://github.com/devamin404/My-Portfolio-.git)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Connect-0077B5?style=for-the-badge&logo=linkedin)](https://www.linkedin.com/in/muhammad-amin-989269398)

---

## 🌟 Overview

A modern, responsive portfolio website built with **React** and **Framer Motion**, featuring smooth animations, glassmorphism design, and a fully functional contact form with spam protection.

### ✨ Key Features

- 🎨 **Modern UI/UX** - Glassmorphism design with gradient effects
- ⚡ **Smooth Animations** - Powered by Framer Motion for professional transitions
- 📱 **Fully Responsive** - Optimized for all devices (mobile, tablet, desktop)
- 📧 **Working Contact Form** - EmailJS integration with validation and cooldown
- 🛡️ **Spam Protection** - Honeypot field and rate limiting
- ⌨️ **Typing Effects** - Dynamic name and role animations
- 🎯 **Performance Optimized** - Fast load times and efficient rendering
- ♿ **Accessible** - Semantic HTML and ARIA labels

---

## 🛠️ Tech Stack

### Frontend

![React](https://img.shields.io/badge/React-19.x-61DAFB?style=flat-square&logo=react&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=flat-square&logo=javascript&logoColor=black)
![CSS Modules](https://img.shields.io/badge/CSS-Modules-1572B6?style=flat-square&logo=css3)
![Framer Motion](https://img.shields.io/badge/Framer-Motion-0055FF?style=flat-square&logo=framer)

### Tools & Libraries

- **EmailJS** - Email service integration
- **Typed.js** - Typing animation effects
- **React Toastify** - Toast notifications
- **Vite** - Build tool and dev server
- **Devicon** - Developer icons

---

## 🚀 Quick Start

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Clone the repository**

```bash
git clone https://github.com/devamin404/portfolio.git
cd portfolio
```

2. **Install dependencies**

```bash
npm install
```

3. **Set up environment variables**

Create a `.env` file in the root directory:

```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

> 💡 Get your EmailJS credentials from [EmailJS Dashboard](https://www.emailjs.com/)

4. **Run the development server**

```bash
npm run dev
```

5. **Build for production**

```bash
npm run build
```

---

## 📁 Project Structure

```
portfolio/
├── public/
│   └── Images/
│       ├── Icons/
│       └── Projects/
├── src/
│   ├── Assets/
│   │   ├── Icons/
│   │   └── Images/
│   ├── Components/
│   │   ├── NameTyping.jsx
│   │   └── RoleTyping.jsx
│   ├── Data/
│   │   ├── assets.js
│   │   ├── index.js
│   │   └── projectsData.js
│   ├── Pages/
│   │   ├── About/
│   │   │   ├── About.jsx
│   │   │   └── About.module.css
│   │   ├── Contact/
│   │   │   ├── Contact.jsx
│   │   │   └── Contact.module.css
│   │   ├── Home/
│   │   │   ├── Header.jsx
│   │   │   └── Header.module.css
│   │   ├── Project/
│   │   │   ├── Project.jsx
│   │   │   └── Project.module.css
│   │   └── Projects/
│   │       ├── Projects.jsx
│   │       └── Projects.module.css
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── .env
├── package.json
├── vite.config.js
└── README.md

```

---

## 🎯 Features Deep Dive

### 🎨 Design System

- **Color Palette**: Purple-cyan gradient theme
- **Typography**: Inter font family
- **Effects**: Glassmorphism, gradient overlays, smooth transitions
- **Animations**: Fade-in, slide, scale, and stagger effects

### 📧 Contact Form

- Real-time form validation
- Email delivery via EmailJS
- 15-minute cooldown to prevent spam
- Honeypot field for bot protection
- Toast notifications for user feedback
- Loading states during submission

### ⚡ Performance

- Lazy loading for images
- Optimized animations with Framer Motion
- CSS Modules for scoped styling
- Code splitting with Vite
- Responsive images

---

## 🙏 Acknowledgments

- Design inspiration from modern portfolio trends
- Icons from [Devicon](https://devicon.dev/)
- Gradient backgrounds inspired by glassmorphism design
- EmailJS for email service integration

---

### Made with ❤️ by [Muhammad Amin](https://github.com/devamin404)
