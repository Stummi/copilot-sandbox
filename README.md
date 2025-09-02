# Hello World Static Webpage

A simple static webpage demonstrating HTML, CSS, and JavaScript working together to create an interactive web experience.

## Features

- **Modern HTML5**: Semantic markup with proper accessibility
- **Responsive CSS**: Beautiful gradient design that works on all devices
- **Interactive JavaScript**: Counter demo, color changer, and dynamic content
- **Professional Design**: Clean, modern UI with smooth animations

## GitHub Pages Deployment

This repository is configured for automatic GitHub Pages deployment. The website will be automatically deployed when changes are pushed to the `main` branch.

### Setup Instructions

1. Go to your repository settings
2. Navigate to "Pages" in the left sidebar
3. Under "Source", select "GitHub Actions"
4. The workflow will automatically deploy your site on the next push to `main`

Your site will be available at: `https://[username].github.io/[repository-name]`

## Local Development

To run locally, simply open `index.html` in your web browser or serve the files with any static web server:

```bash
# Using Python (if installed)
python -m http.server 8000

# Using Node.js (if http-server is installed)
npx http-server

# Or just open index.html directly in your browser
```

## Files Structure

- `index.html` - Main webpage with semantic HTML structure
- `style.css` - Modern CSS with responsive design and animations
- `script.js` - Interactive JavaScript functionality
- `.github/workflows/deploy.yml` - GitHub Actions workflow for automatic deployment