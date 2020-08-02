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

  const drawKana = (alphabeth) => {
    let originalKana = null;
    if (selectedKana.original_kana_eng !== ''){
      originalKana = findOriginalKana(selectedKana.original_kana_eng);
    }

    const currentKana = originalKana || selectedKana;

    const imageKey = alphabeth === 'hiragana' ? 'h' : 'k';

    return (
      <div className="column kanaJPN">
        <div className="row">
          <div className="kanaJpn">{selectedKana[alphabeth]}</div>
          <div className="kanaImg">
            <img src={`/mnemonics/${imageKey}_${currentKana['en']}.png`} alt={selectedKana[alphabeth]} height="100px"></img>
          </div>
        </div>

        <div>{currentKana[`${alphabeth}_info`]} &nbsp;</div>
      </div>
    )
  }

  const drawKanas = () => {
    return (
      <React.Fragment>
        {drawKana('hiragana')}
        {drawKana('katakana')}
      </React.Fragment>
    )
  }

  return (
    <div className="content">
      <div className="column">
        <div className="row">
          <div className="kanaEn">{selectedKana['en']}</div>
        </div>

        {drawKanas()}

        <div className="row">
          <div className="nextKana">
            <button onClick={() => refreshKana()}>Next</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Kana;