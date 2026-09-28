export type Feature = {
  title: string;
  description: string;
};

export const appConfig = {
  name: "Vibe Showcase",
  description:
    "A live showcase of projects vibe coded during the events from the Vibe Space community.",
  emoji: "✨",
  accent: "#db2777",
  upcomingFeatures: [
    {
      title: "Submit your project",
      description:
        "Builders post a title, live link, one-line pitch and screenshot.",
    },
    {
      title: "Browse by event",
      description:
        "Filter projects by the Vibe Space event where they were built.",
    },
    {
      title: "Live event wall",
      description:
        "An auto-refreshing grid of projects submitted during the current event.",
    },
    {
      title: "Social share",
      description:
        "Share any project to X or LinkedIn with a ready-made preview card.",
    },
    {
      title: "Builder profiles",
      description:
        "A page for each builder listing everything they've shipped.",
    },
  ] satisfies Feature[],
};

export const clerkAppearance = {
  variables: { colorPrimary: appConfig.accent },
};
