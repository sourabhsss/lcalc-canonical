
/**
 * This utility generates a sitemap.xml file for the website
 * It collects all routes from the application and adds them to the sitemap
 */

import fs from 'fs';
import path from 'path';

interface SitemapRoute {
  path: string;
}

// Base URL of the website
const BASE_URL = 'https://lcalculator.com';

// List of known routes in the application
const routes: SitemapRoute[] = [
  { path: '/' },
  { path: '/calculators' },
  { path: '/about' },
  { path: '/about-us' },
  { path: '/contact' },
  { path: '/privacy-policy' },
  { path: '/terms-of-service' },
  { path: '/five-number-summary-calculator' },
  { path: '/ten-key-calculator' },
  { path: '/rref-calculator' },
  { path: '/half-birthday-calculator' },
  { path: '/twin-flame-calculator' },
  { path: '/lap-day-calculator' },
  { path: '/stock-average-calculator' },
  { path: '/flames-calculator' },
  { path: '/work-experience-calculator' },
  { path: '/percentage-to-cgpa-calculator' },
  { path: '/board-foot-calculator' },
  { path: '/asphalt-calculator' },
  { path: '/gravel-calculator' },
  { path: '/snow-day-calculator' },
  { path: '/prorated-rent-calculator' },
  { path: '/court-deadline-calculator' },
  { path: '/male-delusion-calculator' },
  { path: '/female-delusion-calculator' },
  { path: '/chronological-age-calculator' },
  { path: '/apy-calculator' },
  { path: '/gst-calculator' },
  { path: '/mortgage-calculator' },
  { path: '/reverse-mortgage-calculator' },
  { path: '/mortgage-recast-calculator' },
  { path: '/pay-raise-calculator' },
  { path: '/towing-estimate-calculator' },
  { path: '/air-fryer-calculator' },
  { path: '/pool-volume-calculator' },
  { path: '/peptide-calculator' },
  { path: '/love-calculator' },
  { path: '/angel-number-calculator' },
  { path: '/interpolation-calculator' },
  { path: '/sleep-calculator' },
  { path: '/standard-drink-calculator' },
  { path: '/dunk-calculator' },
  { path: '/tdee-calculator' },
  { path: '/standard-deviation-calculator' },
  { path: '/combinations-calculator' },
  { path: '/permutations-calculator' },
  { path: '/percentage-increase-calculator' },
  { path: '/ap-lang-calculator' },
  { path: '/final-grade-calculator' },
  { path: '/college-gpa-calculator' },
  { path: '/gross-monthly-income-calculator' },
  { path: '/cube-root-calculator' },
  { path: '/percent-error-calculator' },
  { path: '/cash-back-calculator' },
  { path: '/pets-lap-day-calculator' },
  { path: '/lcm-hcf-calculator' },
  { path: '/tattoo-tip-calculator' },
  { path: '/therapy-productivity-calculator' },
  { path: '/gpm-calculator' },
  { path: '/audiobook-speed-calculator' },
  { path: '/swim-pace-calculator' },
];

/**
 * Generate XML sitemap content
 */
const generateSitemapXml = (routes: SitemapRoute[]): string => {
  // Ensure XML declaration is at the very start with no leading whitespace
  let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
  xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';
  
  routes.forEach(route => {
    xml += '  <url>\n';
    xml += `    <loc>${BASE_URL}${route.path}</loc>\n`;
    xml += '  </url>\n';
  });
  
  xml += '</urlset>';
  return xml;
};

/**
 * Write sitemap to public directory
 */
export const generateSitemap = () => {
  const sitemap = generateSitemapXml(routes);
  const publicDir = path.resolve(__dirname, '../../public');
  
  try {
    // Set encoding to 'utf8' without BOM and ensure no whitespace precedes the XML declaration
    fs.writeFileSync(path.join(publicDir, 'sitemap.xml'), sitemap, {encoding: 'utf8'});
    console.log('Sitemap generated successfully');
  } catch (error) {
    console.error('Error generating sitemap:', error);
  }
};

/**
 * Add a new route to the sitemap
 */
export const addRouteToSitemap = (newRoute: SitemapRoute) => {
  // Check if route already exists
  const existingRouteIndex = routes.findIndex(route => route.path === newRoute.path);
  
  if (existingRouteIndex !== -1) {
    // Update existing route
    routes[existingRouteIndex] = {
      ...routes[existingRouteIndex],
      ...newRoute
    };
  } else {
    // Add new route
    routes.push(newRoute);
  }
  
  const publicDir = path.resolve(__dirname, '../../public');
  const sitemapPath = path.join(publicDir, 'sitemap.xml');
  
  try {
    // Generate a fresh sitemap with updated routes
    const updatedSitemap = generateSitemapXml(routes);
    // Set encoding to 'utf8' without BOM and ensure no whitespace precedes the XML declaration
    fs.writeFileSync(sitemapPath, updatedSitemap, {encoding: 'utf8'});
    console.log(`Updated sitemap with route ${newRoute.path}`);
  } catch (error) {
    console.error('Error updating sitemap:', error);
  }
};
