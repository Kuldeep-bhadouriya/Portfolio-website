# 🌟 Portfolio Website - Kuldeep Singh Bhadouriya

> A modern, SEO-optimized, and fully responsive portfolio website built with Next.js 14, showcasing projects, services, and contact functionality.

[![Next.js](https://img.shields.io/badge/Next.js-14.2.7-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-18.3.1-blue?style=flat-square&logo=react)](https://react.dev/)
[![License](https://img.shields.io/badge/license-MIT-green?style=flat-square)](LICENSE)

## ✨ Features

### 🎨 Design & UX

- ✅ Fully responsive design (mobile-first approach)
- ✅ Modern dark/light theme toggle with localStorage persistence
- ✅ Smooth scroll animations (ScrollReveal + GSAP)
- ✅ Interactive UI elements with hover effects
- ✅ Skip-to-content link for keyboard accessibility
- ✅ Custom loading states and error boundaries

### 🚀 Performance

- ✅ Next.js 14 with App Router
- ✅ Optimized Google Fonts loading with `next/font`
- ✅ Image optimization ready (Next.js Image component compatible)
- ✅ Static generation for blazing-fast load times
- ✅ Lazy loading for below-the-fold content

### 🔒 Security

- ✅ Security headers (HSTS, CSP, X-Frame-Options, etc.)
- ✅ Rate limiting on contact form API (5 requests/min)
- ✅ Input sanitization and validation
- ✅ Environment variable protection
- ✅ CSRF protection ready

### 📈 SEO Optimized

- ✅ Comprehensive meta tags (Open Graph, Twitter Cards)
- ✅ Structured data with JSON-LD (Schema.org Person)
- ✅ Dynamic sitemap generation
- ✅ Robots.txt configuration
- ✅ Canonical URLs
- ✅ Google Search Console verification
- ✅ Semantic HTML5 markup

### ♿ Accessibility

- ✅ WCAG 2.1 AA compliant
- ✅ Proper ARIA labels and roles
- ✅ Keyboard navigation support
- ✅ Screen reader friendly
- ✅ Alt text for all images
- ✅ Sufficient color contrast

### 📧 Contact Form

- ✅ Dual submission system (EmailJS + Nodemailer fallback)
- ✅ Real-time validation
- ✅ Success/error message feedback
- ✅ Rate limiting protection
- ✅ Honeypot spam protection ready

### 🎯 PWA Ready

- ✅ Web app manifest
- ✅ Multiple icon sizes
- ✅ Theme color configuration
- ✅ Service worker ready

## 🛠️ Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Library:** React 18
- **Styling:** Custom CSS with CSS Variables
- **Animations:** GSAP, ScrollReveal
- **Email:** EmailJS, Nodemailer
- **Deployment:** Vercel (optimized)

## 📦 Installation

### Prerequisites

- Node.js 18.x or higher
- npm, yarn, or pnpm

### Quick Start

1. **Clone the repository**

```bash
git clone https://github.com/Kuldeep-bhadouriya/Portfolio-website.git
cd Portfolio-website/portfolio-website
```

2. **Install dependencies**

```bash
npm install
# or
yarn install
# or
pnpm install
```

3. **Set up environment variables**

Create a `.env.local` file in the root directory:

```env
# EmailJS Configuration
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key_here
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id_here
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id_here

# SMTP Configuration (Optional - for fallback)
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your_email@gmail.com
SMTP_PASS=your_app_password_here

# Contact Form Settings
CONTACT_TO=your_inbox@example.com
CONTACT_FROM="Portfolio <no-reply@example.com>"

# Site Configuration
NEXT_PUBLIC_SITE_URL=https://your-domain.com
```

> 📝 **Note:** See `.env.example` for all available environment variables.

4. **Run development server**

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view your portfolio.

## 📜 Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm start            # Start production server
npm run lint         # Run ESLint
npm run copy:assets  # Copy static assets to public folder
```

## 📁 Project Structure

```
portfolio-website/
├── app/
│   ├── api/
│   │   ├── contact/
│   │   │   └── route.js          # Contact form API endpoint
│   │   └── lib/
│   │       └── rateLimit.js      # Rate limiting utility
│   ├── components/
│   │   ├── EmailJSScript.js      # EmailJS initialization
│   │   └── StructuredData.js     # SEO structured data
│   ├── error.js                  # Error boundary
│   ├── loading.js                # Loading state
│   ├── not-found.js              # 404 page
│   ├── layout.js                 # Root layout
│   ├── page.js                   # Home page
│   ├── globals.css               # Global styles
│   └── sitemap.ts                # Dynamic sitemap
├── public/
│   ├── assets/                   # Static assets (images, CSS, JS)
│   ├── manifest.json             # PWA manifest
│   └── robots.txt                # SEO robots file
├── scripts/
│   └── copy-static.mjs           # Asset copying script
├── .env.example                  # Environment variables template
├── .gitignore                    # Git ignore rules
├── next.config.mjs               # Next.js configuration
└── package.json                  # Dependencies
```

## 🔧 Configuration

### EmailJS Setup

1. Create an account at [EmailJS](https://www.emailjs.com/)
2. Create a new email service
3. Create an email template
4. Copy your credentials to `.env.local`

### SMTP Fallback (Optional)

For Gmail:

1. Enable 2-Factor Authentication
2. Generate an App Password
3. Add credentials to `.env.local`

## 🌐 Deployment

### Deploy to Vercel (Recommended)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/Kuldeep-bhadouriya/Portfolio-website)

1. Push your code to GitHub
2. Import your repository to [Vercel](https://vercel.com)
3. Add environment variables in Vercel dashboard
4. Deploy!

### Manual Deployment

```bash
npm run build
npm start
```

## 📊 Performance Scores

Target metrics (Lighthouse):

- **Performance:** 95+
- **Accessibility:** 95+
- **Best Practices:** 100
- **SEO:** 100

## 🎨 Customization

### Colors

Edit CSS variables in `app/globals.css`:

```css
:root {
  --first-color: hsl(14, 98%, 50%);
  --black-color: hsl(0, 0%, 0%);
  --white-color: hsl(0, 0%, 95%);
  --title-color: hsl(0, 0%, 0%);
  --text-color: hsl(0, 0%, 35%);
  --body-color: hsl(0, 0%, 87%);
}
```

### Content

1. **Personal Info:** Edit `app/page.js`
2. **Projects:** Update project cards in `app/page.js`
3. **Services:** Modify service cards in `app/page.js`
4. **Images:** Replace images in `public/assets/img/`

## 🐛 Troubleshooting

### Contact form not working

- Verify EmailJS credentials in `.env.local`
- Check browser console for errors
- Ensure domain is whitelisted in EmailJS dashboard

### Build errors

```bash
rm -rf .next node_modules
npm install
npm run build
```

### Images not loading

```bash
npm run copy:assets
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 👤 Author

**Kuldeep Singh Bhadouriya**

- GitHub: [@Kuldeep-bhadouriya](https://github.com/Kuldeep-bhadouriya)
- LinkedIn: [Kuldeep Singh Bhadouriya](https://www.linkedin.com/in/kuldeep-singh-bhadouriya-68a748311/)
- Instagram: [@tf.kuldeep](https://www.instagram.com/tf.kuldeep/)

## 🙏 Acknowledgments

- Font: [Bai Jamjuree](https://fonts.google.com/specimen/Bai+Jamjuree) by Google Fonts
- Icons: [Remix Icon](https://remixicon.com/)
- Animations: [GSAP](https://greensock.com/gsap/) & [ScrollReveal](https://scrollrevealjs.org/)

---

⭐ Star this repository if you found it helpful!

Made with ❤️ by Kuldeep Singh Bhadouriya
