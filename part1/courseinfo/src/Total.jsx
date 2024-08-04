const Total = (props) => {
    const totalExercises = (exercises) => {
        return exercises.reduce((accumulator, currentValue) => {
            return accumulator + currentValue
          },0);
    }

    return(
        <>
            <p>Number of exercises {totalExercises(props.exercises)}</p>
        </>
    )
}

export default Total