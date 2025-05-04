import { InlineCode } from "@/once-ui/components";

const person = {
  firstName: "MarFit",
  // lastName: "",
  get name() {
    return `${this.firstName}`;
  },
  role: "Fitness Coach",
  avatar: "/images/avatar.jpg",
  location: "Africa/Casablanca", // Updated to Casablanca, Morocco timezone
  languages: ["English", "French"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter = {
  display: true,
  title: <>Subscribe to Marfit.way's Fitness Newsletter</>,
  description: (
    <>
      I regularly share workout tips, nutrition advice, and motivation to help you achieve your fitness goals.
    </>
  ),
};

const social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "Instagram",
    icon: "instagram",
    link: "https://instagram.com/marfit.way",
  },
  {
    name: "TikTok",
    icon: "tiktok",
    link: "https://www.tiktok.com/@marfit.way",
  },
  {
    name: "YouTube",
    icon: "youtube",
    link: "https://www.youtube.com/@MAROUANE.BIDOULI",
  },
  {
    name: "Email",
    icon: "email",
    link: "mailto:maroune@marfit.way",
  },
];

const home = {
  label: "Home",
  title: `Marfitway's Fitness Blog`,
  description: `Fitness blog and training resources by ${person.role} Marfitway`,
  headline: <>Fitness coach and transformation specialist</>,
  subline: (
    <>
      I'm Maroune from Marfitway, a dedicated fitness coach helping people transform their bodies and lives through 
      <br /> proper training, nutrition, and mindset coaching.
    </>
  ),
  success_stories: [
    {
      name: "Yassine",
      image: "/images/about.png",
      quote: "I've tried many times before, but this was the first time I actually saw it through. MarFit gave me structure, support, and results.",
      achievement: "Lost 12kg in 90 Days",
      goal: "Fat loss & lean muscle",
      method: "1:1 Coaching + Custom Meal Plan + App Tracking"
    },
    {
      name: "Imad",
      image: "/images/about.png",
      quote: "Clear guidance and accountability made the difference. I feel stronger than ever.",
      achievement: "Bulked up with 8kg of muscle in 4 months",
      goal: "Mass gain & strength",
      method: "Mid-Tier Coaching + Progressive Training Plan"
    },
    {
      name: "Ahmed",
      image: "/images/about.png",
      quote: "The personalized approach was exactly what I needed. No generic plans here - this works!",
      achievement: "Body recomposition in just 12 weeks",
      goal: "Reduce fat, maintain muscle",
      method: "Premium Coaching + Nutrition Plan"
    }
  ]
};

