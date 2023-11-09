import Categoria from "./Categoria";

export default interface Produto {
  id : number;
  nome : string;
  descricao : string;
  laboratorio : string;
  preco : number;
  foto : string;
  categoria : Categoria | null;
} 