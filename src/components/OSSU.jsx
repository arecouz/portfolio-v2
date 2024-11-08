import DisplayGrid from "./DisplayGrid";
const OSSU = () => {
  const ossu = [
    {
      title: 'Core Computer Science',
      parts: [
        {
          name: 'Intro to Computer Science and Python',
          image: 'intro-to-computer-science-and-python.png',
        },
        {
          name: 'Object-Oriented Design',
          image: 'object-oriented-design.png',
        },
        {
          name: 'Systematic Program Design',
          image: 'systematic-program-design.png',
        },
        {
          name: 'Software Architecture',
          image: 'software-architecture.png',
        },
        {
          name: 'Programming Languages, (Parts A,B,C)',
          image: 'programming-languages-parts-a-b-c.png',
        },
      ],
    },
    {
      title: 'Core Theory',
      parts: [
        {
          name: 'Divide and Conquer, Sorting and Searching, and Randomized Algorithms',
          image:
            'divide-and-conquer-sorting-and-searching-and-randomized-algorithms.png',
        },
        {
          name: 'Graph Search, Shortest Paths, and Data Structures',
          image: 'graph-search-shortest-paths-and-data-structures.png',
        },
        {
          name: 'Greedy Algorithms, Minimum Spanning Trees, and Dynamic Programming',
          image:
            'greedy-algorithms-minimum-spanning-trees-and-dynamic-programming.png',
        },
        {
          name: 'Shortest Paths Revisited, NP-Complete Problems and What To Do About Them',
          image:
            'shortest-paths-revisited-np-complete-problems-and-what-to-do-about-them.png',
        },
      ],
    },
    {
      title: 'Core Applications',
      parts: [
        {
          name: 'Machine Learning: Supervised (regression and classification)',
          image:
            'machine-learning-supervised-regression-and-classification.png',
        },
        {
          name: 'Machine Learning: Advanced Learning Algorithms',
          image: 'machine-learning-advanced-learning-algorithms.png',
        },
        {
          name: 'Machine Learning: Unsupervised Learning',
          image: 'machine-learning-unsupervised-learning.png',
        },
        {
          name: 'Computer Graphics: 3D scenes, ray tracing',
          image: 'computer-graphics-3d-scenes-ray-tracing.png',
        },
        {
          name: 'Databases: Modeling and Theory',
          image: 'databases-modeling-and-theory.png',
        },
        {
          name: 'Databases: Relational Databases and SQL',
          image: 'databases-relational-databases-and-sql.png',
        },
        {
          name: 'Databases: Semistructured Data',
          image: 'databases-semistructured-data.png',
        },
      ],
    },
    {
      title: 'Core Systems',
      parts: [
        {
          name: 'The Missing Semester of Your CS Education',
          image: 'the-missing-semester-of-your-cs-education.png',
        },
        {
          name: 'Build a Modern Computer from First Principles: NAND to Tetris',
          image:
            'build-a-modern-computer-from-first-principles-nand-to-tetris.png',
        },
        {
          name: 'Operating Systems: Three Easy Pieces',
          image: 'operating-systems-three-easy-pieces.png',
        },
        {
          name: 'Computer Networking: a Top-Down Approach',
          image: 'computer-networking-a-top-down-approach.png',
        },
      ],
    },
    {
      title: 'Core Math',
      parts: [
        {
          name: 'Calculus: Differentiation',
          image: 'calculus-differentiation.png',
        },
        {
          name: 'Calculus: Integration',
          image: 'calculus-integration.png',
        },
        {
          name: 'Calculus: Coordinate Systems',
          image: 'calculus-coordinate-systems.png',
        },
      ],
    },
  ];

  return (
    <DisplayGrid
      title={'Open Source Society University'}
      description={
        'A complete education in computer science using online materials.'
      }
      list={ossu}
    />
  );
};

export default OSSU;
