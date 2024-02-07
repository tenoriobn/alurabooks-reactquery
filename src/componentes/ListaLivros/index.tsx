import { useQuery } from "react-query";
import { ICategoria } from "../../interfaces/ICategoria";
import { obterProdutosDaCategoria } from "../../http";
import CardLivro from "../CardLivro";

interface ListaLivrosProps {
  categoria: ICategoria
}

const ListaLivros = ({ categoria }: ListaLivrosProps) => {
  const {data: produtos} = useQuery(['buscaLivrosPorCategoria', categoria], () => obterProdutosDaCategoria(categoria))
  
  console.log(produtos)
  return <>
    {produtos?.map(livro => <CardLivro livro={livro} key={livro.id} />)}
  </>
}

export default ListaLivros;