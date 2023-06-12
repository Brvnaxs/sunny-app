import './play.css'
import letras from '../../audios/audios'
import a from '../../assets/letras/a.png'
import seta from '../../assets/left-arrow.png'
export default function Play(){
    return(
        <div className='Play'>
            <section className='main'>
                <div className='inicio'>
                    <button className='voltar'>
                        <img src={seta} alt="" />
                    </button>
                    <h1>letras</h1>
                    <h2>ESCUTE A LETRA OU VOGAL, E DEPOIS REPITA COM SUA VOZ APÓS O BEEP</h2>
                </div>
                <img className='main-letra' src={a} alt="" />
            </section>
            <section className='alfabeto'>
                {
                    letras.map(letra => {
                        console.log(letra)
                        return(
                            <button key={letra.letra}>
                                <img src={letra.image} alt="" />
                            </button>
                        )
                    })
                }
            </section>
        </div>
    )
}