import { urlFor } from "../../sanity/api";
type Props = {};

export const RichTextComponents = {
  image: ({ value }) => {
    return <img src={urlFor(value).url()} alt="image" />;
  },
};
