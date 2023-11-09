
function Home() {
    return (
        <>
            <div className="bg-red-600 flex justify-center">
                <div className='container grid grid-cols-2 text-white'>
                    <div className="flex flex-col gap-4 items-center justify-center py-10">
                        <h2 className='text-5xl font-bold'>
                            Seja bem vindo!
                        </h2>
                        <p className='text-xl'>
                            Farmácia popular ao seu lado!
                        </p>
                        </div>

                    <div className="flex justify-end items-center">
                        <img
                            src="https://img.freepik.com/vetores-gratis/farmacia-de-remedios-com-produtos-medicos-isolados-drogas-farmaceuticas-e-pilulas-ilustracao-vetorial_1150-65696.jpg"
                            alt="imagem da home"
                            className='w-4/5'
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home