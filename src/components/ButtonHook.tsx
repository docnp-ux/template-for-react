import ButtonComponent from "./ButtonComponent.tsx";

type ButtonHookProps = {
    label: string;
    onClick: () => void;
}

const ButtonHook = ({ label, onClick }: ButtonHookProps) => {
    return (
        <>
            <ButtonComponent
                label={label}
                onClick={onClick}
            />
        </>
    );
};
export default ButtonHook;
