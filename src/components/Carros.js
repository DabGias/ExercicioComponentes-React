import carro from '../img/carro.webp'

function Carros(props) {
    return(
    <>
        <img src={carro} alt="Foto de carro"/>

        <ul>
            <li>{props.carros[0]}</li>
            <li>{props.carros[1]}</li>
            <li>{props.carros[2]}</li>
            <li>{props.carros[3]}</li>
            <li>{props.carros[4]}</li>
        </ul>
    </>
    )
}

export default Carros