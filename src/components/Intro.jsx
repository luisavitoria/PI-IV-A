import perfil from '../assets/perfil.jpeg'


export default function Intro() {
    return (
        <div className='mt-40 text-4xl flex justify-between items-center'>
            <div>
                <p>Olá, eu sou <span className='font-bold text-5xl'>Luísa Vitória</span>, </p>
                <p className='text-purple  text-5xl font-semibold'>desenvolvedora full stack :)</p>
            </div>
            <div>
                <img src={perfil} className='rounded-full w-80' alt="perfil" />
            </div>
        </div>
    )
}