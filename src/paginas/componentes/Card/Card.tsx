import './Card.css';
import homeHello from '../../../assets/hello.svg'

//Define o tipo e as info. que o Card deve receber(Props)
interface cardProps{
    title: string;
    description: string;
}

function Card(props: cardProps) {
    return(
        <div className="card">
        <h1>{props.title}</h1>
        <h2>{props.description}</h2>
        <img src={homeHello} className='img' alt="Imagem tela inicial" />  
        </div>
    )
}

export default Card