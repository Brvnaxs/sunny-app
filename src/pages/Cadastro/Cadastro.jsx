import './cadastro.css';
import { Link, useNavigate } from "react-router-dom";
import boneco from '../../assets/boneco.png'
import criarconta from '../../assets/CRiar conta.png'
import apple from '../../assets/apple 1.png'
import gmail from '../../assets/gmail 1.png'

export default function Cadastro() {
    const navigate = useNavigate()
    return (
        <div className='Cadastro'>
            <header className='cadastro-header'>
                <img className='boneco' src={boneco} alt="" />
                <img className='criar-conta' src={criarconta} alt="" />
            </header>
            <p>Email</p>
            <input type="text" placeholder='Digite seu melhor email aqui (:'/>
            <p>senha</p>
            <input type="text" placeholder='Min. 6 caracteres.'/>
            <p>Confirmar senha</p>
            <input type="text" placeholder='Certifique-se que estão iguais.' />
            <span className='termos'>Termos e condições & privacidade do usuário</span>
            <button>Continuar</button>
            <div className='logos'>
                <img src={gmail} alt="" />
                <img src={apple} alt="" />
            </div>
            <Link to="/" className='link-login'>Possui uma conta? Faça aqui seu login</Link>
        </div>
    )
}