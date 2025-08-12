export function CounterControls({plus, minus, reset}) {
    return (
        <>
        <div>
            <button onClick={plus}>+</button>
            <button onClick={minus}>-</button>
            <button onClick={reset}>Reset</button>
        </div>
        </>
    )
}