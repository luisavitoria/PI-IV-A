import Card_Tech from './Card_Tech'
import { SiTailwindcss, SiReactquery, SiMysql, SiDocker } from 'react-icons/si'
import { BiLogoReact, BiLogoNodejs, BiLogoMongodb } from 'react-icons/bi'
import { FileHtml, FileCss, FileJs, Atom, FileTs } from '@phosphor-icons/react'

export default function Techs() {

    return (
        <div className='mt-20' id='techs'>
            <h3 className='text-center text-2xl font-semibold mb-10'>Tecnologias e ferramentas</h3>

            <div className='flex w-full  justify-between flex-wrap'>
                <Card_Tech title={"HTML"} icon={<FileHtml size={32} />} />
                <Card_Tech title={"CSS"} icon={<FileCss size={32} />} />
                <Card_Tech title={"JavaScript"} icon={<FileJs size={32} />} />
                <Card_Tech title={"React JS"} icon={<BiLogoReact size={32} />} />
                <Card_Tech title={"TypeScript"} icon={<FileTs size={32} />} />
                <Card_Tech title={"Tailwind CSS"} icon={<SiTailwindcss size={32} />} />
                <Card_Tech title={"React Query"} icon={<SiReactquery size={32} />} />
                <Card_Tech title={"Node JS"} icon={<BiLogoNodejs size={32} />} />
                <Card_Tech title={"MongoDB"} icon={<BiLogoMongodb size={32} />} />
                <Card_Tech title={"MySQL"} icon={<SiMysql size={32} />} />
                <Card_Tech title={"Docker"} icon={<SiDocker size={32} />} />

            </div>
        </div>
    )
}