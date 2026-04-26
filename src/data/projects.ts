export type ProjectType = "In-House" | "Featured";

export interface Project {
  projectName: string;
  projectDescription: string;
  projectAuthor?: string;
  projectType: ProjectType;
  projectMarkdownLink: string;
  techStack: string[];
  projectWebsite: string;
  projectGithub: string;
  projectGithubSecondary?: string;
  projectGithubSecondaryLabel?: string;
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
    projectName: "Poise Voice Isolator / Music Blocker",
    projectDescription:
      "Poise is a real-time audio filter that runs in the background while you browse, stream, or work, automatically removing music and background noise from YouTube, social media, podcasts, live streams, and more.",
    projectAuthor: "Chabandou",
    projectType: "Featured",
    projectMarkdownLink:
      "https://raw.githubusercontent.com/chabandou/poise-voice-isolator/refs/heads/master/README.md",
    techStack: [
      "AI/ML",
      "Python",
      "PyQt6",
      "VB Cable",
      "WASAPI",
      "ONNX",
      "Kotlin",
      "C++",
    ],
    projectWebsite: "https://chabandou.github.io/poise-voice-isolator/",
    projectGithub: "https://github.com/chabandou/poise-voice-isolator",
    projectGithubSecondary: "https://github.com/chabandou/poise-android/",
    projectGithubSecondaryLabel: "View Android Repo",
  },
  {
    projectName: "daee-epistemics.SKILL",
    projectDescription:
      "Epistemic milieu navigator .SKILL for Claude and other LLM assistants. See the README for the thesis and more. Built mostly through vibe coding with Claude, ChatGPT, and Copilot.",
    projectAuthor: "theIslampill / mdthr",
    projectType: "Featured",
    projectMarkdownLink:
      "https://raw.githubusercontent.com/theislampill/daee-epistemics/refs/heads/main/README.md",
    techStack: ["Markdown", "Prompt Engineering", "Claude", "ChatGPT", "Copilot"],
    projectWebsite: "",
    projectGithub: "https://github.com/theislampill/daee-epistemics",
  },
  {
    projectName: "Fi 'l-afaq (aka. filafaq)",
    projectDescription:
      "Islamic database website focused on searchable Islamic knowledge and references.",
    projectAuthor: "Zill Lais",
    projectType: "In-House",
    projectMarkdownLink: "",
    techStack: ["Go", "HTMX", "AlpineJS", "Templ", "PostgreSQL"],
    projectWebsite: "https://filafaq.net",
    projectGithub: "",
  },
];
