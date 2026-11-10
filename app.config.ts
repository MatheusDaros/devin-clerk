export type Feature = {
  title: string;
  description: string;
};

export const appConfig = {
  name: "Evento Livre",
  description: "Plataforma pra encontrar eventos de meu interesse no mundo todo",
  emoji: "🌍",
  accent: "#0d9488",
  upcomingFeatures: [
    {
      title: "Escolha seus interesses",
      description:
        "Escolha temas como tecnologia, música ou esportes e salve no seu perfil.",
    },
    {
      title: "Busque eventos",
      description: "Encontre eventos por palavra-chave, cidade e período.",
    },
    {
      title: "Mapa mundial",
      description:
        "Veja os eventos que combinam com você como pinos num mapa do mundo.",
    },
    {
      title: "Feed personalizado",
      description:
        "Uma lista dos próximos eventos que combinam com seus interesses.",
    },
    {
      title: "Salve eventos",
      description: "Marque eventos e veja todos numa só página.",
    },
  ] satisfies Feature[],
};
