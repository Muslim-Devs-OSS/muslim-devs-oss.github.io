export type ProjectType = "In-House" | "Featured";

export interface Project {
  projectName: string;
  projectDescription: string;
  projectType: ProjectType;
  projectMarkdownLink: string;
  techStack: string[];
  projectWebsite: string;
  projectGithub: string;
  projectSlug?: string;
}

export function toProjectSlug(project: Project): string {
  const rawSlug = project.projectSlug?.trim() || project.projectName;

  return rawSlug
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}

export const projects: Project[] = [
  {
    projectName: "Poise Voice Isolator",
    projectDescription:
      "An open-source audio tool focused on isolating and enhancing voice recordings.",
    projectType: "Featured",
    projectMarkdownLink:
      "https://raw.githubusercontent.com/chabandou/poise-voice-isolator/refs/heads/master/README.md",
    techStack: ["TypeScript", "Node.js", "Audio Processing"],
    projectWebsite: "",
    projectGithub: "https://github.com/chabandou/poise-voice-isolator",
  },
];