const about = {
  label: "About",
  title: "About me",
  description: `Meet ${person.name}, ${person.role} dedicated to helping you achieve your fitness goals`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://calendly.com/maroine-fitness/coaching", // Replace with your actual scheduling link
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        I'm Marouane Bidouli, founder of MarFit — coaching built on discipline, structure, and real results.
        I've helped 150+ men and women lose fat, build muscle, and take control of their fitness.
        My mission? To transform not just your body — but the way you think, move, and show up in life.
        No crash diets. No fluff. Just a system that works — built around you.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Coaching Experience",
    experiences: [
      {
        company: "Marfitway Coaching",
        timeframe: "2021 - Present",
        role: "Head Fitness Coach",
        achievements: [
          "Helped over 200 clients achieve their fitness goals through personalized training programs and nutrition plans.",
          "Developed a comprehensive 12-week transformation program with a 85% success rate in helping clients lose 10+ pounds.",
        ],
        images: [
          {
            src: "/images/projects/project-01/image-01.jpg",
            alt: "Training Session",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        company: "PowerGym",
        timeframe: "2018 - 2021",
        role: "Personal Trainer",
        achievements: [
          "Specialized in strength training and body recomposition for clients of all fitness levels.",
          "Created and led group fitness classes that increased gym member retention by 25%.",
        ],
        images: [
          {
            src: "/images/projects/project-01/image-02.jpg",
            alt: "Group Training",
            width: 16,
            height: 9,
          },
        ],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Certifications & Background",
    institutions: [
      {
        name: "Certified Fitness Coach",
        description: <>Professional certification in personal training and fitness coaching.</>,
      },
      {
        name: "Certified Nutrition Coach",
        description: <>Expertise in nutrition planning and dietary strategies for optimal results.</>,
      },
      {
        name: "Training Experience",
        description: <>Years of hands-on experience training clients both in gym and outdoor settings.</>,
      },
      {
        name: "Personal Journey",
        description: <>Firsthand experience with physique transformation and body composition changes.</>,
      },
    ],
  },
  technical: {
    display: true,
    title: "The MarFit Approach",
    sections: [
      {
        title: "Why I Do This",
        description: (
          <>
            I know how it feels to not recognize yourself in the mirror.
            I know the struggle of wanting change — but not knowing where to start.
            That's why I built MarFit: to give people the tools, structure, and mindset to take back control of their fitness and finally level up.
          </>
        ),
      },
      // {
      //   title: "What Makes MarFit Different",
      //   points: [
      //     "Custom plans tailored to your lifestyle",
      //     "Full-body approach: training, nutrition & mindset",
      //     "Built for men & women of all levels",
      //     "24/7 support + access to a real coach (me!)"
      //   ],
      // },
      // {
      //   title: "What You Get",
      //   services: [
      //     {
      //       icon: "🏋️",
      //       title: "Custom Workout Plan",
      //       description: "Tailored to your goals, fitness level, and training style (home or gym)"
      //     },
      //     {
      //       icon: "🍽️",
      //       title: "Personalized Nutrition Plan",
      //       description: "Flexible, enjoyable, and built around your body + lifestyle"
      //     },
      //     {
      //       icon: "📲",
      //       title: "Weekly Check-ins & Adjustments",
      //       description: "Accountability + tweaks to keep you progressing"
      //     },
      //     {
      //       icon: "🧠",
      //       title: "Mindset Support & Discipline Coaching",
      //       description: "Build mental strength and stay locked in"
      //     },
      //     {
      //       icon: "📦",
      //       title: "Bonus Access",
      //       description: "Training app, progress tracker, 24/7 messaging, and more"
      //     }
      //   ],
      //   cta: {
      //     text: "Apply For Coaching",
      //     link: "/apply"
      //   }
      // },
      // {
      //   title: "Client Results",
      //   testimonials: [
      //     {
      //       quote: "I dropped 10kg in 12 weeks — and kept it off.",
      //       beforeImage: "/images/results/before-01.jpg",
      //       afterImage: "/images/results/after-01.jpg"
      //     }
      //   ]
      // }
    ]
  },
};

const blog = {
  label: "Coaching",
  title: "Marfitway Blog",
  description: `Read what Maroune from Marfitway has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work = {
  label: "Transformations",
  title: "Marfitway Projects",
  description: `Fitness and training projects by Marfitway`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

// const gallery = {
//   label: "Gallery",
//   title: "Marfitway Gallery",
//   description: `A collection of fitness and training moments by Marfitway`,
//   images: [
//     {
//       src: "/images/gallery/img-01.jpg",
//       alt: "Fitness training session",
//       orientation: "horizontal",
//     },
//     {
//       src: "/images/gallery/img-02.jpg",
//       alt: "Personal training",
//       orientation: "horizontal",
//     },
//     {
//       src: "/images/gallery/img-03.jpg",
//       alt: "Group fitness class",
//       orientation: "horizontal",
//     },
//     {
//       src: "/images/gallery/img-04.jpg",
//       alt: "Strength training",
//       orientation: "horizontal",
//     },
//     {
//       src: "/images/gallery/img-05.jpg",
//       alt: "Fitness coaching",
//       orientation: "horizontal",
//     },
//     {
//       src: "/images/gallery/img-06.jpg",
//       alt: "Workout session",
//       orientation: "horizontal",
//     },
//     {
//       src: "/images/gallery/img-07.jpg",
//       alt: "Training demonstration",
//       orientation: "horizontal",
//     },
//     {
//       src: "/images/gallery/img-08.jpg",
//       alt: "Fitness motivation",
//       orientation: "horizontal",
//     },
//     {
//       src: "/images/gallery/img-09.jpg",
//       alt: "Exercise technique",
//       orientation: "horizontal",
//     },
//     {
//       src: "/images/gallery/img-10.jpg",
//       alt: "Fitness lifestyle",
//       orientation: "horizontal",
//     },
//     {
//       src: "/images/gallery/img-11.jpg",
//       alt: "Training progress",
//       orientation: "horizontal",
//     },
//     {
//       src: "/images/gallery/img-12.jpg",
//       alt: "Fitness community",
//       orientation: "horizontal",
//     },
//     {
//       src: "/images/gallery/img-13.jpg",
//       alt: "Workout motivation",
//       orientation: "horizontal",
//     },
//     {
//       src: "/images/gallery/img-14.jpg",
//       alt: "Fitness achievement",
//       orientation: "horizontal",
//     }
//   ],
// };

export { person, social, newsletter, home, about, blog, work };
