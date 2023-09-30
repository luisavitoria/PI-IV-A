import { GithubLogo, LinkedinLogo, EnvelopeSimple } from '@phosphor-icons/react'


export default function Contacts() {
    return (
        <div className='mt-20' id='contacts'>
            <h3 className='text-center text-2xl font-semibold mb-10'>Contatos</h3>

            <div className='flex flex-col gap-2  items-center justify-center'>

                <div className='flex gap-2 justify-center'>
                    <a target='blank' href="https://github.com/luisavitoria">
                        <GithubLogo size={40} className='text-purple' />
                    </a>

                    <a target='blank' href="https://linkedin.com/in/luisa-vitoria-anjos/">
                        <LinkedinLogo size={40} className='text-purple' />
                    </a>

                    <a href="luisavitoria.santos@gmail.com">
                        <EnvelopeSimple size={40} className='text-purple' />
                    </a>
                </div>

                <span className=''>(82) 99950-4404</span>
                <span className=''> luisavitoria.santos@gmail.com</span>


            </div>
        </div>
    )
}