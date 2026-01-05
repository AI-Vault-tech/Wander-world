# AdSense Implementation Guide for Wander World

This document outlines how to properly implement Google AdSense in the Wander World website.

## Files Modified

### 1. index.html
- Added AdSense verification meta tags
- Added AdSense script in the head section
- Added ads.txt file to the public directory

### 2. AdSense Component
- Created `src/components/AdSense.tsx` - A reusable AdSense component
- Provides an easy way to add ads throughout the site

### 3. Home Component
- Added AdSense component import
- Added an example ad placement in the hero section

### 4. App Component
- Added import for the AdSense component

## How to Use the AdSense Component

The AdSense component can be used throughout the application by importing it and using it like this:

```jsx
import AdSenseComponent from './components/AdSense';

// In your component:
<AdSenseComponent 
  client="pub-3458859130181523" 
  slot="1234567890" 
  style={{ display: 'block' }}
  format="auto"
/>
```

## Important Files

- `public/ads.txt` - Contains the AdSense publisher ID
- `src/components/AdSense.tsx` - Reusable AdSense component
- `src/components/PrivacyPolicy.tsx` - Already includes AdSense privacy information

## AdSense Configuration

Publisher ID: `pub-3458859130181523`
Site: `wander-world-six.vercel.app`

## Important Notes

1. The ads.txt file has been created in the public directory with the correct publisher information
2. The Privacy Policy page already includes information about Google AdSense usage
3. The AdSense script is loaded globally in index.html
4. The AdSense component can be used on any page where you want to display ads
5. Remember to create actual ad slots in your Google AdSense account and use the correct slot IDs

## Next Steps

1. Create ad slots in your Google AdSense account
2. Replace the example slot ID "1234567890" with actual slot IDs from your AdSense account
3. Add the AdSense component to other pages where you want to display ads
4. Submit your site for AdSense review