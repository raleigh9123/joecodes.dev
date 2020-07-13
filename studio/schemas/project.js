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
      title: "Project Brief",
      name: "brief",
      type: "string",
    },
    {
      title: "Project Type",
      name: "type",
      type: "array",
      of: [{ type: "string" }],
      options: {
        list: [
          { title: "Front-End", value: "Front-End" },
          { title: "Back-End", value: "Back-End" },
        ],
      },
    },
    {
      title: "Description",
      name: "description",
      type: "text",
    },
    {
      title: "Technologies",
      name: "technologies",
      type: "array",
      of: [{ type: "string" }],
    },
    {
      title: "GitHub URL",
      name: "githubURL",
      type: "url",
    },
    {
      title: "Live URL",
      name: "liveURL",
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
