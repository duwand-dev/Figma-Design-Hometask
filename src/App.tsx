import './App.css';
import Head from './components/Head';
import Progress from './components/Progress';
import Roadmap from './components/Roadmap';

function App() {
  return (
    <div className='dark size-full flex flex-col items-center font-sans  tracking-[0.4px]'>
      <div className="w-[750px] pt-[60px] pr-[30px] pb-[30px] pl-[30px]">
        <Head />
        <Roadmap />
        <Progress />
      </div>

      <label className="switch absolute top-10 left-20">
        <input type="checkbox" checked />
        <span className="slider round"></span>
      </label>
    </div>
  );
}

export default App;
