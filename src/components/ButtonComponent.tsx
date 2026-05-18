type ButtonProps = {
    label: string,
    onClick: () => void
}

const ButtonComponent = (
    {label, onClick}: ButtonProps) => {
    return (
        <>
            <button onClick={onClick}>
                {label} + x
            </button>
        </>
    )
}
export default ButtonComponent