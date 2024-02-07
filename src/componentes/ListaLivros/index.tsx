import { ICategoria } from "../../interfaces/ICategoria";

interface ListaLivrosProps {
  categoria: ICategoria
}

const ListaLivros = ({ categoria }: ListaLivrosProps) => {
  console.log(categoria)
  return (
    <></>
  )
}

export default ListaLivros;