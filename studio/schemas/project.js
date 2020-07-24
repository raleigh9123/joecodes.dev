import { AiTwotoneProject } from "react-icons/ai";

export default {
  title: "Projects",
  name: "project",
  type: "document",
  icon: AiTwotoneProject,
  fields: [
    {
      title: "Project Name",
      name: "name",
      type: "string",
    },
    {
      title: "Subline",
      name: "subline",
      type: "string",
    },
    {
      title: "Development Type",
      name: "type",
      type: "array",
      of: [{ type: "string" }],
      options: {
        list: [
          { title: "Front-End", value: "Front-End" },
          { title: "Back-End", value: "Back-End" },
          { title: "Full-Stack", value: "Full-Stack" },
        ],
      },
    },
    {
      title: "Description",
      name: "description",
      type: "text",
    },
    {
      title: "Technical Process",
      name: "technical",
      type: "text",
    },
    {
      title: "Technologies",
      name: "technologies",
      type: "array",
      of: [{ type: "string" }],
    },
    {
      title: "Other Technologies",
      name: "dependencies",
      type: "array",
      of: [{ type: "string" }],
    },
    {
      title: "GitHub URL",
      name: "githubURL",
      type: "url",
    },
    {
      title: "Demo URL",
      name: "demoURL",
      type: "url",
    },
    {
      title: "Cover Image",
      name: "coverImage",
      type: "image",
    },
    {
      title: "Other Images",
      name: "otherImages",
      type: "array",
      of: [{ type: "image" }],
    },
  ],
};
