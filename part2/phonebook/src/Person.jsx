const Person = ({name, number, onDelete}) => {
    return (
        <>
            <p>{name} {number}</p>
            <button onClick={onDelete}>delete</button>
        </>
    )
}

export default Person