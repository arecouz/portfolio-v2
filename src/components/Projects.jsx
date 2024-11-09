import { Separator } from '@radix-ui/react-dropdown-menu';
import { Button } from './ui/button';

const ProjectCard = ({ title, description, onClick, tags, githubLink }) => {
  const handleGithubClick = (e) => {
    e.stopPropagation(); // Prevent the card click event from firing
    window.open(githubLink, '_blank');
  };

  return (
    <div className='relative flex flex-col justify-between p-6 rounded-lg border border-gray-200 hover:border-gray-300 hover:shadow-lg transition-all duration-300 ease-in-out transform hover:-translate-y-1 hover:cursor-pointer bg-white'>
      <div onClick={onClick} className='flex-grow'>
        <div className='mr-11'>
          <p className='text-3xl font-bold mb-2 text-gray-800 transition-all duration-300 group-hover:text-blue-600'>
            {title}
          </p>
          <p className='italic'>{description}</p>
        </div>
      </div>

      <div>
        <Separator className="my-4" />
        <p className='text-gray-600'>
          {tags}
        </p>
      </div>

      {/* Button handled separately */}
      <Button
        variant='outline'
        title='GitHub Source Code'
        className='absolute top-4 right-4'
        onClick={handleGithubClick}
      >
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='24'
          height='24'
          viewBox='0 0 24 24'
          fill='none'
          stroke='currentColor'
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
          className='icon icon-tabler icons-tabler-outline icon-tabler-brand-github'
        >
          <path stroke='none' d='M0 0h24v24H0z' fill='none' />
          <path d='M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5' />
        </svg>
      </Button>
    </div>
  );
};

const Projects = () => {
  const handleCineStackClick = () => {
    window.open('https://cine-track.fly.dev/', '_blank');
  };

  const handlePortfolioWebsiteClick = () => {
    window.open('https://couzens.fly.dev/', '_blank');
  };

  return (
    <div className='grid gap-6 p-6 max-w-4xl mx-auto'>
      <ProjectCard
        title='CineStack'
        description='Search, rate, and track your movies!'
        onClick={handleCineStackClick}
        tags={"#react #vite #express #mongoDB #API's #user-authentication"}
        githubLink={'https://github.com/arecouz/cinetrack'}
      />

      <ProjectCard
        title='Portfolio Website'
        description='A first attempt version of this website'
        onClick={handlePortfolioWebsiteClick}
        tags={"#react #vite #styling"}
        githubLink={'https://github.com/arecouz/portfolio/'}
      />
    </div>
  );
};

export default Projects;