import { useState, useEffect } from 'react'
import KatakanaDisplay from '../KatakanaDisplay'
import InputForm from '../InputForm'
import ErrorMessage from '../ErrorMessage'

const KatakanaQuiz = () => {
        const katakana = [
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
            { romaji: 'n', katakana: 'ン' }
        ]
    
        const [input, setInput] = useState('')
        const [current, setCurrent] = useState(0)
        
        const [streak, setStreak] = useState(0)
        const [maxStreak, setMaxStreak] = useState(0)
    
        const [error, setError] = useState(false)
    
        const setRandomKatakana = () => {
            const randomIndex = Math.floor(Math.random() * katakana.length)
            setCurrent(randomIndex)
        }
    
        const handleChange = (e) => {
            setInput(e.target.value)
        }
    
        const handleSubmit = (e) => {
            e.preventDefault()
    
            if (input.toLowerCase() === katakana[current].romaji) {
                setStreak(streak + 1)
                setMaxStreak(streak + 1 > maxStreak ? streak + 1 : maxStreak)
                setError(false)
    
                localStorage.setItem('streak', streak + 1)
                localStorage.setItem('maxStreak', streak + 1 > maxStreak ? streak + 1 : maxStreak)
            } else {
                const h = katakana[current].katakana
                const r = katakana[current].romaji
                setError(`Wrong! The correct answer for ${h} is ${r}`)
                setStreak(0)
                localStorage.setItem('streak', 0)
            }
            
            setInput('')
            setRandomKatakana()
        }
    
        useEffect(() => {
            setRandomKatakana()
            setStreak(parseInt(localStorage.getItem('streak')) || 0)
            setMaxStreak(parseInt(localStorage.getItem('maxStreak')) || 0)
        }, [])
  return (
    <>
      <header className="p-6 mb-8">
        <h1 className="text-2xl font-bold uppercase">Katakana Quiz</h1>
        <div>
          <p>{streak} / {maxStreak}</p>
        </div>
      </header>
      <KatakanaDisplay character={katakana[current].katakana} />
      <InputForm input={input} handleChange={handleChange} handleSubmit={handleSubmit} />
      {error && <ErrorMessage message={error} />}
    </>
  )
}

export default KatakanaQuiz;