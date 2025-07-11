# Adriel Ramirez - Portfolio Website

A modern, responsive portfolio website showcasing my skills, projects, and experience as a software developer.

## 🚀 Features

- **Modern Design**: Clean, professional design inspired by modern portfolio websites
- **Responsive**: Fully responsive design that works on all devices
- **Smooth Animations**: CSS animations and JavaScript interactions for enhanced UX
- **Mobile-First**: Optimized for mobile devices with hamburger menu
- **SEO Optimized**: Meta tags and structured data for better search engine visibility
- **Fast Loading**: Optimized assets and minimal dependencies
- **Accessible**: Built with accessibility in mind

## 📁 Project Structure

```
portfolio/
├── index.html          # Main HTML file
├── css/
│   └── style.css       # Main stylesheet
├── js/
│   └── main.js         # JavaScript functionality
├── assets/
│   ├── README.md       # Assets documentation
│   ├── profile.jpg     # Profile picture (add your own)
│   ├── favicon.ico     # Website favicon
│   └── og-image.jpg    # Social media image
├── package.json        # Project configuration
└── README.md          # This file
```

## 🛠️ Technologies Used

- **HTML5**: Semantic markup
- **CSS3**: Modern styling with Flexbox and Grid
- **JavaScript (ES6+)**: Interactive functionality
- **Responsive Design**: Mobile-first approach
- **CSS Animations**: Smooth transitions and effects

## 🚀 Getting Started

### Prerequisites

- A modern web browser
- Python 3.x (for local development server)
- Git (for version control)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/adrielramirez/portfolio.git
   cd portfolio
   ```

2. **Start the development server**
   ```bash
   # Using Python (recommended)
   python -m http.server 8000
   
   # Or using Node.js
   npm start
   ```

3. **Open your browser**
   Navigate to `http://localhost:8000`

## 🎨 Customization

### Personal Information

Update the following in `index.html`:

- **Name**: Replace "Adriel Ramirez" with your name
- **Title**: Update the job title and description
- **About**: Modify the about section content
- **Contact**: Update email and social media links
- **Projects**: Add your own projects and descriptions

### Styling

The main styles are in `css/style.css`. Key customization points:

- **Colors**: Update the CSS custom properties for brand colors
- **Fonts**: Change the font family in the body selector
- **Layout**: Modify grid layouts and spacing
- **Animations**: Adjust animation timings and effects

### Images

1. **Profile Picture**: Add your photo as `assets/profile.jpg`
2. **Project Images**: Add project screenshots to the assets folder
3. **Favicon**: Create a custom favicon
4. **Social Media Image**: Add an Open Graph image for social sharing

### JavaScript Features

The main functionality is in `js/main.js`:

- **Mobile Menu**: Hamburger menu for mobile devices
- **Smooth Scrolling**: Navigation link scrolling
- **Scroll Animations**: Elements animate on scroll
- **Typing Effect**: Hero text typing animation
- **Active Navigation**: Highlights current section

## 📱 Responsive Design

The website is fully responsive with breakpoints at:

- **Desktop**: 1200px and above
- **Tablet**: 768px - 1199px
- **Mobile**: Below 768px

## 🔧 Development

### Adding New Sections

1. Add the HTML structure in `index.html`
2. Add corresponding styles in `css/style.css`
3. Add any JavaScript functionality in `js/main.js`

### Adding New Projects

1. Copy the project card structure in the projects section
2. Update the project image, title, description, and technologies
3. Add any project-specific styles if needed

### Performance Optimization

- Optimize images before adding to assets
- Minify CSS and JavaScript for production
- Use a CDN for external resources
- Enable gzip compression on your server

## 🚀 Deployment

### Vercel (Recommended)

1. **Install Vercel CLI**
   ```bash
   npm i -g vercel
   ```

2. **Deploy from command line**
   ```bash
   vercel
   ```

3. **Or connect GitHub repository**
   - Push your code to GitHub
   - Go to [vercel.com](https://vercel.com)
   - Import your repository
   - Vercel will automatically detect it's a static site and deploy

4. **Automatic deployments**
   - Every push to your main branch will trigger a new deployment
   - Preview deployments are created for pull requests

### GitHub Pages

1. Push your code to GitHub
2. Go to repository Settings > Pages
3. Select source branch (usually `main`)
4. Your site will be available at `https://username.github.io/repository-name`

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📞 Contact

- **Email**: adriel@example.com
- **LinkedIn**: [Adriel Ramirez](https://linkedin.com/in/adrielramirez)
- **GitHub**: [@adrielramirez](https://github.com/adrielramirez)

## 🙏 Acknowledgments

- Design inspiration from modern portfolio websites
- Icons from various icon libraries
- Community feedback and suggestions

---

**Note**: Remember to replace placeholder content (email, social links, project details) with your actual information before deploying. 