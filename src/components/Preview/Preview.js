import React from 'react';
import './Preview.css';

export default function Preview({ head, middle }) {
  return (
    <div>
      <div className="right">
        <div className="character">
          <div className="bg head" style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/options/${head}-head.png)` }} >
          </div>
          <div className="bg middle" style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/options/${middle}-middle.png)` }}>
          </div>
          <div className="bg bottom" id="bottom">
          </div>
        </div>

      </div>
    </div >
  );
}
// style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/options/${head}-head.png)` }}