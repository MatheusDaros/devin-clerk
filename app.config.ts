export type Feature = {
  title: string;
  description: string;
};

export const appConfig = {
  name: "Your App",
  description: "Describe your app in one sentence. Devin will fill this in.",
  emoji: "🚀",
  accent: "#7c3aed",
  upcomingFeatures: [
    {
      title: "Your first feature",
      description: "What people will be able to do once it's built.",
    },
    {
      title: "Your second feature",
      description: "Devin will write this list based on your app idea.",
    },
    {
      title: "Your third feature",
      description: "Each one is a good next prompt for Devin.",
    },
  ] satisfies Feature[],
};
