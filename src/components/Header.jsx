
import { HashLink } from 'react-router-hash-link';

export default function Header() {
    return (
        <header className='w-full'>
            <nav className=' flex gap-10 justify-end text-xl'>
                <HashLink to={"#about"} className='hover:text-purple'>
                    Sobre
                </HashLink>
                
                <HashLink to={"#techs"} className='hover:text-purple'>
                    Tecnologias
                </HashLink>
                
                <HashLink to={"#projects"} className='hover:text-purple'>
                    Projetos
                </HashLink>

                <HashLink to={"#contacts"} className='hover:text-purple'>
                    Contatos
                </HashLink>
            </nav>
        </header>
    )
}