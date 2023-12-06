// src/App.js
import React, { useState } from 'react';
import './App.css';

const videoList = [
  'https://www.youtube.com/watch?v=99awOpJgUbw',
  'https://www.youtube.com/watch?v=F1HNuAE9WdU',
  'https://www.youtube.com/watch?v=sLisEEwYZvw',
  'https://www.youtube.com/watch?v=B7utOTVKb0E',
  'https://www.youtube.com/watch?v=3olbLzCvcaA',
  // Add more video URLs as needed
];

function App() {
  const [randomVideo, setRandomVideo] = useState(null);

  const handleButtonClick = () => {
    const randomIndex = Math.floor(Math.random() * videoList.length);
    const selectedVideo = videoList[randomIndex];
    setRandomVideo(selectedVideo);
  };

  return (
    <div className="App">
      <div className="left-container">
        <h1>bitter hub</h1>
        <h3>video edit & front-end web</h3>
        <p>ilk video editimi 2007 yilinda yapmistim </p>
        <p>10'larca plug-in ve template ile kendime verimli bir ekosistem kurdum</p>
        <button onClick={handleButtonClick}>random edit</button>
      </div>
      <div className="right-container">
        {randomVideo && (
          <div>
            <iframe
              title="Random YouTube Video"
              width="560"
              height="315"
              src={randomVideo.replace('watch?v=', 'embed/')}
              frameBorder="1"
              allowFullScreen
            ></iframe>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
