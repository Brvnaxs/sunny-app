import './login.css';
import { Link, useNavigate } from "react-router-dom";
import logologin from '../../assets/logoLogin.png'
import sunny from '../../assets/sunny education (2).png'
import footerimage from '../../assets/footerLogin.png'

export default function Login(){
    const navigate = useNavigate()
    function test(){
        navigate('/home')
    }
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
            <button onClick={test}>IR</button>
            {/* //cadastre-se = roxo */}
            <Link to="/cadastro" className='link-cadastro'>NÃO TEM UMA CONTA? <font color="#9A35EB">CADASTRE-SE JÁ</font></Link>
            <footer>
                <img src={footerimage} alt="" />
            </footer>
        </div>
    )
}