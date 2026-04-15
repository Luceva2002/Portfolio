export const myProjects = [
  {
    title: 'Boro coatto o pariolino?',
    desc: 'Boro Coatto Pariolino is an interactive web application that explores Roman culture through a playful digital personality test. It lets users discover whether they are more Boro, Coatto, or Pariolino, offering an engaging experience enhanced by smooth animations, fluid navigation, and NFT minting features that make the test lively and immersive.',
    subdesc:
      'Built using Next.js 14, Tailwind CSS, and TypeScript, the application integrates wagmi + viem for blockchain connectivity and deploys on the Arbitrum layer-2 testnet. Optimized for performance, scalability, and responsive design, Boro Coatto Pariolino combines modern web technology with cultural humor in a fast and dynamic experience.',
    href: 'https://boro-coatto-pariolino.vercel.app',
    model: '/models/portfolio5.glb',
    logo: '/assets/project-logo1.png',
    logoStyle: {
      backgroundColor: '#2A1816',
      border: '0.2px solid #36201D',
      boxShadow: '0px 0px 60px 0px #AA3C304D',
    },
    spotlight: '/assets/spotlight1.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'TailwindCSS',
        path: 'assets/tailwindcss.png',
      },
      {
        id: 3,
        name: 'TypeScript',
        path: '/assets/typescript.png',
      },
      {
        id: 4,
        name: 'Framer Motion',
        path: '/assets/supabase.svg',
      },
    ],
  },
  {
    title: 'SplitCast',
    desc: 'SplitCast is a decentralized web application that simplifies how people manage shared expenses using crypto. Inspired by apps like Tricount and Splitwise, it allows groups to track, split, and settle payments effortlessly on-chain. With swap functionality by 1inch, users can transfer multi-currency crypto payments instantly and transparently.',
    subdesc:
      'Built using Next.js 14, Tailwind CSS, and TypeScript, the application manages shared debts securely through Supabase and connects to the blockchain via wagmi + viem. Deployed on the Arbitrum layer-2 testnet with Solidity smart contracts, SplitCast is optimized for speed, low fees, and a seamless decentralized experience.',
    href: '',
    model: '/models/portfolio5.glb',
    logo: '/assets/project-logo2.png',
    logoStyle: {
      backgroundColor: '#13202F',
      border: '0.2px solid #17293E',
      boxShadow: '0px 0px 60px 0px #2F6DB54D',
    },
    spotlight: '/assets/spotlight2.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'TailwindCSS',
        path: 'assets/tailwindcss.png',
      },
      {
        id: 3,
        name: 'TypeScript',
        path: '/assets/typescript.png',
      },
      {
        id: 4,
        name: 'Framer Motion',
        path: '/assets/supabase.svg',
      },
    ],
  },
  {
    title: 'Cub3d',
    desc: 'Cub3D is a lightweight raycasting engine written in C, designed to replicate the core functionalities of early 3D games like Wolfenstein 3D. It supports real-time rendering, texture mapping, player movement, and basic input handling, offering an efficient way to explore a pseudo-3D environment from a first-person perspective.',
    subdesc:
      'Demonstrates how the C language interfaces with graphics libraries, managing rendering loops, memory, and mathematical calculations. The result is a compact yet immersive engine that mirrors the essential behavior of early 3D rendering systems within a minimal and educational framework.',
    href: 'https://boro-coatto-pariolino.vercel.app',
    model: '/models/portfolio5.glb',
    logo: '/assets/project-logo3.png',
    logoStyle: {
      backgroundColor: '#60f5a1',
      background:
        'linear-gradient(0deg, #60F5A150, #60F5A150), linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(208, 213, 221, 0.8) 100%)',
      border: '0.2px solid rgba(208, 213, 221, 1)',
      boxShadow: '0px 0px 60px 0px rgba(35, 131, 96, 0.3)',
    },
    spotlight: '/assets/spotlight3.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'TailwindCSS',
        path: 'assets/tailwindcss.png',
      },
      {
        id: 3,
        name: 'TypeScript',
        path: '/assets/typescript.png',
      },
      {
        id: 4,
        name: 'Framer Motion',
        path: '/assets/supabase.svg',
      },
    ],
  },
  {
    title: 'synergica.tech',
    desc: 'Synergica Tech is a modern corporate website that presents the company\'s consulting services through a clean and professional design. It combines structured layouts, smooth transitions, and minimal aesthetics to communicate reliability, innovation, and technological expertise.',
    subdesc:
      'Built on WordPress with the Salient theme, the site features responsive layouts, motion effects, and custom design elements for a dynamic and polished look. Optimized for performance and accessibility, Synergica Tech delivers a fast, elegant, and trustworthy digital experience.',
    href: '',
    model: '/models/portfolio5.glb',
    logo: '/assets/project-logo4.png',
    logoStyle: {
      backgroundColor: '#0E1F38',
      border: '0.2px solid #0E2D58',
      boxShadow: '0px 0px 60px 0px #2F67B64D',
    },
    spotlight: '/assets/spotlight4.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'TailwindCSS',
        path: 'assets/tailwindcss.png',
      },
      {
        id: 3,
        name: 'TypeScript',
        path: '/assets/typescript.png',
      },
      {
        id: 4,
        name: 'Framer Motion',
        path: '/assets/supabase.svg',
      },
    ],
  },
];

export const calculateSizes = (isSmall: boolean, isMobile: boolean, isTablet: boolean) => {
  return {
    deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
    deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
    cubePosition: isSmall ? [4, -5, 0] : isMobile ? [5, -5, 0] : isTablet ? [5, -5, 0] : [9, -5.5, 0],
    reactLogoPosition: isSmall ? [3, 4, 0] : isMobile ? [5, 4, 0] : isTablet ? [5, 4, 0] : [12, 3, 0],
    ringPosition: isSmall ? [-5, 7, 0] : isMobile ? [-10, 10, 0] : isTablet ? [-12, 10, 0] : [-24, 10, 0],
    targetPosition: isSmall ? [-5, -10, -10] : isMobile ? [-9, -10, -10] : isTablet ? [-11, -7, -10] : [-13, -13, -10],
  };
};

export const workExperiences = [
  {
    id: 1,
    name: 'Figma',
    pos: 'UI/UX Designer',
    duration: '2024 - Present',
    title: "I design user interfaces and experiences for web and mobile applications. I use Figma to create wireframes, prototypes, and mockups that help bring ideas to life.",
    icon: '/assets/figma.svg',
    animation: 'victory',
  },
  {
    id: 2,
    name: 'Wordpress',
    pos: 'Wordpress developer',
    duration: '2025',
    title: "Using the Salient theme on WordPress, I build sleek, professional websites with eye-catching animations and refined design. Interactive elements add dynamics without sacrificing performance or clarity.",
    icon: '/assets/wordpress.svg',
    animation: 'clapping',
  },
  {
    id: 3,
    name: 'Angular',
    pos: 'Stage software engineer',
    duration: '2021 - 2022',
    title: "Web application development in Angular at Synergica, enhancing frontend, python backend, data management in postgresql and docker.",
    icon: '/assets/angular.svg',
    animation: 'salute',
  },
];
