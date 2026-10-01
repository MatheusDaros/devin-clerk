export type Feature = {
  title: string;
  description: string;
};

export const appConfig = {
  name: "Colive",
  description:
    "Aplicativo para controlar despesas em um apartamento compartilhado",
  emoji: "🏠",
  accent: "#0d9488",
  upcomingFeatures: [
    {
      title: "Log a shared expense",
      description:
        "Record an amount, who paid it and which housemates it's split between.",
    },
    {
      title: "Invite your housemates",
      description:
        "Add your roommates to the apartment by email so everyone shares one ledger.",
    },
    {
      title: "Balances at a glance",
      description: "See at a glance who owes whom right now.",
    },
    {
      title: "Settle up",
      description:
        "Mark a debt as paid and clear the balance between two housemates.",
    },
    {
      title: "Recurring bills",
      description:
        "Add rent, internet and utilities once and have them repeat every month.",
    },
    {
      title: "Monthly summary",
      description:
        "See each month's spending broken down by category and by housemate.",
    },
  ] satisfies Feature[],
};
