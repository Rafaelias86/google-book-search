import React from "react";
import "./style.css"


function Jumbotron() {
  return (
    <div className = "container">
      <div className="jumbotron text-center mt-4">
        <div>
          <h1 className="mb-3"><span><a className="white" id="jumboHead" href="/">Google Books Search</a></span></h1>
        </div>
        <div>
          <a className="white mt-5" target="_blank" rel="noopener noreferrer" href="http://developers.google.com/books/">
            Powered by Google
          </a>
        </div>
        
      </div>
    </div>
  );
}



export default Jumbotron;