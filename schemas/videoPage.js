import { AiOutlineYoutube } from "react-icons/ai";

export default {
  name: "videoPage",
  title: "Videos",
  type: "document",
  icon: AiOutlineYoutube,
  __experimental_actions: ["update", "publish"],
  initialValue: {
    name: "Video Links",
  },
  fields: [
    {
      name: "name",
      type: "string",
      hidden: "true",
      readOnly: "true",
    },
    {
      name: "videoLinks",
      title: "Video Links",
      type: "array",
      of: [{ type: "videoLink" }],
    },
  ],
}
