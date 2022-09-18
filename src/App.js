import CreateStory from './PAGES/CreateStory';
import Home from './PAGES/Home';
import Welcome from './PAGES/Welcome';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Stories from './PAGES/Stories';
import ViewPost from './PAGES/ViewPost';
import MyStory from './PAGES/MyStory';
import EditStory from './PAGES/EditStory';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          < Route path="/" element={<Home />} />
          < Route path="welcome" element={<Welcome />} />
          < Route path="create-story" element={<CreateStory />} />
          < Route path="stories" element={<Stories />} />
          < Route path="view-post" element={<ViewPost />} />
          < Route path="my-story" element={<MyStory />} />
          < Route path="edit-story" element={<EditStory />} />
        </Routes>
      </BrowserRouter>
    </div >


  );
}

export default App;
