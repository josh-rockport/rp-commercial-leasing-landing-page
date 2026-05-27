# Rockport Landing Page

A modern, conversion-focused landing page for Rockport's social media advertising campaigns. Built with React, TypeScript, and Framer Motion.

## Features

- **Dynamic Text Replacement (DTR)** - Personalize headlines based on ad campaign URL parameters
- **Google Analytics 4** - Track conversions and user engagement
- **Resend Email Integration** - Contact form submissions sent via email
- **Framer Motion Animations** - Smooth scroll-triggered animations
- **Responsive Design** - Mobile-first approach with touch-friendly interactions
- **GitHub Pages Deployment** - Automated deployment via GitHub Actions

## Tech Stack

- React 18
- TypeScript
- Vite
- SASS
- Framer Motion
- Resend
- Google Analytics 4

## Getting Started

### Prerequisites

- Node.js 20+ installed
- npm or yarn package manager

### Installation

1. Clone the repository
2. Install dependencies:

```bash
npm install
```

If you encounter dependency conflicts, use:

```bash
npm install --legacy-peer-deps
```

3. Create a `.env` file based on `.env.example`:

```bash
cp .env.example .env
```

4. Add your environment variables:
   - `VITE_RESEND_API_KEY` - Your Resend API key
   - `VITE_GA4_MEASUREMENT_ID` - Your Google Analytics 4 measurement ID
   - `VITE_GTM_CONTAINER_ID` - (Optional) Your Google Tag Manager container ID

5. Add custom font files to `public/fonts/`:
   - `BebasNeue-Regular.woff` and `BebasNeue-Regular.woff2`
   - `Oswald-Regular.woff` and `Oswald-Regular.woff2`
   - `Oswald-Bold.woff` and `Oswald-Bold.woff2`

6. Add building images to `public/images/`

### Development

Run the development server:

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Building for Production

```bash
npm run build
```

The built files will be in the `dist/` directory.

### Preview Production Build

```bash
npm run preview
```

## Updating Building Data

To update the building cards displayed on the site:

1. Open `src/data/buildings.ts`
2. Edit the `buildings` array
3. Each building object has the following structure:

```typescript
{
  id: 'unique-id',
  name: 'Unit Name',
  image: '/images/building.jpg',
  price: '$2,500',
  size: '2,500 sq ft',
  features: ['Feature 1', 'Feature 2', 'Feature 3'],
  status: 'AVAILABLE' | 'COMING SOON',
  statusColor: '#00FF00'
}
```

4. Save the file and the changes will be reflected immediately in development mode

## Dynamic Text Replacement

See [docs/DYNAMIC_TEXT_SETUP.md](docs/DYNAMIC_TEXT_SETUP.md) for detailed instructions on setting up dynamic text replacement in your Google Ads campaigns.

## Deployment

The site automatically deploys to GitHub Pages when you push to the `main` branch.

### Setup GitHub Pages

1. Go to your repository settings
2. Navigate to Pages section
3. Set source to "GitHub Actions"
4. Add the following secrets in repository settings:
   - `VITE_RESEND_API_KEY`
   - `VITE_GA4_MEASUREMENT_ID`
   - `VITE_GTM_CONTAINER_ID` (optional)

### Manual Deployment

```bash
npm run build
# Deploy the dist/ folder to your hosting provider
```

## Analytics Events

The following events are tracked in Google Analytics:

- **form_submission** - Contact form submitted (primary conversion)
- **building_card_click** - Building card "Schedule a Tour" button clicked
- **cta_call_click** - Bottom CTA "Call Us" button clicked

## Project Structure

```
src/
├── components/       # React components
├── data/            # Building data (TypeScript)
├── styles/          # SASS stylesheets
├── utils/           # Utility functions (analytics, form, DTR)
├── App.tsx          # Main app component
└── main.tsx         # Entry point
```

## Brand Guidelines

This project follows the Rockport Brand Guidelines:

- **Colors**: Primary Red (#E5383B), Dark Red (#660708), Black (#0B090A), White (#FFFFFF), Gray (#D3D3D3)
- **Typography**: Bebas Neue (headlines), Oswald (body text)
- **Design**: Sharp 90° corners, structural lines, architectural precision

## Support

For questions or issues, contact the development team.
