const Feedback = (props) => {
    return(
        <>
            <button onClick={props.handleGood}>good</button>
            <button onClick={props.handleNeutral}>neutral</button>
            <button onClick={props.handleBad}>bad</button>
        </>
    )
}

export default Feedback