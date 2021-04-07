export default {
  name: "bookPage",
  title: "Books",
  type: "document",
  __experimental_actions: ["update", "publish"],
  initialValue: {
    name: "Books",
  },
  fields: [
    {
      name: "name",
      type: "string",
      hidden: "true",
      readOnly: "true",
    },
    {
      name: "books",
      title: "Books",
      type: "array",
      of: [{ type: "book" }],
    },
  ],
}
