import './play.css'
import { Link } from "react-router-dom";
import letras from '../../audios/audios'
import a from '../../assets/a.png'
import seta from '../../assets/left-arrow.png'
import { useRef, useState } from 'react'
import ReactHowler from 'react-howler'
import Audio from '../../audios/Alfabeto Sunny/a.mp3'
export default function Play(){
    const audioref = useRef()
    const [MainLetter, setMainLetter] = useState(a)
    const [MainAudio, setMainAudio] = useState(Audio)
    function ChooseLetter(letter, audio){
        setMainLetter(letter)
        setMainAudio(audio)
        
    }
    return(
        <div className='Play'>
            <section className='main'>
                <div className='inicio'>
                    <Link to='/home'>
                    <button className='main-button'>
                        <img src={seta} alt="" />
                    </button>
                    </Link>
                    <h1 className='main-h1'>letras</h1>
                    <h2 className='main-h2'>ESCUTE A LETRA OU VOGAL, E DEPOIS REPITA COM SUA VOZ APÓS O BEEP</h2>
                </div>
                <img className='main-letra' src={MainLetter} alt="" />
                <ReactHowler src={MainAudio}
                >
                </ReactHowler>
            </section>
            <section className='alfabeto'>
                {
                    letras.map(letra => {
                        console.log(letra)
                        return(
                            <button onClick={()=> ChooseLetter(letra.image, letra.audio)} className='alfabeto-button' key={letra.letra}>
                                <img src={letra.image} alt="" />
                            </button>
                        )
                    })
                }
            </section>
        </div>
    )
}