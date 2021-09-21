import * as process from "process";
export function getStrapiMedia(url,$config=null) {
  // Check if URL is a local path
// console.log(url);
// console.log('process on server:');
// console.log(process.env);
// console.log('config on Client:');
// console.log($config);


  if (url.startsWith("/")) {
    // Prepend Strapi address
    if ($config!=null){
      return $config.API_URL+url;
    }else{
      return process.env.API_URL+url;
    }
  }
  // Otherwise return full URL
  return url;
}
