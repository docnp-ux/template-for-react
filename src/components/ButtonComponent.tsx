type ButtonProps = {
    label: string,
    onClick: () => void
}

const ButtonComponent = (
    {label, onClick}: ButtonProps) => {
    return (
        <>
            <button
                className="w-full h-full block"
                onClick={onClick}>
                {label}
            </button>
        </>
    )
}
export default ButtonComponent