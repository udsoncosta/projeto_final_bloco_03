function Navbar () {
    return (
        <nav className="bg-red-800 p-4">
            <div className="container mx-auto flex justify-between items-center">
                <a href="/home" className="text-white text-2xl font-bold flex items-center hover:opacity-70">
                    <img 
                        src ="https://cdn-icons-png.flaticon.com/512/883/883356.png"
                        alt="Farmácia Popular"
                        className="h-10 mr-2"
                    />
                </a>
                <ul className="flex space-x-4">
                    <li>
                        <a href="/categorias" className="text-white hover:opacity-70">
                            Categorias
                        </a>
                    </li>
                    <li>
                        <a href="/cadastrarcategoria" className="text-white hover:opacity-70">
                            Cadastrar Categoria
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;