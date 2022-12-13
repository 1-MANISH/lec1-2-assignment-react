
import Accordian from './accordion component/Accordian';
import './App.css';
import Header from './clone of YouTube video page/Header/Header';
import Videos from './clone of YouTube video page/Header/Videos';
import Features from './Features/Features';
import Notes from './NOTES TAKING APP/Notes';

function App() {
    return (
      <div className="App">
          <Header/>
          <Accordian />
          <Videos/>
          <Features/>
          <Notes/>
      </div>
    );
}

export default App;
