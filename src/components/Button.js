const Button = (props) => {
    return (
        // passing a function as a property triggered by event on click
        <button type="submit" onClick={(event) => props.handlerFunction(event)}>{props.buttonText}</button>
    )
}

export default Button;