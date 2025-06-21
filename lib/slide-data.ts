export interface SlideData {
  id: number;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  category: string;
  categoryDescription: string;
  buttonText: string;
  buttonHref: string;
}

export const slidesData: SlideData[] = [
  {
    id: 1,
    title: "LOREM IPSUM DOLOR SIT AMET",
    description:
      "Aliquam sed nulla tincidunt pulvinar nisl amet fames sit facilisis dictumst. Ornare faucibus quis velit fringilla aliquam ultrices. Maecenas ut aliquam at ac est nisl, interdum etiam dignissim. Sed ut vestibulum eget purus ornare. Risus elit at fringilla habitant ut facilisis.",
    image: "/images/slide-hero.png",
    imageAlt: "Group of people celebrating on mountain peak",
    category: "Artist & Investor",
    categoryDescription:
      "Eam ex dolor accusam invidunt takimata no sea, gubergren amet, libero adipiscing auctor. Maecenas tristique libero, et tellus tincidunt. Egestas ac arcu amet nisl quis est.",
    buttonText: "Read Full Story",
    buttonHref: "#story-1",
  },
  {
    id: 2,
    title: "INNOVATION MEETS CREATIVITY",
    description:
      "Discover how cutting-edge technology transforms creative processes. From digital art to immersive experiences, explore the intersection of innovation and artistic expression in today's dynamic landscape.",
    image: "/placeholder.svg?height=400&width=600",
    imageAlt: "Creative workspace with digital tools",
    category: "Technology & Design",
    categoryDescription:
      "Revolutionizing creative workflows through advanced digital solutions and collaborative platforms that empower artists worldwide.",
    buttonText: "Explore Innovation",
    buttonHref: "#innovation",
  },
  {
    id: 3,
    title: "SUSTAINABLE FUTURE VISION",
    description:
      "Building tomorrow's world through sustainable practices and environmental consciousness. Join the movement towards a greener, more responsible approach to business and lifestyle.",
    image: "/placeholder.svg?height=400&width=600",
    imageAlt: "Sustainable technology and green environment",
    category: "Sustainability & Growth",
    categoryDescription:
      "Leading the charge in sustainable development with innovative solutions that benefit both business and environment.",
    buttonText: "Learn More",
    buttonHref: "#sustainability",
  },
  {
    id: 4,
    title: "GLOBAL COMMUNITY IMPACT",
    description:
      "Connecting communities worldwide through shared values and collaborative initiatives. Experience the power of unity in creating positive change across cultures and borders.",
    image: "/placeholder.svg?height=400&width=600",
    imageAlt: "Diverse global community collaboration",
    category: "Community & Culture",
    categoryDescription:
      "Fostering meaningful connections and cultural exchange through innovative community-building platforms and initiatives.",
    buttonText: "Join Community",
    buttonHref: "#community",
  },
];
