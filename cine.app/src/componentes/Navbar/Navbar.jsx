import {Link} from 'react-router-dom'
function Navbar() {
    return ( 
        <nav >
            <ul className='flex gap-3 '>
                <li><Link to ="/"> Inicial</Link></li>
                <li><Link to ="noticias"> Detalhes do treino</Link></li>
                <li><Link to ="favoritos"> Contato/Suporte </Link></li>
                <li><Link to ="login"> Login</Link></li>
                <li><Link to ="sobre"> Cadastro </Link></li>
                
            </ul>
        </nav>
     );
}

export default Navbar
