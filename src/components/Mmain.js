import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function Mmain() {
  return (
    <div className="w-full h-[540px] border border-gray-100 relative">
      
      <div
        id="carouselExampleAutoplaying"
        className="carousel slide h-full w-full"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner h-full w-full">
          <div className="carousel-item active">
            <img src="img1.jpg" className="d-block w-100 h-full object-cover" alt="..." />
          </div>
          <div className="carousel-item">
            <img src="img2.jpg" className="d-block w-100 h-full object-cover" alt="..." />
          </div>
          <div className="carousel-item">
            <img src="img3.jpg" className="d-block w-100 h-full object-cover" alt="..." />
          </div>
          <div className="carousel-item">
            <img src="img4.jpg" className="d-block w-100 h-full object-cover" alt="..." />
          </div>
          <div className="carousel-item">
            <img src="img5.jpg" className="d-block w-100 h-full object-cover" alt="..." />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

    
      <div className="absolute bg-white top-12 left-8 p-6 flex flex-col items-start justify-center shadow-lg h-52 w-[520px] transition-all duration-300 hover:bg-white/90 hover:shadow-2xl"> 
        <h2 className="text-4xl font-bold mb-3 transition-colors duration-300 hover:text-gray-700">Hi guys, Welcome!</h2>
        <h3 className="text-2xl">Have a look at this project! Let's go...</h3>
        <h3 className="text-2xl">The goal is to learn without stress</h3>
      </div>
    </div>
  );
}

export default Mmain;
