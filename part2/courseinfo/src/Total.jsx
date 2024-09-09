const Total = (props) => {
    return(
        <>
            <b>total of {props.parts.reduce((totalExercises, {exercises}) => totalExercises + exercises, 0)} exercises</b>
        </>
    )
}

export default Total