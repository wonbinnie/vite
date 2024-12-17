import React from "react";
import "./FAQ.css";

const FAQ = () => {
  return (
    <div className="faq">
      <h3>자주 묻는 질문</h3>
      <ul>
        <li>
          <button>
            어떤 콘텐츠를 시청할 수 있나요? <span>+</span>
          </button>
          {/* <div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Repudiandae culpa exercitationem ut quidem cum quas odio corrupti
              illo magni voluptatem, magnam nihil, eligendi est consectetur non
              eos, labore provident molestias.
            </p>
            <a href="">check</a>
          </div> */}
        </li>

        <li>
          <button>
            넷플릭스란 무엇인가요?
            <span>+</span>
          </button>
        </li>

        <li>
          <button>
            어떤 콘텐츠를 시청할 수 있나요?<span>+</span>
          </button>
        </li>

        <li>
          <button>
            넷플릭스 요금은 얼마인가요? <span>+</span>
          </button>
        </li>
      </ul>
    </div>
    // <div>
    //   <h1>넶ㅈㅈ</h1>
    //   <ul></ul>
    // </div>
  );
};

export default FAQ;
