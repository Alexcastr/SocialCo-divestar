import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';
// open de backend and write in the consola sanity manage, then copy the projectId tambien el token sale de alli toca crearlo y add .env



export const client = sanityClient({
    projectId: 'process.env.REACT_APP_SANITY_PROJECT_ID',
    dataset: 'production',
    apiVersion: '2021-11-16',
    useCdn: true,
    token: 'process.env.REACT_APP_SANITY_TOKEN',



});




// you can find in sanity documentation 
const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);