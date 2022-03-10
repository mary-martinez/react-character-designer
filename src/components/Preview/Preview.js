import React from 'react';
import './Preview.css';

export default function Preview({ head }) {
  return (
    <div>
      <div className="right">
        <div className="character">
          <div className="bg head" style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/options/${head}-head.png)` }} >
          </div>
          <div className="bg middle" id="middle">
          </div>
          <div className="bg bottom" id="bottom">
          </div>
        </div>

      </div>
    </div >
  );
}
// style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/options/${head}-head.png)` }}