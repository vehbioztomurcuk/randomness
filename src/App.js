// src/App.js
import React, { useState } from 'react';
import './App.css';

const videoList = [
  'https://www.youtube.com/watch?v=OHmy7jwlXG4',
  'https://www.youtube.com/watch?v=3_Jf3CuCzxE',
  'https://www.youtube.com/watch?v=u1dL-y7KCxc',
  'https://www.youtube.com/watch?v=5crtAfO3HlY',
  'https://www.youtube.com/watch?v=iB82k2kXi8w',
  // Add more video URLs as needed
];

const textLists = {
  'textList1': [
    'Text 1.1',
    'Text 1.2',
    'Text 1.3',
    // Add more text items as needed
  ],
  'textList2': [
    'Text 2.1',
    'Text 2.2',
    'Text 2.3',
    // Add more text items as needed
  ],
  'textList3': [
    'Text 3.1',
    'Text 3.2',
    'Text 3.3',
    // Add more text items as needed
  ],
};

function App() {
  const [randomVideo, setRandomVideo] = useState(null);
  const [showTextList, setShowTextList] = useState(null);

  const handleButtonClick = () => {
    const randomIndex = Math.floor(Math.random() * videoList.length);
    const selectedVideo = videoList[randomIndex];
    setRandomVideo(selectedVideo);
    // Hide the text list when a new video is selected
    setShowTextList(null);
  };

  const handleShowTextList = (listName) => {
    setShowTextList(listName);
    // Set randomVideo to null when showing the text list
    setRandomVideo(null);
  };

  return (
    <div className="App">
      <div className="left-container">
        <h1>bitter hub</h1>
        <h3>video edit & front-end web</h3>
        <p>ilk video editimi 2007 yilinda yapmistim <a href="https://www.youtube.com/watch?v=opUYHFGRdpI" target="_blank">click</a></p>
        <p>o günden beri 300+ profesyonel youtube videosu editledim. </p>
        <p> <a href="mailto:hey@bitterhub.com" target="_blank">hey@bitterhub.com</a></p>


      </div>
      <div className="line"></div>
      <div className="right-container">
        <div className="button-container">
          <button className="random-edit-btn" onClick={handleButtonClick}>random edit</button>
          {/* Add the new button to show the text list */}
          <button className="show-text-list-btn show-text-list1" onClick={() => handleShowTextList('textList1')}>random proje</button>
          <button className="show-text-list-btn show-text-list2" onClick={() => handleShowTextList('textList2')}>blog</button>
          <button className="show-text-list-btn show-text-list3" onClick={() => handleShowTextList('textList3')}>süreç</button>
        </div>
        {randomVideo && !showTextList && (
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
        {showTextList && (
          <ul className={`text-list ${showTextList}`}>
            {textLists[showTextList].map((text, index) => (
              <li key={index}>{text}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default App;
