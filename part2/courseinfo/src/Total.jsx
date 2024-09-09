const Total = (props) => {
    console.log(props)
    return(
        <>
            <b>total of {props.parts.reduce((n, {exercises}) => n + exercises, 0)} exercises</b>
        </>
    )
}

export default Total