export function CounterControls({plus, minus}) {
    return (
        <>
        <div>
            <button onClick={plus}>+</button>
            <button onClick={minus}>-</button>
        </div>
        </>
    )
}