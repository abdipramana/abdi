import { Icons } from "@/components/icons";
import { Project } from "@/types/project";

const SOCIAL = [
  {
    label: "Email",
    icon: Icons.Mail,
    href: "mailto:igdabdipramana@gmail.com",
    color: "#D93025",
  },
  {
    label: "Linkedin",
    icon: Icons.LinkedIn,
    href: "https://www.linkedin.com/in/abdipramana/",
    color: "#0077B5",
  },
  {
    label: "Github",
    icon: Icons.Github,
    href: "https://github.com/abdipramana",
    color: "#333",
  },
];

const PROJECTS: Project[] = [
  {
    title: "Spiritual Playmates",
    description: `Spiritual Playmates is a platform connecting individuals, fostering community and relationships.`,
    image: "/projects/sp.jpg",
    link: "https://app.spiritualplaymates.com/",
    company: "Semantu",
  },
  {
    title: "Peace Game",
    description: `The Peace Game is built around 7 actions that empower people to live in harmony with self, each other, and the Earth.`,
    image: "/projects/LoveBanner.webp",
    link: "https://peacegame.earth",
    company: "Semantu",
  },
  {
    title: "TIX.CO",
    description: `TIX is a ticketing platform that provides a variety of tickets for various events in Australia and New Zealand.`,
    image: "/projects/tix.jpg",
    link: "https://tix.co/",
    company: "Tickets Pty. Ltd.",
  },
  {
    title: "Kopernik",
    description: `Kopernik is a non-profit organization headquartered in Indonesia that finds what works to reduce poverty in the last mile.`,
    image: "/projects/kopernik.jpeg",
    link: "https://kopernik.info/",
    company: "Fleava",
  },
  {
    title: "Beachwalk Bali",
    description: `Beachwalk Shopping Center is one of the biggest shopping centers in Bali located in the heart of Kuta.`,
    image: "/projects/beachwalk.jpg",
    link: "https://beachwalkbali.com/",
    company: "Kesato",
  },
];

export { SOCIAL, PROJECTS };
