# xotoro.pvt.ltd - Professional Software Development Company Website

A modern, responsive website built with Next.js, Tailwind CSS, and shadcn/ui components.

## 🚀 Quick Start

### Development
```bash
npm install
npm run dev
```
Visit `http://localhost:8000` to view the website.

### Production Build
```bash
npm run build
npm run start
```

## 📁 Project Structure

```
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Root layout
│   │   ├── page.tsx            # Homepage
│   │   └── globals.css         # Global styles
│   └── components/
│       ├── Header.tsx          # Navigation header
│       ├── Footer.tsx          # Site footer
│       └── ui/                 # shadcn/ui components
├── public/                     # Static assets
├── DEPLOYMENT_GUIDE.md         # Detailed deployment instructions
└── deploy-setup.sh            # Deployment preparation script
```

## 🌐 Deployment Options

### Option 1: Vercel (Recommended)
1. Visit [vercel.com](https://vercel.com)
2. Import this project from your Git repository
3. Deploy automatically

### Option 2: Netlify
1. Visit [netlify.com](https://netlify.com)
2. Connect your Git repository or drag & drop the build folder
3. Configure build settings: `npm run build`, publish directory: `.next`

### Option 3: Quick Setup Script
```bash
./deploy-setup.sh
```

## 📋 Features

- ✅ Responsive design for all devices
- ✅ Modern UI with Tailwind CSS
- ✅ Smooth scrolling navigation
- ✅ Contact form with validation
- ✅ SEO optimized
- ✅ Fast loading with Next.js optimization
- ✅ Professional portfolio showcase
- ✅ Service offerings display

## 🛠 Technologies Used

- **Framework**: Next.js 15.3.2
- **Styling**: Tailwind CSS 4.1.6
- **UI Components**: shadcn/ui
- **Language**: TypeScript
- **Fonts**: Google Fonts (Inter)

## 📖 Detailed Deployment Guide

For comprehensive deployment instructions including Docker, GitHub Pages, and traditional hosting, see [DEPLOYMENT_GUIDE.md](./DEPLOYMENT_GUIDE.md).

## 🔧 Customization

### Updating Company Information
- Edit contact details in `src/components/Footer.tsx`
- Update company description in `src/app/page.tsx`
- Modify services in the Services section

### Adding New Sections
- Create new components in `src/components/`
- Import and use in `src/app/page.tsx`
- Update navigation in `src/components/Header.tsx`

### Styling Changes
- Global styles: `src/app/globals.css`
- Component-specific: Use Tailwind classes
- Custom components: `src/components/ui/`

## 📞 Support

For deployment assistance or customization needs, refer to the deployment guide or contact the development team.

---

**Built with ❤️ for xotoro.pvt.ltd**
