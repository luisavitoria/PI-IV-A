
import { HashLink } from 'react-router-hash-link';

export default function Header() {
    return (
        <header className='w-full'>
            <nav className=' flex gap-10 justify-end text-xl'>
                <HashLink to={"#about"}>
                    Sobre
                </HashLink>
                
                <HashLink to={"#techs"}>
                    Tecnologias
                </HashLink>
                
                <HashLink to={"#projects"}>
                    Projetos
                </HashLink>

                <HashLink to={"#contacts"}>
                    Contatos
                </HashLink>
            </nav>
        </header>
    )
}