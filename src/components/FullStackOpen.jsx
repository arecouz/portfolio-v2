import DisplayGrid from './DisplayGrid';

const FullStackOpen = () => {
  const certificateUrl = 'certificate-fullstack.png';
  const fso = [
    {
      title: 'Frontend Development',
      parts: [
        {
          name: 'React',
          image: certificateUrl,
        },
        {
          name: 'Vite',
          image: certificateUrl,
        },
        {
          name: 'Redux (Thunk, Toolkit)',
          image: certificateUrl,
        },
        {
          name: 'State Management Hooks (useQuery, useReducer)',
          image: certificateUrl,
        },
      ],
    },
    {
      title: 'Backend Development',
      parts: [
        {
          name: 'Node.js & Express',
          image: certificateUrl,
        },
        {
          name: 'Deployment: fly.io',
          image: certificateUrl,
        },
        {
          name: 'MongoDB',
          image: certificateUrl,
        },
        {
          name: 'Apollo: GraphQl',
          image: certificateUrl,
        },
        {
          name: 'Redis',
          image: certificateUrl,
        },
        {
          name: 'Relational DB: PostgresSQL & Sequelize',
          image: certificateUrl,
        },
      ],
    },
    {
      title: 'Continuous Integration / Continuous Delivery systems',
      parts: [
        {
          name: 'GitHub Actions',
          image: certificateUrl,
        },
        {
          name: 'Docker: containers',
          image: certificateUrl,
        },
        {
          name: 'ESlint',
          image: certificateUrl,
        },
        {
          name: 'vitest',
          image: certificateUrl,
        },
        {
          name: 'E2E testing: playwright',
          image: certificateUrl,
        },
      ],
    },
    {
      title: 'Other',
      parts: [
        {
          name: 'TypeScript: server/client',
          image: certificateUrl,
        },
        {
          name: 'React Native (server, client, testing)',
          image: certificateUrl,
        },
        {
          name: 'Styling: CSS Frameworks e.g. tailwind',
          image: certificateUrl,
        },
      ],
    },
    {
      title: 'Code examples on github:',
      parts: [
        {
          name: 'Blog List App',
          link: 'https://github.com/arecouz/FullStackOpen/tree/main/blogListApp',
        },
        {
          name: 'Anecdotes App',
          link: 'https://github.com/arecouz/FullStackOpen/tree/main/query-anecdotes',
        },
        {
          name: 'CI/CD: github actions',
          link: 'https://github.com/arecouz/FullStackOpen-BlogList-CI-CD',
        },
        {
          name: 'Containerized App',
          link: 'https://github.com/arecouz/full-stack-open-blogs-containerized/tree/main/blogListApp',
        },
        {
          name: 'Repository Mobile App',
          link: 'https://github.com/arecouz/FullStackOpen/tree/main/part10',
        },
      ],
    },
  ];

  return (
    <DisplayGrid
      title={'Full Stack Open'}
      description={
        'Building modern JavaScript-based, single page applications with ReactJS that use REST APIs built with Node.js.'
      }
      list={fso}
    />
  );
};

export default FullStackOpen;
