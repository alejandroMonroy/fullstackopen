import Statistic from "./Statistic"

const Statistics = (props) => {
    const all = props.good + props.neutral + props.bad
    const average = (props.good - props.bad) / all
    const positive = (props.good / all) * 100

    return (
        <>
            <h2>statistics</h2>
            <Statistic name='good' counter={props.good}/>
            <Statistic name='neutral' counter={props.neutral}/>
            <Statistic name='bad' counter={props.bad}/>
            <Statistic name='all' counter={all}/>
            <Statistic name='average' counter={average}/>
            <Statistic name='postivie' counter={positive} units='%'/>
        </>
    )
}

export default Statistics