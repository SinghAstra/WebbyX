export interface SlideData {
  id: number;
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
    image: "/blog-1.png",
    imageAlt: "Group of people celebrating on mountain peak",
    category: "Artist & Investor",
    categoryDescription:
      "Eam ex dolor accusam invidunt takimata no sea, gubergren amet, libero adipiscing auctor. Maecenas tristique libero, et tellus tincidunt. Egestas ac arcu amet nisl quis est.",
    buttonText: "Read Full Story",
    buttonHref: "/",
  },
  {
    id: 2,
    image: "/blog-2.png",
    imageAlt: "Creative workspace with digital tools",
    category: "Technology & Design",
    categoryDescription:
      "Revolutionizing creative workflows through advanced digital solutions and collaborative platforms that empower artists worldwide.",
    buttonText: "Explore Innovation",
    buttonHref: "/",
  },
  {
    id: 3,
    image: "/blog-3.png",
    imageAlt: "Sustainable technology and green environment",
    category: "Sustainability & Growth",
    categoryDescription:
      "Leading the charge in sustainable development with innovative solutions that benefit both business and environment.",
    buttonText: "Learn More",
    buttonHref: "/",
  },
  {
    id: 4,
    image: "/blog-4.png",
    imageAlt: "Diverse global community collaboration",
    category: "Community & Culture",
    categoryDescription:
      "Fostering meaningful connections and cultural exchange through innovative community-building platforms and initiatives.",
    buttonText: "Join Community",
    buttonHref: "/",
  },
];
