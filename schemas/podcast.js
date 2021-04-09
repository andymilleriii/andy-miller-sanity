export default {
  name: "podcast",
  title: "Podcast",
  type: "document",
  __experimental_actions: ["update", "publish"],
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "description",
      title: "Description",
      type: "text",
    },
    {
      name: "links",
      title: "Subscription Links",
      type: "array",
      of: [{ type: "link" }],
    },
  ],
}
