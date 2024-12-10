"use client"

async function Page(){

    function Criar(){
		return (event: React.MouseEvent) => {
			fetch("http://localhost:5000/v1/produto", {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({ 	nome_produto:"Café",
										detalhe_produto:"Pó de Cafe Baggio Caramelo",
										valor_produto:29.75 })
			} )
			event.preventDefault();
		  }
	}

	return (
		<div>
	        <button onClick={Criar()}>Criar</button>
	    </div>
    );
}
 