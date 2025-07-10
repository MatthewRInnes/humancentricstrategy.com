# Human Centric Strategy - Multilingual HR Consultancy Landing Page

A modern, responsive landing page for Human Centric Strategy, built with Next.js, featuring bilingual support (English/Spanish), dark mode, and a professional HR consultancy design.

## 🚀 Features

- **🌐 Multilingual Support**: English and Spanish with seamless language switching
- **🌓 Dark Mode**: Toggle between light and dark themes with system preference detection
- **📱 Responsive Design**: Optimized for all devices and screen sizes
- **⚡ Performance**: Built with Next.js for optimal loading speeds
- **🎨 Modern UI**: Clean, professional design with Tailwind CSS
- **📧 Contact Form**: Functional contact form with API route handling
- **🔍 SEO Optimized**: Built-in SEO with next-seo

## 🛠️ Tech Stack

- **Framework**: Next.js 14
- **Styling**: Tailwind CSS
- **Internationalization**: next-i18next
- **TypeScript**: Full type safety
- **SEO**: next-seo
- **Deployment**: Vercel ready

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd humancentricstrategy.com
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🌐 Language Support

The site supports two languages:
- **English** (`/en`) - Default language
- **Spanish** (`/es`) - Secondary language

Language switching is available via the language switcher in the navigation bar and footer.

## 🎨 Customization

### Colors
The color scheme is defined in `tailwind.config.js`:
- `charcoal`: #2C3E50 (Primary text)
- `gold`: #C4A35A (Accent color)
- `taupe`: #D6CFC7 (Light background)
- `dark`: #121212 (Dark mode background)

### Content
All text content is managed through i18n files:
- English: `public/locales/en/common.json`
- Spanish: `public/locales/es/common.json`

### Images
Replace placeholder images in the Hero section:
1. Add your hero image to `public/images/hero.jpg`
2. Uncomment the Image component in `components/Hero.tsx`

## 📧 Contact Form

The contact form submits to `/api/contact` and includes:
- Form validation
- Success/error handling
- Email format validation

To enable email sending, configure your preferred email service in the API route.

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Other Platforms
Build the project:
```bash
npm run build
npm start
```

## 📁 Project Structure

```
├── components/          # React components
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── About.tsx
│   ├── Services.tsx
│   ├── Testimonials.tsx
│   ├── Contact.tsx
│   ├── Footer.tsx
│   ├── LanguageSwitcher.tsx
│   └── DarkModeToggle.tsx
├── contexts/           # React contexts
│   └── DarkModeContext.tsx
├── pages/             # Next.js pages
│   ├── index.tsx
│   └── api/
│       └── contact.ts
├── public/            # Static assets
│   ├── locales/       # i18n files
│   └── images/        # Images
├── styles/            # Global styles
│   └── globals.css
└── package.json
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 📞 Support

For support or questions, please contact:
- Email: info@humancentricstrategy.com
- Website: https://humancentricstrategy.com // Trigger Vercel cache clear
