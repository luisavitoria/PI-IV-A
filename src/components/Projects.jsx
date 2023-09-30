
import Card_Project from './Card_Project'
import netflix from '../assets/netflix.png'
import instagram from '../assets/instagram.png'
import card from '../assets/card-details.png'
import weather from '../assets/weather.png'

export default function Projects() {
    return (
        <div className='mt-20' id='projects'>
            <h3 className='text-center text-2xl font-semibold mb-10'>Projetos</h3>


            <div className='w-full flex flex-col items-center gap-8'>
                <Card_Project title={"Netflix Clone"} image={netflix} link={"https://github.com/luisavitoria/netflixclone"} />
                <Card_Project title={"Instagram Clone"} image={instagram} link={"https://github.com/luisavitoria/Interface-instagram"} />
                <Card_Project title={"Card Details"} image={card} link={"https://luisavitoria.github.io/Interactive-card-details-form/"} />
                <Card_Project title={"Previsão do Tempo"} image={weather} link={"https://github.com/luisavitoria/weather"} />

            </div>
        </div>
    )
}