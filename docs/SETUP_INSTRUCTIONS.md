# Setup Instructions

Follow these steps to get the Rockport landing page up and running.

## Step 1: Install Dependencies

Run this command to install all required packages:

```bash
npm install
```

If you encounter dependency conflicts with ESLint packages, use:

```bash
npm install --legacy-peer-deps
```

## Step 2: Add Font Files

Copy your custom font files to the `public/fonts/` directory:

Required files:
- `BebasNeue-Regular.woff`
- `BebasNeue-Regular.woff2`
- `Oswald-Regular.woff`
- `Oswald-Regular.woff2`
- `Oswald-Bold.woff`
- `Oswald-Bold.woff2`

## Step 3: Add Building Images

Place your building photos in the `public/images/` directory:

- `building-1.jpg` through `building-6.jpg`
- `industrial-park.jpg` (for the Why Choose section)

## Step 4: Configure Environment Variables

1. Copy the example environment file:
   ```bash
   cp .env.example .env
   ```

2. Edit `.env` and add your API keys:
   ```
   VITE_RESEND_API_KEY=re_xxxxxxxxxxxxx
   VITE_GA4_MEASUREMENT_ID=G-XXXXXXXXXX
   VITE_GTM_CONTAINER_ID=GTM-XXXXXXX
   ```

### Getting Your API Keys

**Resend API Key:**
1. Sign up at [resend.com](https://resend.com)
2. Go to API Keys section
3. Create a new API key
4. Copy and paste into `.env`

**Google Analytics 4:**
1. Create a GA4 property at [analytics.google.com](https://analytics.google.com)
2. Get your Measurement ID (starts with G-)
3. Add to `.env`

**Google Tag Manager (Optional):**
1. Create a container at [tagmanager.google.com](https://tagmanager.google.com)
2. Get your Container ID (starts with GTM-)
3. Add to `.env`

## Step 5: Update Contact Information

Edit `src/utils/formSubmit.ts` and change the recipient email:

```typescript
to: ['your-email@example.com'],  // Change this to your email
```

Edit `src/components/Footer.tsx` and update:
- Phone number
- Email address
- Physical address
- Social media links

## Step 6: Update Building Data

Edit `src/data/buildings.ts` to add your actual building information:
- Names
- Prices
- Sizes
- Features
- Status (AVAILABLE or COMING SOON)

## Step 7: Run Development Server

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

## Step 8: Test Dynamic Text Replacement

Try these URLs to test DTR:

```
http://localhost:5173/?headline=Warehouse+Space
http://localhost:5173/?headline=Office+Space
http://localhost:5173/?headline=Industrial+Space
```

The headline should change based on the URL parameter.

## Step 9: Test Form Submission

1. Fill out the contact form
2. Submit
3. Check your email for the submission
4. Verify GA4 event in Google Analytics DebugView

## Step 10: Deploy to GitHub Pages

1. Push your code to GitHub
2. Go to repository Settings > Pages
3. Set source to "GitHub Actions"
4. Add secrets in Settings > Secrets and variables > Actions:
   - `VITE_RESEND_API_KEY`
   - `VITE_GA4_MEASUREMENT_ID`
   - `VITE_GTM_CONTAINER_ID`
5. Push to `main` branch to trigger deployment

## Troubleshooting

**Fonts not loading?**
- Verify font files are in `public/fonts/`
- Check browser console for 404 errors
- Ensure file names match exactly in `fonts.scss`

**Form not submitting?**
- Check Resend API key is correct
- Verify recipient email in `formSubmit.ts`
- Check browser console for errors

**Analytics not tracking?**
- Verify GA4 Measurement ID is correct
- Use GA4 DebugView to see real-time events
- Check browser console for gtag errors

**Images not showing?**
- Place images in `public/images/`
- Update image paths in `buildings.ts` if needed
- Check browser console for 404 errors

## Next Steps

- Customize building data with real information
- Add actual building photos
- Test all conversion tracking events
- Set up Google Ads campaigns with DTR parameters
- Monitor analytics and optimize
