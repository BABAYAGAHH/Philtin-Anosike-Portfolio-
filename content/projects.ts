export type Project = {
  slug: string;
  title: string;
  summary: string;
  problem: string;
  action: string;
  outcome: string;
  status: "Ongoing" | "Active" | "Developing";
  impact: string;
  image: string;
  featured: boolean;
};

export const projects: Project[] = [
  {
    slug: "22-logistics-structured-mobility-solutions",
    title: "22 Logistics - Structured Mobility Solutions",
    summary:
      "Creating efficient transportation systems for individuals and businesses in Port Harcourt.",
    problem: "Urban mobility challenges and unreliable transport systems.",
    action:
      "Developed a structured fleet management system focused on efficiency, reliability, and customer experience.",
    outcome:
      "Improved access to transportation services while creating employment opportunities within the city.",
    status: "Active",
    impact: "Operational structure, stronger service reliability, and local job creation.",
    image: "/project-22-logistics.svg",
    featured: true
  },
  {
    slug: "community-transport-support-initiative",
    title: "Community Transport Support Initiative",
    summary:
      "Exploring practical ways to improve access, mobility, and opportunity within local communities.",
    problem:
      "Local communities often face mobility barriers that limit access to work, education, and essential services.",
    action:
      "Assessing practical transport support models rooted in local realities, community partnerships, and structured execution.",
    outcome:
      "Developing a clearer pathway for community-centered mobility interventions with long-term viability.",
    status: "Ongoing",
    impact: "Sharper understanding of where mobility systems can remove friction in everyday life.",
    image: "/project-community.svg",
    featured: true
  },
  {
    slug: "local-development-efforts",
    title: "Local Development Efforts",
    summary:
      "Structured initiatives focused on practical growth, systems improvement, and long-term impact.",
    problem:
      "Community progress is frequently slowed by fragmented action, weak coordination, and short-term thinking.",
    action:
      "Supporting disciplined initiatives that prioritize systems improvement, practical collaboration, and execution over noise.",
    outcome:
      "Building a stronger foundation for local impact by treating development as a structured process rather than a slogan.",
    status: "Developing",
    impact: "A proof-of-execution mindset centered on measurable outcomes and responsible stewardship.",
    image: "/project-development.svg",
    featured: true
  }
];
