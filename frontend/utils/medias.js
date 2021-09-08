export function getStrapiMedia(url) {
  // Check if URL is a local path
  console.log('url:');
  console.log(url);
  console.log(process.env.API_URL);
  if (url.startsWith("/")) {
    // Prepend Strapi address
    return `${process.env.API_URL}${url}`;
  }
  // Otherwise return full URL
  return url;
}
