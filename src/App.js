import CreateStory from './PAGES/CreateStory';
import Home from './PAGES/Home';
import Welcome from './PAGES/Images/Welcome';
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          < Route path="/" element={<Home />} />
          < Route path="welcome" element={<Welcome />} />
          < Route path="create-story" element={<CreateStory />} />
        </Routes>
      </BrowserRouter>
    </div >


  );
}

export default App;
