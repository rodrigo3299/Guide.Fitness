import {Link} from 'react-router-dom'
function Navbar2() {
    return ( 
        <nav >
            <ul className='flex gap-3 text-white flex justify-between  text-black p-9 font-bold text-xl'>
                <li><Link to ="treino"> Seu Treino</Link></li>
                <li><Link to ="cardio"> Cardio</Link></li>
                <li><Link to ="anotacoes"> Anotações do seu Dia/Treino</Link></li>
                <li><Link to ="dieta"> A sua Deita </Link></li>
                
            </ul>
        </nav>
     );
}

export default Navbar2
