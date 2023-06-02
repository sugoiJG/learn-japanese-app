import React from "react";

const hiraganaCharacters = [
  { romaji: 'a', hiragana: 'あ' },
  { romaji: 'i', hiragana: 'い' },
  { romaji: 'u', hiragana: 'う' },
  { romaji: 'e', hiragana: 'え' },
  { romaji: 'o', hiragana: 'お' },
  { romaji: 'ka', hiragana: 'か' },
  { romaji: 'ki', hiragana: 'き' },
  { romaji: 'ku', hiragana: 'く' },
  { romaji: 'ke', hiragana: 'け' },
  { romaji: 'ko', hiragana: 'こ' },
  { romaji: 'sa', hiragana: 'さ' },
  { romaji: 'shi', hiragana: 'し' },
  { romaji: 'su', hiragana: 'す' },
  { romaji: 'se', hiragana: 'せ' },
  { romaji: 'so', hiragana: 'そ' },
  { romaji: 'ta', hiragana: 'た' },
  { romaji: 'chi', hiragana: 'ち' },
  { romaji: 'tsu', hiragana: 'つ' },
  { romaji: 'te', hiragana: 'て' },
  { romaji: 'to', hiragana: 'と' },
  { romaji: 'na', hiragana: 'な' },
  { romaji: 'ni', hiragana: 'に' },
  { romaji: 'nu', hiragana: 'ぬ' },
  { romaji: 'ne', hiragana: 'ね' },
  { romaji: 'no', hiragana: 'の' },
  { romaji: 'ha', hiragana: 'は' },
  { romaji: 'hi', hiragana: 'ひ' },
  { romaji: 'fu', hiragana: 'ふ' },
  { romaji: 'he', hiragana: 'へ' },
  { romaji: 'ho', hiragana: 'ほ' },
  { romaji: 'ma', hiragana: 'ま' },
  { romaji: 'mi', hiragana: 'み' },
  { romaji: 'mu', hiragana: 'む' },
  { romaji: 'me', hiragana: 'め' },
  { romaji: 'mo', hiragana: 'も' },
  { romaji: 'ya', hiragana: 'や' },
  { romaji: 'yu', hiragana: 'ゆ' },
  { romaji: 'yo', hiragana: 'よ' },
  { romaji: 'ra', hiragana: 'ら' },
  { romaji: 'ri', hiragana: 'り' },
  { romaji: 'ru', hiragana: 'る' },
  { romaji: 're', hiragana: 'れ' },
  { romaji: 'ro', hiragana: 'ろ' },
  { romaji: 'wa', hiragana: 'わ' },
  { romaji: 'wo', hiragana: 'を' },
  { romaji: 'n', hiragana: 'ん' },
  { romaji: 'ga', hiragana: 'が' },
  { romaji: 'gi', hiragana: 'ぎ' },
  { romaji: 'gu', hiragana: 'ぐ' },
  { romaji: 'ge', hiragana: 'げ' },
  { romaji: 'go', hiragana: 'ご' },
  { romaji: 'za', hiragana: 'ざ' },
  { romaji: 'ji', hiragana: 'じ' },
  { romaji: 'zu', hiragana: 'ず' },
  { romaji: 'ze', hiragana: 'ぜ' },
  { romaji: 'zo', hiragana: 'ぞ' },
  { romaji: 'da', hiragana: 'だ' },
  { romaji: 'ji', hiragana: 'ぢ' },
  { romaji: 'zu', hiragana: 'づ' },
  { romaji: 'de', hiragana: 'で' },
  { romaji: 'do', hiragana: 'ど' },
  { romaji: 'ba', hiragana: 'ば' },
  { romaji: 'bi', hiragana: 'び' },
  { romaji: 'bu', hiragana: 'ぶ' },
  { romaji: 'be', hiragana: 'べ' },
  { romaji: 'bo', hiragana: 'ぼ' },
  { romaji: 'pa', hiragana: 'ぱ' },
  { romaji: 'pi', hiragana: 'ぴ' },
  { romaji: 'pu', hiragana: 'ぷ' },
  { romaji: 'pe', hiragana: 'ぺ' },
  { romaji: 'po', hiragana: 'ぽ' }
];


const HiraganaGrid = () => {
  return (
    <div className="content-center">
      <h4 className="text-xl font-bold mb-10">Hiragana Chart</h4>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 mx-auto max-w-md motion-safe:animate-fadeIn">
        {hiraganaCharacters.map((char, index) => (
          <div key={index} className="p-4 bg-gray-900 rounded-lg shadow-sm text-center">
            <div className="text-4xl">{char.hiragana}</div>
            <div className="text-sm">{char.romaji}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HiraganaGrid;
