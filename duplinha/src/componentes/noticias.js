import './noticias.css';
function Noticias(props){

return(
    <div className='melancia'>
        <h2> {props.titulo} </h2>
        <p> {props.categoria}</p>
        <p> {props.descricao}</p>
      <p>{props.diga}</p>

  
</div>
)

}

export default Noticias