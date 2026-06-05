import ButtonComponent from "./ButtonComponent.tsx";
import { usePieceSelector } from "../hooks/usePieceSelector.ts";

type ButtonHookProps = {
    label?: string;
    onClick?: () => void;
}

const ButtonHook = ({ label, onClick }: ButtonHookProps) => {
    const localSelector = usePieceSelector();

    // Αν έρθουν props από το Main, παίρνει αυτά. Αλλιώς τρέχει το τοπικό hook.
    const displayLabel = label !== undefined ? label : localSelector.label;
    const displayOnClick = onClick !== undefined ? onClick : localSelector.triggerNextPiece;

    return (
        <ButtonComponent
            label={displayLabel}
            onClick={displayOnClick}
        />
    );
};

export default ButtonHook;
