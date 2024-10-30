import { useEffect, useState } from 'react';

import './App.css';
import Head from './components/Head';
import Progress from './components/Progress';
import Roadmap from './components/Roadmap';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle(
      'dark',
      isDarkMode
    )
  }, [isDarkMode])

  return (
    <div className='size-full flex flex-col items-center font-sans tracking-[0.4px]'>

      <label className="relative inline-block w-[60px] h-[34px]">
        <input className='invisible' type="checkbox" onChange={() => setIsDarkMode(!isDarkMode)} />
        <span className="slider round"></span>
      </label>

      <div className="bg-white dark:bg-black w-[750px] pt-[60px] pr-[30px] pb-[30px] pl-[30px]">
        <Head />
        <Roadmap />
        <Progress />
      </div>
    </div>
  );
}

export default App;
