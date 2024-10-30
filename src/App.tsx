import './App.css';
import Head from './components/Head';
import Progress from './components/Progress';
import Roadmap from './components/Roadmap';

function App() {
  return (
    <div className='size-full flex flex-col items-center font-sans'>
      <div className="w-[750px] pt-[60px] pr-[30px] pb-[30px] pl-[30px]">
        <Head />
        <Progress />
        <Roadmap />
      </div>
    </div>
  );
}

export default App;
