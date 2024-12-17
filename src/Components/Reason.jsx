import React from "react";
import "./Reason.css";
import { FaAnglesUp, Fa2, Fa3, Fa4 } from "react-icons/fa6";

const Reason = () => {
  return (
    <div className="re">
      <h3>가입해야 하는 또다른 이유</h3>
      <ul>
        <li>
          <div>
            <p>취향에 딱 맞는 이야기</p>

            <FaAnglesUp />
          </div>
        </li>
        <li>
          <div>
            <p>언제든지 해지 또는 전환 가능한 맴버쉽</p>
            <Fa2 />
          </div>
        </li>
        <li>
          <div>
            <p>아이들만을 위한 공간</p>

            <Fa3 />
          </div>
        </li>
        <li>
          <div>
            <p>스마트폰, 태블릿, 노트북, TV에서 이용 가능</p>
            <Fa4 />
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Reason;
