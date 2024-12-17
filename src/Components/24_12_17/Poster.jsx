import React from "react";
import "./Poster.css";

const Poster = () => {
  return (
    <div className="poster">
      <h3>지금 뜨는 컨텐츠</h3>
      <ul>
        <li>
          <img
            src="https://cdn.pixabay.com/photo/2022/06/10/03/59/lynx-7253623_640.jpg"
            alt=""
          />
          <p>영화제목</p>
        </li>
        <li>
          <img
            src="https://cdn.pixabay.com/photo/2022/06/10/03/59/lynx-7253623_640.jpg"
            alt=""
          />
          <p>영화제목</p>
        </li>
      </ul>
    </div>
  );
};

export default Poster;
