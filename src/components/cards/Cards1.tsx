
import { useEffect, useState } from 'react';
import ProductCard from './Cards';
import { Stack } from '@mui/material';

// Definição da estrutura do componente usando `export default function`

interface Filme {
  title: string;
  subtitle: string;
  description: string;
  price: number;
  type: number;
  sinopse: string;
}


const filmes: Filme[] = [
  {type:0, title: 'Filme 1', subtitle: 'Ação', description: 'Ver Sinopse', price: 19.99, sinopse:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure, inventore. Amet mollitia odit magnam at aliquid quisquam. Ex tempore unde maiores laborum sapiente enim temporibus iure, cupiditate quam tempora omnis.' },
  {type:1, title: 'Filme 2', subtitle: 'Comédia', description: 'Ver Sinopse', price: 19.99,  sinopse:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure, inventore. Amet mollitia odit magnam at aliquid quisquam. Ex tempore unde maiores laborum sapiente enim temporibus iure, cupiditate quam tempora omnis.' },
  {type:2, title: 'Filme 3', subtitle: 'Drama', description: 'Ver Sinopse', price: 19.99,  sinopse:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure, inventore. Amet mollitia odit magnam at aliquid quisquam. Ex tempore unde maiores laborum sapiente enim temporibus iure, cupiditate quam tempora omnis.' },
  // Adicione mais filmes conforme necessário
];



export default function Cards1({
  menuType
}: {
  menuType: number;

}) {   


   const [filmesFiltrados, setFilmesFiltrados]= useState<Filme[]>([])

   const filterItens = () =>{
    const result = filmes.filter(x => x.type == menuType)

    setFilmesFiltrados(result)
   }
   useEffect(() => {
    filterItens()
   }, [])

  return (
    <>
      {filmesFiltrados.map((filme, index) => (

        <Stack>
          <ProductCard  key={index}
            title={filme.title}
            subtitle={filme.subtitle}
            description={filme.description}
            price={filme.price}
            sinopse={filme.sinopse}
          />
        </Stack>
      ))}
    </>

  );
}
