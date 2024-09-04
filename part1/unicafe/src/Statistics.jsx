import StatisticLine from "./StatisticLine"

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
            <table>
                <tbody>
                    <StatisticLine text='good' value={props.good}/>
                    <StatisticLine text='neutral' value={props.neutral}/>
                    <StatisticLine text='bad' value={props.bad}/>
                    <StatisticLine text='all' value={all}/>
                    <StatisticLine text='average' value={average}/>
                    <StatisticLine text='postivie' value={positive} units='%'/>
                </tbody>
            </table >
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