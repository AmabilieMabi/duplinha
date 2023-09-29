import'./produtos.css';

function Produtos(props){
    return(
 
    <div classname='cocacola'>  
     <h2> {props.produtos} </h2>
     <h4> {props.categoria}</h4>
     <p> {props.descricao}</p>
      <p>{props.diga}</p>
</div>
 
)}

export default Produtosrodutos