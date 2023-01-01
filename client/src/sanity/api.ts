// APIs for sanity

import imageUrlBuilder from "@sanity/image-url";
import sanityClient from "@sanity/client";

const client = sanityClient({
  projectId: "gu3yw96b",
  dataset: "production",
  apiVersion: "2021-10-21",
  useCdn: true,
});

const builder = imageUrlBuilder(client);

export async function getAllProjects() {
  const query = `*[_type == 'projects']`;
  const projectResponse = await client.fetch(query);
  console.log("all reponse: ", projectResponse);
  return projectResponse;
}

export function urlFor(source: string) {
  return builder.image(source);
}

export async function getFilterProjects(filter: string) {
  const query = `*[_type == 'projects' && techUsed match "${filter}"]`;
  console.log("filter query: ", query);

  const projectResponse = await client.fetch(query);
  console.log("filter response: ", projectResponse);
  return projectResponse;
}
