// import { useSanityClient } from "astro-sanity";

// export async function getAllProjects() {
//   //   const client = useSanityClient();
//   console.log("enter");

//   const query = `*[_type == 'projects']`;
//   const projectResponse = await useSanityClient().fetch(query);
//   console.log("client: ", projectResponse);
//   return projectResponse;
// }

import { useSanityClient } from "astro-sanity";

export async function getAllProjects() {
  const query = `*[_type == "post" && _id == "0b3a877f-9ede-4360-a7b0-dee96107215e"][0]`;
  const firstPost = await useSanityClient().fetch(query);
  return firstPost;
}
