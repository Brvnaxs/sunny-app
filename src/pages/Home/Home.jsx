import './home.css';
import abc from '../../assets/abc.png'
import numeros from '../../assets/numeros.png'
import formas from '../../assets/formas.png'
import desempenho from '../../assets/desempenho.png'
import foguete from '../../assets/foguete.png'
import config from '../../assets/config.png'
export default function Home(){
    return(
        <div className='Home'>
            <header>
                <img src={abc} alt="" />
                <p>Olá, user@! Seja bem-vindo</p>
            </header>
            <div className='menu'>
                <div className='card'>
                    <img src={abc} alt="" />
                    <h2>Vogais e letras</h2>
                    <span>(bem vindo as vogais e letras)</span>
                </div>
                <div className='card'>
                    <img src={numeros} alt="" />
                    <h2>Números</h2>
                    <span>(descubra o mundo dos números)</span>
                </div>
                <div className='card'>
                    <img src={formas} alt="" />
                    <h2>formas</h2>
                    <span>(figuras geometricas)</span>
                </div>
                <div className='card'>
                    <img src={foguete} alt="" />
                    <h2>Mundo Sunny</h2>
                    <span>(viaje aos planetas)</span>
                </div>
                <div className='card'>
                    <img src={desempenho} alt="" />
                    <h2>desempenho</h2>
                    <span>(anÁLISE DE APRENDIZAGEM)</span>
                </div>
                <div className='card'>
                    <img src={config} alt="" />
                    <h2>configurações</h2>
                    <span>(ajuSTES E DEFINIÇÕES)</span>
                </div>
            </div>
        </div>
    )
}