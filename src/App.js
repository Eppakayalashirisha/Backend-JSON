import React from 'react'

import data from './data/data.json'

function App() {
  
  return (
    <>
    {/* heading */}
      <h1>LIST OF GAMES</h1>
      <div className=" game-section">
        {/* looping through the json file */}
        {data.map((item) => {
            let index = 0;
            const { id,title, imgurl, price, releasedate } = item
            return (
              <div  className = "games-section"key={id}>
               <div className="col image"><img className="image" src={imgurl} alt="image1"/></div>
              <div className="title-section">
                  <div className="col title">{title}</div>
                  <div className ="col release-date">{releasedate}</div>
                  <div className="col price">{price}</div>
              
                </div>
              </div>

            )

          })}
      </div>
          
  </>
  );
}

export default App;
