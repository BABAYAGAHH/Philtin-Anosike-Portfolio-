export type MediaEntry = {
  slug: string;
  title: string;
  description: string;
  duration: string;
  label: string;
  image: string;
  featured?: boolean;
};

export const featuredMedia: MediaEntry = {
  slug: "calm-thinking-under-pressure",
  title: "Calm Thinking Under Pressure",
  description:
    "A short reflection on why calm thinking is one of the most underrated tools in leadership and decision-making.",
  duration: "4:12",
  label: "Featured Reflection",
  image: "/media-featured.svg",
  featured: true
};

export const shortVideos: MediaEntry[] = [
  {
    slug: "structure-before-speed",
    title: "Why Structure Must Come Before Speed",
    description:
      "On building systems that can carry growth without losing discipline.",
    duration: "1:38",
    label: "Short Video",
    image: "/media-short-01.svg"
  },
  {
    slug: "credibility-and-consistency",
    title: "Credibility Grows Through Consistency",
    description:
      "A concise reflection on how repeated discipline strengthens trust.",
    duration: "2:06",
    label: "Short Video",
    image: "/media-short-02.svg"
  },
  {
    slug: "thinking-beyond-noise",
    title: "Thinking Beyond Noise",
    description:
      "On the importance of clarity in public conversations about development.",
    duration: "1:54",
    label: "Short Video",
    image: "/media-short-03.svg"
  }
];

export const speakingClips = [
  {
    title: "Speaking Clips",
    description:
      "Future talks, interviews, and recorded conversations will be curated here as the media archive expands."
  }
];
