import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import ProfileCard from './components/ProfileCard';
import BlogCard from './components/BlogCard';
import FormValidation from './components/FormValidation';
import './App.css';  
const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/profile">Profile Card</Link>
            </li>
            <li>
              <Link to="/blog">Blog Card</Link>
            </li>
            <li>
              <Link to="/form">Form Validation</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route
            path="/profile"
            element={
              <ProfileCard
                name="Peter Parker"
                image="/spider-man-film-peter-parker-andrew-garfield-wallpaper-preview.jpg"
                description="Peter Parker, your friendly neighborhood Spider-Man."
              />
            }
          />
          <Route
            path="/blog"
            element={
              <BlogCard
                title="100+ resources to learn React"
                description="React allows us to build user interfaces with ease."
                imageUrl="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
              />
            }
          />
          <Route path="/form" element={<FormValidation />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
