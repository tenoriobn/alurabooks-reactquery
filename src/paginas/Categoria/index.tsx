import { useEffect, useState } from "react";
import TituloPrincipal from "../../componentes/TituloPrincipal";
import { ICategoria } from "../../interfaces/ICategoria";
import http from "../../http";
import { useParams } from "react-router-dom";
import Loader from "../../componentes/Loader";

const Categoria = () => {
  const [categoria, setCategoria] = useState<ICategoria>();
  const [estaCarregando, setEstaCarregando] = useState(true);

  const params = useParams();

  useEffect(() => {
    setEstaCarregando(true);
    http.get<ICategoria[]>('categorias', {
      params: {
        slug: params.slug
      }
    }).then(resposta => {
      setEstaCarregando(false);
      setCategoria(resposta.data[0])
    })
  }, [params.slug])

  if (estaCarregando) {
    return <Loader />
  }

  return (
    <section>
      <TituloPrincipal texto={categoria?.nome ?? ''} />
    </section>
  );
}

export default Categoria;