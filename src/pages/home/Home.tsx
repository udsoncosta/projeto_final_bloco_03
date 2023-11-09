
function Home() {
    return (
        <>
            <div className="bg-red-600 flex justify-center">
                <div className='container grid grid-cols-2 text-white'>
                    <div className="flex flex-col gap-4 items-center justify-center py-10">
                        <h2 className='text-5xl font-bold'>
                            Farmácia Popular!
                        </h2>
                        <p className="text-x1">
                        Seu caminho para o bem-estar começa aqui: onde cuidado, saúde e confiança se encontram. Seja bem-vindo, aqui sua saúde é a nossa prioridade.
                        </p>
                        </div>

                    <div className="flex justify-end items-center">
                        <img
                            src= "https://clipart.coolclips.com/480/vectors/tf05040/CoolClips_peop0711.png"
                            alt="imagem da home"
                            className='w-/5'
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home