# Aliramedia - Modern Website

A modern, responsive website built with Next.js 14 and Tailwind CSS.

## 🚀 Features

- **Next.js 14** - Modern React framework with App Router
- **Tailwind CSS** - Utility-first CSS framework
- **Responsive Design** - Mobile-first approach
- **Dark Mode** - Built-in dark mode support
- **TypeScript** - Type-safe development
- **Performance Optimized** - Fast loading and excellent Lighthouse scores
- **SEO Ready** - Optimized for search engines
- **Smooth Animations** - Modern animations and transitions

## 📋 Prerequisites

- Node.js 18+ 
- npm or yarn

## 🛠️ Installation

1. Clone the repository:
```bash
git clone https://github.com/Aliramedia/aliramedia.github.com.git
cd aliramedia.github.com
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📦 Building for Production

```bash
npm run build
npm run start
```

For static export (GitHub Pages):
```bash
npm run export
```

## 📁 Project Structure

```
.
├── app/
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Home page
│   └── globals.css         # Global styles
├── components/
│   ├── Navigation.tsx      # Navigation bar
│   ├── Hero.tsx            # Hero section
│   ├── Services.tsx        # Services showcase
│   ├── Portfolio.tsx       # Portfolio/projects
│   ├── About.tsx           # About section
│   ├── Testimonials.tsx    # Client testimonials
│   ├── Contact.tsx         # Contact form
│   ├── CTA.tsx             # Call to action
│   └── Footer.tsx          # Footer
├── public/
│   ├── favicon.png         # Favicon
│   └── Aliramedia W.png    # Logo
├── next.config.js          # Next.js configuration
├── tailwind.config.ts      # Tailwind configuration
├── tsconfig.json           # TypeScript configuration
└── package.json            # Project dependencies
```

## 🎨 Customization

### Colors
Edit `tailwind.config.ts` to customize colors:
```typescript
colors: {
  primary: '#2563eb',
  secondary: '#1e40af',
  // ...
}
```

### Fonts
Fonts are imported from Google Fonts in `app/globals.css`

### Content
Edit component files directly in the `components/` directory

## 🚀 Deployment

### GitHub Pages
1. Update `next.config.js` with your repository name
2. Run: `npm run build`
3. Push to your GitHub repository
4. Enable GitHub Pages in repository settings

### Vercel
1. Push your code to GitHub
2. Connect repository to Vercel
3. Vercel automatically deploys on each push

### Other Platforms
The project can be deployed to any platform that supports Node.js or static hosting.

## 📝 License

MIT License - feel free to use this project for your own purposes.

## 📧 Contact

- **Phone**: +62 851-5794-4600
- **Email**: info@aliramedia.com
- **Location**: Makassar, Indonesia

---

Built with ❤️ by Aliramedia
