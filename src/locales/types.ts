export type Locale = "en" | "th" | "lo";

export interface TranslationSchema {
  nav: {
    projects: string;
    skills: string;
    experience: string;
    about: string;
    contact: string;
    contactCta: string;
  };
  hero: {
    badge: string;
    subtitle: string;
    description: string;
    viewProjects: string;
    contactMe: string;
    stats: {
      projects: string;
      experience: string;
      techStack: string;
      rating: string;
    };
  };
  experience: {
    badge: string;
    headingPrefix: string;
    headingHighlight: string;
    subtitle: string;
    downloadCv: string;
    viewCv: string;
    keyAchievements: string;
    technologiesUsed: string;
    present: string;
  };
  about: {
    badge: string;
    headingPrefix: string;
    headingHighlight: string;
    bioCardTitle: string;
    bioP1: string;
    bioP2: string;
    roles: Array<{
      emoji: string;
      name: string;
      desc: string;
    }>;
    highlights: Array<{
      icon: string;
      title: string;
      desc: string;
    }>;
  };
  projects: {
    badge: string;
    headingPrefix: string;
    headingHighlight: string;
    subtitle: string;
    categories: {
      all: string;
      web: string;
      mobile: string;
      design: string;
    };
    liveDemo: string;
    sourceCode: string;
  };
  skills: {
    badge: string;
    headingPrefix: string;
    headingHighlight: string;
    subtitle: string;
  };
  contact: {
    badge: string;
    headingPrefix: string;
    headingHighlight: string;
    subtitle: string;
    channelsTitle: string;
    channelsSubtitle: string;
    formTitle: string;
    formSubtitle: string;
    nameLabel: string;
    namePlaceholder: string;
    emailLabel: string;
    emailPlaceholder: string;
    messageLabel: string;
    messagePlaceholder: string;
    submitIdle: string;
    submitLoading: string;
    submitSuccess: string;
    submitError: string;
    quickResponse: string;
  };
  footer: {
    tagline: string;
    allRightsReserved: string;
  };
}
