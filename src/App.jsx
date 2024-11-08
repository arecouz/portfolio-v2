import './index.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Education from './components/Education';
import Projects from './components/Projects';
import ThreeScene from './components/ThreeScene';
import OSSU from './components/OSSU';
import FullStackOpen from './components/FullStackOpen';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

const App = () => {
  return (
    <Router>
      <div className='flex flex-col overflow:auto'>
        {/* Menu */}
        <div className='flex-[3] p-4 flex flex-col justify-center items-center lg:ml-9'>
          <Link to={'/'}>
            <h1 className='text-8xl font-bold text-center'>Richard</h1>
            <h1 className='text-8xl font-bold text-center'>Couzens</h1>
          </Link>

          <p className='text-2xl text-center'>richardcouzens96@gmail.com</p>
          <p className='text-center'>Junior full-stack web developer</p>

          {/* Navigation Links */}
          <div className='flex p-2 text-center justify-center gap-5 mt-4'>
            <DropdownMenu>
              <DropdownMenuTrigger className='text-2xl font-semibold hover:cursor-pointer'>
                👨‍🎓 Education
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem asChild>
                  <Link to='/education/ossu'>OSSU</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to='/education/fullstackopen'>Full Stack Open</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <Link
              to='/projects'
              className='text-2xl font-semibold hover:underline hover:cursor-pointer'
            >
              📁 Projects
            </Link>
            <a
              href='https://github.com/arecouz'
              className='text-2xl font-semibold hover:underline hover:cursor-pointer'
              target='_blank'
              rel='noopener noreferrer'
            >
              🖱️ GitHub
            </a>
          </div>
        </div>

        {/* Content */}
        <div className='flex-[7] flex justify-center items-center h-screen'>
          <Routes>
            <Route path='/education' element={<Education />} />
            <Route path='/education/ossu' element={<OSSU />} />
            <Route
              path='/education/fullstackopen'
              element={<FullStackOpen />}
            />
            <Route path='/projects' element={<Projects />} />
            <Route path='/' element={<ThreeScene />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
