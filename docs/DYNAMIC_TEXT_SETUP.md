# Dynamic Text Replacement Setup Guide

This guide explains how to set up Dynamic Text Replacement (DTR) in your Google Ads campaigns to personalize the landing page headline for each ad.

## What is Dynamic Text Replacement?

Dynamic Text Replacement allows you to customize the headline on the landing page based on URL parameters passed from your ads. This creates a more relevant, personalized experience for each visitor.

## How It Works

1. User clicks on your ad
2. Ad URL includes a `headline` parameter (e.g., `?headline=Warehouse+Space`)
3. Landing page reads the parameter and displays it in the H1
4. If no parameter is provided, default headline is shown: "COMMERCIAL SPACE"

## Setting Up in Google Ads

### Step 1: Create Your Ad Variations

For each ad variation, decide what headline you want to display. Examples:

- Warehouse Space
- Office Space
- Industrial Space
- Manufacturing Space
- Distribution Center

### Step 2: Add URL Parameters

In Google Ads, add the `headline` parameter to your Final URL:

**Base URL:**
```
https://yourusername.github.io/rp-landing-page/
```

**With DTR Parameter:**
```
https://yourusername.github.io/rp-landing-page/?headline=Warehouse+Space
```

### Step 3: URL Parameter Format

- Use `+` or `%20` for spaces
- Keep it short and impactful
- Text will automatically be converted to UPPERCASE
- Special characters are supported

### Example URLs

| Ad Type | Final URL |
|---------|-----------|
| Warehouse Ad | `?headline=Warehouse+Space` |
| Office Ad | `?headline=Office+Space` |
| Industrial Ad | `?headline=Industrial+Space` |
| Manufacturing Ad | `?headline=Manufacturing+Space` |
| Generic Ad | No parameter (uses default) |

## Advanced: Multiple Parameters

You can also customize the subheadline using the `subheadline` parameter:

```
?headline=Warehouse+Space&subheadline=Premium+facilities+with+loading+docks
```

## Testing Your URLs

### Local Testing

When running locally (`npm run dev`), test different headlines:

```
http://localhost:5173/?headline=Warehouse+Space
http://localhost:5173/?headline=Office+Space
http://localhost:5173/?headline=Manufacturing+Facility
```

### Production Testing

After deployment, test on your live site:

```
https://yourusername.github.io/rp-landing-page/?headline=Test+Headline
```

## Google Ads Setup Checklist

- [ ] Create ad variations with different headlines
- [ ] Add `headline` parameter to Final URL for each ad
- [ ] Test each URL to verify headline displays correctly
- [ ] Set up conversion tracking in Google Ads
- [ ] Link Google Analytics to Google Ads
- [ ] Monitor performance by headline variation

## Best Practices

1. **Keep headlines concise** - 2-4 words work best
2. **Match ad copy** - DTR headline should align with ad text
3. **Test variations** - A/B test different headlines to find what converts best
4. **Use UTM parameters** - Combine with UTM tracking for better analytics:
   ```
   ?headline=Warehouse+Space&utm_source=google&utm_medium=cpc&utm_campaign=warehouse
   ```

## Troubleshooting

**Headline not changing?**
- Check URL parameter spelling: must be `headline` (lowercase)
- Verify spaces are encoded as `+` or `%20`
- Clear browser cache and test again

**Default headline showing?**
- Verify the parameter is in the URL after clicking the ad
- Check Google Ads tracking template settings
- Test URL directly in browser

**Special characters not working?**
- URL encode special characters
- Stick to alphanumeric characters and spaces for best results

## Analytics Integration

All headline variations are tracked in Google Analytics. You can:

- View which headlines drive the most conversions
- Compare bounce rates by headline
- Optimize ad spend based on headline performance

## Support

For technical issues or questions, contact the development team.
