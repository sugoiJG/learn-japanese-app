import React from 'react'

const katakanaCharacters = [
    { romaji: 'a', katakana: 'ア' },
    { romaji: 'i', katakana: 'イ' },
    { romaji: 'u', katakana: 'ウ' },
    { romaji: 'e', katakana: 'エ' },
    { romaji: 'o', katakana: 'オ' },
    { romaji: 'ka', katakana: 'カ' },
    { romaji: 'ki', katakana: 'キ' },
    { romaji: 'ku', katakana: 'ク' },
    { romaji: 'ke', katakana: 'ケ' },
    { romaji: 'ko', katakana: 'コ' },
    { romaji: 'sa', katakana: 'サ' },
    { romaji: 'shi', katakana: 'シ' },
    { romaji: 'su', katakana: 'ス' },
    { romaji: 'se', katakana: 'セ' },
    { romaji: 'so', katakana: 'ソ' },
    { romaji: 'ta', katakana: 'タ' },
    { romaji: 'chi', katakana: 'チ' },
    { romaji: 'tsu', katakana: 'ツ' },
    { romaji: 'te', katakana: 'テ' },
    { romaji: 'to', katakana: 'ト' },
    { romaji: 'na', katakana: 'ナ' },
    { romaji: 'ni', katakana: 'ニ' },
    { romaji: 'nu', katakana: 'ヌ' },
    { romaji: 'ne', katakana: 'ネ' },
    { romaji: 'no', katakana: 'ノ' },
    { romaji: 'ha', katakana: 'ハ' },
    { romaji: 'hi', katakana: 'ヒ' },
    { romaji: 'fu', katakana: 'フ' },
    { romaji: 'he', katakana: 'ヘ' },
    { romaji: 'ho', katakana: 'ホ' },
    { romaji: 'ma', katakana: 'マ' },
    { romaji: 'mi', katakana: 'ミ' },
    { romaji: 'mu', katakana: 'ム' },
    { romaji: 'me', katakana: 'メ' },
    { romaji: 'mo', katakana: 'モ' },
    { romaji: 'ya', katakana: 'ヤ' },
    { romaji: 'yu', katakana: 'ユ' },
    { romaji: 'yo', katakana: 'ヨ' },
    { romaji: 'ra', katakana: 'ラ' },
    { romaji: 'ri', katakana: 'リ' },
    { romaji: 'ru', katakana: 'ル' },
    { romaji: 're', katakana: 'レ' },
    { romaji: 'ro', katakana: 'ロ' },
    { romaji: 'wa', katakana: 'ワ' },
    { romaji: 'wo', katakana: 'ヲ' },
    { romaji: 'n', katakana: 'ン' },
  
    { romaji: 'ga', katakana: 'ガ' },
    { romaji: 'gi', katakana: 'ギ' },
    { romaji: 'gu', katakana: 'グ' },
    { romaji: 'ge', katakana: 'ゲ' },
    { romaji: 'go', katakana: 'ゴ' },
    { romaji: 'za', katakana: 'ザ' },
    { romaji: 'ji', katakana: 'ジ' },
    { romaji: 'zu', katakana: 'ズ' },
    { romaji: 'ze', katakana: 'ゼ' },
    { romaji: 'zo', katakana: 'ゾ' },
    { romaji: 'da', katakana: 'ダ' },
    { romaji: 'ji', katakana: 'ヂ' },
    { romaji: 'zu', katakana: 'ヅ' },
    { romaji: 'de', katakana: 'デ' },
    { romaji: 'do', katakana: 'ド' },
    { romaji: 'ba', katakana: 'バ' },
    { romaji: 'bi', katakana: 'ビ' },
    { romaji: 'bu', katakana: 'ブ' },
    { romaji: 'be', katakana: 'ベ' },
  
    { romaji: 'bo', katakana: 'ボ' },
    { romaji: 'pa', katakana: 'パ' },
    { romaji: 'pi', katakana: 'ピ' },
    { romaji: 'pu', katakana: 'プ' },
    { romaji: 'pe', katakana: 'ペ' },
    { romaji: 'po', katakana: 'ポ' }
  ]

const KatakanaGrid = () => {
  return (
    <div className="content-center">
      <h4 className="text-xl font-bold my-10">Katakana Chart</h4>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 mx-auto max-w-md motion-safe:animate-fadeIn">
        {katakanaCharacters.map((char, index) => (
          <div key={index} className="p-4 bg-gray-900 rounded-lg shadow-sm text-center">
            <div className="text-4xl">{char.katakana}</div>
            <div className="text-sm">{char.romaji}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default KatakanaGrid