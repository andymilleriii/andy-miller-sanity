import {AiOutlineHome} from 'react-icons/ai'

export default {
  name: "homePage",
  title: "homePage",
  type: "document",
  icon: AiOutlineHome,
  __experimental_actions: ["update", "publish"],
  fields: [
    {
      name: "featuredPost",
      title: "Featured Article",
      type: "reference",
      to: [{ type: "post" }],
      validation: (Rule) => Rule.required(),
    },
    {
      name: "mainImage",
      title: "Main Image",
      type: "image",
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: "aboutHeader",
      title: "Main Heading",
      type: "string",
      validation: (Rule) => Rule.required().max(20),
    },
    {
      name: "aboutSubHeader",
      title: "Main Subheading",
      type: "string",
      validation: (Rule) => Rule.required().max(55),
    },
    {
      name: "aboutContent",
      title: "About Section Content",
      type: "text",
      validation: (Rule) => Rule.required().max(500),
    },
    {
      name: "aboutImage",
      title: "About Image",
      type: "image",
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    },
  ],
}
