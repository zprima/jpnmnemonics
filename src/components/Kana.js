import React from 'react';
import {kana} from '../data/kana.js';

function Kana({alphabeth, selectedKana}) {
  const findOriginalKana = (en) => {
    return kana.find(element => {
      return element.en === en
    })
  }

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

      <div className="kanaInfo">{currentKana[`${alphabeth}_info`]} &nbsp;</div>
    </div>
  )
}

export default Kana;