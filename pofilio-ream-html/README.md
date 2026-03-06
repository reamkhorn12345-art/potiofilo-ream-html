# Khorn Ream - Portfolio Website

A modern, responsive personal portfolio website showcasing web development and UI/UX design expertise. Built with vanilla HTML, CSS, and JavaScript.

## 📋 Overview

This is a professional portfolio website featuring a sleek design with:
- Dark/Light theme toggle
- Responsive mobile-first design
- Smooth scroll navigation
- Interactive hero section
- Portfolio showcase
- Contact functionality
- Modern animations and transitions

## 🎯 Purpose

This portfolio is designed to:
- Showcase professional projects and experience
- Demonstrate full-stack web development skills
- Highlight UI/UX design capabilities
- Provide a professional first impression to potential clients and employers
- Enable direct contact for business inquiries

## ✨ Features

### 🌓 Theme Toggle
- Dark/Light mode switching
- Theme preference saved to localStorage
- Smooth transitions between themes
- Visual indicator (☀️ for dark mode, 🌙 for light mode)

### 📱 Responsive Design
- Mobile-first approach
- Hamburger menu for mobile devices
- Fully responsive navigation
- Auto-closes mobile menu when link is clicked

### 🔗 Navigation
- Smooth scroll animation between sections
- Fixed navigation header with brand logo
- Navigation links to: About, Experience, Projects, and Contact
- Premium "Work with me" CTA button

### 🎨 Design Elements
- Feature highlights with icons (Fast, Mobile-First, Modern, Web Development)
- Animated background elements in hero section
- Image glow effect
- Gradient buttons with hover effects
- Clean typography using Poppins font family

### 📧 Modal Functionality
- Terms and Privacy modal dialog
- Accept/Decline functionality
- Form integration with terms acceptance
- Clean close button

## 📁 Project Structure

```
pofilio-ream-html/
├── index.html          # Main HTML structure
├── style.css           # Styling and responsive design
├── script.js           # Interactive functionality
├── README.md           # Documentation
└── img/                # Images folder
    ├── icon.png        # Favicon
    └── image.png       # Profile image
```

## 🛠️ Technologies Used

- **HTML5** - Semantic markup
- **CSS3** - Styling, animations, flexbox/grid layouts
- **Vanilla JavaScript** - DOM manipulation and event handling
- **localStorage** - Theme preference persistence

## 📦 Key JavaScript Functions

### Theme Toggle (`script.js`)
```javascript
// Switches between dark and light modes
// Saves preference to localStorage
```

### Mobile Menu Toggle
```javascript
// Opens/closes hamburger menu on mobile
// Auto-closes when navigation link is clicked
// Closes when clicking outside menu
```

### Smooth Scroll Navigation
```javascript
// Enables smooth scrolling for anchor links
// Enhances user experience during navigation
```

### Terms Modal
```javascript
// Opens/closes terms and privacy modal
// Integrates with contact form validation
// Saves user acceptance state
```

## 🎨 Color Scheme

**Dark Mode (Default):**
- Background: `#121212`
- Text: `#ffffff`
- Accent: `#03dac6` (Teal)
- Primary Button: `#FF9F43` (Orange Gradient)

**Light Mode:**
- Background: `#f5f5f5`
- Text: `#1a1a1a`
- Accent: `#03dac6` (Teal)
- Primary Button: Same orange gradient

## 🚀 Usage

1. Open `index.html` in a web browser
2. Navigate using the menu or scroll
3. Toggle between dark/light mode using the theme button
4. On mobile, use the hamburger menu
5. Contact through the "Work with me" button

## ✅ Responsive Breakpoints

The design includes:
- Mobile-first approach
- Responsive typography
- Flexible navigation menu
- Adapted button sizes for different screens

## 📝 Features by Section

### Hero Section
- Greeting and introduction
- Name highlight with cyan color
- Professional subtitle
- Feature badges
- Call-to-action buttons (View Work, Get in Touch)
- Profile image with glow effect
- Scroll indicator

### Navigation
- Brand logo/name
- Menu toggle for mobile
- Navigation links
- Theme toggle button
- Premium contact button

### Additional Sections
- About section (anchor: `#about`)
- Experience section (anchor: `#experience`)
- Projects section (anchor: `#projects`)
- Contact section (anchor: `#contact`)

## 💾 LocalStorage Usage

- **Key:** `theme`
- **Values:** `'light'` or `'dark'`
- **Purpose:** Persists user's theme preference across sessions

## 🔄 Event Listeners

- Theme toggle button click
- Mobile menu toggle button click
- Navigation link clicks
- Smooth scroll anchor links
- Click outside menu to close

## 📌 Notes

- The portfolio is built with vanilla JavaScript for maximum compatibility
- No external dependencies required (except Poppins font from Google Fonts)
- All animations use CSS transitions for smooth performance
- Design follows modern web standards and accessibility best practices

## 🎯 Next Steps

Consider adding:
- Contact form backend integration
- Project filtering/categories
- Blog or articles section
- Testimonials/reviews section
- Skills/technologies showcase
- Animation libraries for enhanced effects
- SEO optimization enhancements

---

**Created by:** Khorn Ream  
**Created on:** 2025 .06.28