import ButtonComponent from "./ButtonComponent.tsx";
import {useCounter} from "../hooks/useCounter.ts";

const ButtonHook = () => {

    const { label, triggerNextPiece } = useCounter();

    return (
        <>
            <ButtonComponent
                label={label}
                onClick={triggerNextPiece}
            />
        </>
    )
}
export  default ButtonHook