function Parceiros(props) {
    return(
        <>
            <h2>Parceiros:</h2>

            <span>{props.multiplica(10, 2)}</span>

            <ul>
                <li><a href='https://www.w3schools.com/default.asp'>w3Schools</a></li>
                <li><a href='https://stackoverflow.com/'>StackOverflow</a></li>
                <li><a href='https://github.com/'>GitHub</a></li>
                <li><a href='https://exercism.org/'>Exercism</a></li>
            </ul>
        </>
    )
}

export default Parceiros