// import { SanityClient } from "@sanity/client";
// import {sanityClient} from "@sanity/client";


// export default sanityClient({
//     projectId: "otc5v8br",
//     dataset : "production"
// })


import sanityClient from "@sanity/client";

export default sanityClient({
  projectId: process.env.REACT_APP_SANITY_ID, // find this at manage.sanity.io or in your sanity.json
  dataset: "production", // this is from those question during 'sanity init'
});