
function Home() {
    return (
        <>
            <div className="bg-orange-300 flex justify-center">
                <div className='container grid grid-cols-2 text-white'>
                    <div className="flex flex-col gap-4 items-center justify-center py-4">
                        <h2 className='text-5xl font-bold'>
                            Seja bem vindo (a)!
                        </h2>
                        <p className='text-xl'>
                            Farmácia popular ao seu lado!
                        </p>

                        <div className="flex justify-around gap-4">
                            <div className='rounded text-white 
                                            border-white border-solid border-2 py-2 px-4'
                                >
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-center ">
                        <img
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkvAyWxA6CKE8DBMihYlRCQoZ_K6YdjmtQJA&usqp=CAU"
                            alt="imagem da home"
                            className='w-2/2'
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home