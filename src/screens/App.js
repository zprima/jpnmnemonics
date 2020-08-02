import React from 'react';
import {kana} from '../data/kana.js';
import Kana from '../components/Kana.js'

function App() {
  let [selectedKana, setSelectedKana] = React.useState(kana[0]);

  const refreshKana = () => {
    const rand = Math.floor(Math.random() * kana.length);
    setSelectedKana(kana[rand]);
  }

  return (
    <div className="content">
      <div className="column">
        <div className="row">
          <div className="kanaEn">{selectedKana['en']}</div>
        </div>

        <Kana alphabeth="hiragana" selectedKana={selectedKana}></Kana>
        <Kana alphabeth="katakana" selectedKana={selectedKana}></Kana>

        <div className="row">
          <div className="nextKana">
            <button onClick={() => refreshKana()}>Next</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
