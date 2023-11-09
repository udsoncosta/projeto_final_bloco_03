import { LinkedinLogo, GithubLogo } from '@phosphor-icons/react'

function Footer() {

    const data = new Date().getFullYear();

    return (
        <>
            <div className="flex justify-center bg-red-800 text-white">
                <div className="container flex flex-col items-center py-4">
                    <p className='text-xl font-bold'>
                        Farmácia Popular | Copyright: {data}
                    </p>
                    <p className='text-lg'>Acesse nossas redes sociais:</p>
                    <div className='flex gap-2'>
                        <a href="https://linkedin.com/in/udsoncosta" className='hover:opacity-70'><LinkedinLogo size={30} weight='bold' /></a>
                        <a href="https://github.com/udsoncosta" className='hover:opacity-70'><GithubLogo size={30} weight='bold' /></a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer