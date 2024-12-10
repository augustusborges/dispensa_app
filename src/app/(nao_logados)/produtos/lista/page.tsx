import IProduto from '@/@types/produto'
import type { Metadata } from 'next'	
export const metadata: Metadata = {
  title: 'Dispensa :: Listagem de Produtos',
}

export default async function Page(){

	let retorno = await fetch('http://localhost:6060/v1/produtos')
	let produtos = await retorno.json() 
	return (
		<div>
			<h1>Pagina Lista Produtos</h1>
      <ul>
		{produtos.map((prod: IProduto)=>{
			<li key={prod.id_produto}>{prod.nome_produto}</li>
		})}
	  </ul>

	  </div>
  );
}
 