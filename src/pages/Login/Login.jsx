import './login.css';
import logologin from '../../assets/logoLogin.png'
import sunny from '../../assets/sunny education (2).png'
import footerimage from '../../assets/footerLogin.png'

export default function Login(){
    return(
        <div className='Login'>
            <img className='logo' src={logologin} alt="" />
            <img  className='sunny' src={sunny} alt="" />
            <input type="text" placeholder='Email'/>
            <input type="text" placeholder='Senha'/>
            <span className='esqueceu-senha'>Esqueceu a senha?</span>
            <div className='lembrar-me'>
                <span>Lembrar-me</span>
                <input type="range" name="" id="" />
            </div>
            <button>Ir</button>
            {/* //cadastre-se = roxo */}
            <span className='link-cadastro'>NÃO TEM UMA CONTA? <font color="#9A35EB">CADASTRE-SE JÁ</font></span>
            <footer>
                <img src={footerimage} alt="" />
            </footer>
        </div>
    )
}