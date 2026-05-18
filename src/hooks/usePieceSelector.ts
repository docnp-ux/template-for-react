import {useState} from "react";


export const usePieceSelector = () => {

    const states = [" ", "X", "O"];

    const [currentIndex, setCurrentIndex] = useState(0);

    const triggerNextPiece = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % states.length);
    }

    return {
        label: states[currentIndex],
        triggerNextPiece
    }
}