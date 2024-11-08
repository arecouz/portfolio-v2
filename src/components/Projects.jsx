const ProjectCard = ({ title, description, onClick }) => {
  return (
    <div className='hover:cursor-pointer' onClick={onClick}>
      <p className='text-3xl'>{title}</p>
      <p>{description}</p>
    </div>
  );
};

const Projects = () => {
  const handleCineStackClick = () => {
    window.location.href = 'https://cine-track.fly.dev/';
  };

  const handleNand2TetrisClick = () => {
    console.log('Redirecting to Nand2Tetris project...');
    // You can replace the URL with the actual one for Nand2Tetris
    window.location.href = 'https://your-nand2tetris-project-link.com';
  };

  const handleAINumberRecognitionClick = () => {
    console.log('Redirecting to AI Number Recognition...');
    // Replace with actual project link
    window.location.href = 'https://your-ai-number-recognition-project-link.com';
  };

  const handlePortfolioWebsiteClick = () => {
    console.log('Redirecting to Portfolio Website...');
    window.location.href = 'https://couzens.fly.dev/';
  };

  return (
    <div className='flex flex-col justify-content ml-3'>
      <br />
      <ProjectCard 
        title="CineStack" 
        description="Search, rate, and track your movies!" 
        onClick={handleCineStackClick} 
      />
      <br />
      <ProjectCard 
        title="Nand2Tetris" 
        description="Building a virtual computer from first principles" 
        onClick={handleNand2TetrisClick} 
      />
      <br />
      <ProjectCard 
        title="AI number recognition" 
        description="An AI that attempts to guess your hand-drawn number" 
        onClick={handleAINumberRecognitionClick} 
      />
      <br />
      <ProjectCard 
        title="Portfolio Website" 
        description="A different version of this website" 
        onClick={handlePortfolioWebsiteClick} 
      />
    </div>
  );
};

export default Projects;
