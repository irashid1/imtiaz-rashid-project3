const Button = (props) => {
    console.log(props);
    return (
        <button type="submit" onClick={(event) => props.handlerFunction(event)}>{props.buttonText}</button>
    )
}

export default Button;