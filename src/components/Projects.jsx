import React from 'react';

const ProjectCard = ({ title, description, onClick }) => {
  return (
    <div 
      className="p-6 rounded-lg border border-gray-200 hover:border-gray-300 hover:shadow-lg transition-all duration-300 ease-in-out transform hover:-translate-y-1 hover:cursor-pointer bg-white"
      onClick={onClick}
    >
      <p className="text-3xl font-bold mb-2 text-gray-800 transition-all duration-300 group-hover:text-blue-600">
        {title}
      </p>
      <p className="text-gray-600">
        {description}
      </p>
    </div>
  );
};

const Projects = () => {
  const handleCineStackClick = () => {
    window.open('https://cine-track.fly.dev/', '_blank');
  };

  const handleNand2TetrisClick = () => {
    console.log('Redirecting to Nand2Tetris project...');
    window.open('https://your-nand2tetris-project-link.com', '_blank');
  };

  const handleAINumberRecognitionClick = () => {
    console.log('Redirecting to AI Number Recognition...');
    window.open('https://your-ai-number-recognition-project-link.com', '_blank');
  };

  const handlePortfolioWebsiteClick = () => {
    console.log('Redirecting to Portfolio Website...');
    window.open('https://couzens.fly.dev/', '_blank');
  };

  return (
    <div className="grid gap-6 p-6 max-w-4xl mx-auto">
      <ProjectCard 
        title="CineStack" 
        description="Search, rate, and track your movies!" 
        onClick={handleCineStackClick} 
      />
      
      <ProjectCard 
        title="Nand2Tetris" 
        description="Building a virtual computer from first principles" 
        onClick={handleNand2TetrisClick} 
      />
      
      <ProjectCard 
        title="AI number recognition" 
        description="An AI that attempts to guess your hand-drawn number" 
        onClick={handleAINumberRecognitionClick} 
      />
      
      <ProjectCard 
        title="Portfolio Website" 
        description="A different version of this website" 
        onClick={handlePortfolioWebsiteClick} 
      />
    </div>
  );
};

export default Projects;