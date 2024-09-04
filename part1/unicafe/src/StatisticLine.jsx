const StatisticLine = (props) => {
    return (
        <>
            <p>{props.text} {props.value} {props.units}</p>
        </>
    )
}

export default StatisticLine