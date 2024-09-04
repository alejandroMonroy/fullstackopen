import Statistic from "./Statistic"

const Statistics = (props) => {
    const emptyStats = props.good === 0 && props.neutral === 0 && props.bad === 0
    const all = props.good + props.neutral + props.bad
    const average = (props.good - props.bad) / all
    const positive = (props.good / all) * 100

    const Stats = () => {
        return (
            emptyStats ? 
            <>
                <p>No feedback given</p>
            </> 
            :
            <>
                <Statistic name='good' counter={props.good}/>
                <Statistic name='neutral' counter={props.neutral}/>
                <Statistic name='bad' counter={props.bad}/>
                <Statistic name='all' counter={all}/>
                <Statistic name='average' counter={average}/>
                <Statistic name='postivie' counter={positive} units='%'/>
            </>
        )
    }

    return (
        <>
            <h2>statistics</h2>
            <Stats />
        </>
    )
}

export default Statistics