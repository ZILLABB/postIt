import Home from './components/Home/Home';
import Welcome from './components/welcome/Welcome';
import CreateStory from './components/CreateStory/CreateStory';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Stories from './components/Stories/Stories';
import ViewPost from './components/ViewPost/ViewPost';
import MyStories from './components/MyStories/MyStories';
import Edit from './components/EditPage.js/Edit';
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
          < Route path="my-story" element={<MyStories />} />
          < Route path="edit-story" element={<Edit />} />
        </Routes>
      </BrowserRouter>
    </div >


  );
}

export default App;
