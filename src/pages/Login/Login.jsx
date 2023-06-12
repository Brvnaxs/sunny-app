import './login.css';
import logologin from '../../assets/logoLogin.png'
import footerimage from '../../assets/footerLogin.png'

export default function Login(){
    return(
        <div className='Login'>
            <img className='logo' src={logologin} alt="" />
            <h1>Sunny Education</h1>
            <input type="text" placeholder='Email'/>
            <input type="text" placeholder='Senha'/>
            <span className='esqueceu-senha'>Esqueceu a senha?</span>
            <div className='lembrar-me'>
                <span>Lembrar-me</span>
                <input type="range" name="" id="" />
            </div>
            <button>Ir</button>
            {/* //cadastre-se = roxo */}
            <span className='link-cadastro'>NÃO TEM UMA CONTA? CADASTRE-SE JÁ</span>
            <footer>
                <img src={footerimage} alt="" />
            </footer>
        </div>
    )
}