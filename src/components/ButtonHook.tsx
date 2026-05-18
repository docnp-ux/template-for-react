import ButtonComponent from "./ButtonComponent.tsx";
import {usePieceSelector} from "../hooks/usePieceSelector.ts";

const ButtonHook = () => {

    const { label, triggerNextPiece } = usePieceSelector();

    return (
        <>
            <ButtonComponent
                label={label}
                onClick={triggerNextPiece}
            />
        </>
    )
}
export default ButtonHook;