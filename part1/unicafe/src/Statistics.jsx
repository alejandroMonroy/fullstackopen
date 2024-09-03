import Statistic from "./Statistic"

const Statistics = (props) => {
    return (
        <>
            <h2>statistics</h2>
            <Statistic name='good' counter={props.good}/>
            <Statistic name='neutral' counter={props.neutral}/>
            <Statistic name='bad' counter={props.bad}/>
        </>
    )
}

export default Statistics