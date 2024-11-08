import { Link, Route, Routes } from 'react-router-dom';


const Education = () => {
  return (
    <div className="flex flex-col justify-content ml-3">
      <br />
      <Link to={`/education/ossu`} className="text-2xl hover:underline hover:cursor-pointer">
        Open Source Society University
      </Link>
      <p className="max-w-[60ch]">
        A complete education in computer science using online materials.
      </p>
      <br />
      <Link to={`/education/fullstackopen`} className="text-2xl hover:underline hover:cursor-pointer">
        Full Stack Open
      </Link>
      <p className="max-w-[60ch]">
        Modern web development using JavaScript, React, Node.js, and MongoDB to build full-stack web and mobile applications.
      </p>
    </div>
  );
};


export default Education;
