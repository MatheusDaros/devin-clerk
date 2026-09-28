export type Feature = {
  title: string;
  description: string;
};

export const appConfig = {
  name: "Plant Pal",
  description:
    "Reminds you when to water each of your plants, based on the species and the weather.",
  emoji: "🪴",
  accent: "#15803d",
  upcomingFeatures: [
    {
      title: "Add your plants",
      description:
        "Save each plant with its species, a photo and where it lives.",
    },
    {
      title: "Watering schedule",
      description: "See which plants need water today and mark them as done.",
    },
    {
      title: "Weather-aware reminders",
      description: "Water less after rainy days and more during heat waves.",
    },
    {
      title: "Email reminders",
      description: "Get a morning email listing the plants that need you.",
    },
    {
      title: "Plant care tips",
      description: "Light, soil and humidity advice for every species you add.",
    },
  ] satisfies Feature[],
};
