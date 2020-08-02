import React from 'react';
import {kana} from './data/kana.js';

function Kana() {
  let [selectedKana, setSelectedKana] = React.useState(kana[0]);

  const refreshKana = () => {
    const rand = Math.floor(Math.random() * kana.length);
    setSelectedKana(kana[rand]);
  }

  const findOriginalKana = (en) => {
    return kana.find(element => {
      return element.en === en
    })
  }

  const drawKana = (currentKana) => {
    return (
      <React.Fragment>
        <div className="row">
          <div>{currentKana['hiragana']}</div>
          <div><img src={`/mnemonics/h_${currentKana['en']}.png`} alt={currentKana['hiragana']} className="kanaImg"></img></div>
          <div>{currentKana.hiragana_info}</div>
        </div>

        <div className="row">
          <div>{currentKana['katakana']}</div>
          <div><img src={`/mnemonics/k_${currentKana['en']}.png`} alt={currentKana['katakana']} className="kanaImg"></img></div>
          <div>{currentKana.katakana_info}</div>
        </div>
      </React.Fragment>
    )
  }

  const drawKanas = () => {
    if (selectedKana.original_kana_eng !== ''){
      const originalKana = findOriginalKana(selectedKana.original_kana_eng);
      return drawKana(originalKana);
    }

    return drawKana(selectedKana);
  }

  return (
    <div className="column">
      <div className="row">
        <div>{selectedKana['en']}</div>
      </div>

      {drawKanas()}

      <div className="row">
        <button onClick={() => refreshKana()}>Next</button>
      </div>
    </div>
  );
}

export default Kana;