export interface JourneyStep {
  year: string;
  title: string;
  description: string;
}

export const journey: JourneyStep[] = [
  {
    year: "Chapter 01",
    title: "Started with Flutter Development",
    description:
      "Began my development journey by learning Flutter and building cross-platform mobile applications. This introduced me to UI design, state management and application architecture.",
  },
  {
    year: "Chapter 02",
    title: "Built Productivity Applications",
    description:
      "Developed personal productivity applications including habit tracking, expense management, mood journaling and Pomodoro productivity systems using Flutter and Hive database.",
  },
  {
    year: "Chapter 03",
    title: "Explored Backend Development",
    description:
      "Expanded into backend engineering by learning Node.js, Express.js and MongoDB, building REST APIs and understanding full application workflows.",
  },
  {
    year: "Chapter 04",
    title: "Became a Full Stack Developer",
    description:
      "Started developing complete applications by combining frontend interfaces, backend services, databases and deployment platforms into unified solutions.",
  },
  // {
  //   year: "Chapter 05",
  //   title: "Built My Personal Brand",
  //   description:
  //     "Designed and developed my own animated developer portfolio to showcase projects, technical skills and my approach to building digital products.",
  // },
  // {
  //   year: "Chapter 06",
  //   title: "Started Freelancing",
  //   description:
  //     "Began working toward freelance opportunities, helping businesses transform ideas into practical web and mobile solutions.",
  // },
];