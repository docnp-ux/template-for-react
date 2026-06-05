import { useState } from "react";
import ButtonHook from "../ButtonHook.tsx";

// Βοηθητική συνάρτηση για έλεγχο νικητή
const calculateWinner = (squares: string[]) => {
    const lines = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // Οριζόντιες
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // Κάθετες
        [0, 4, 8], [2, 4, 6]             // Διαγώνιες
    ];
    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a];
        }
    }
    return null;
};

const Main = () => {
    // Κρατάμε το state των 9 τετραγώνων εδώ
    const [board, setBoard] = useState<string[]>(Array(9).fill(""));
    const [xIsNext, setXIsNext] = useState<boolean>(true);

    const winner = calculateWinner(board);

    // Η συνάρτηση που θα τρέχει όταν πατιέται οποιοδήποτε τετράγωνο
    const handleSquareClick = (index: number) => {
        // Αν έχει ήδη τιμή ή αν υπάρχει νικητής, μην κάνεις τίποτα
        if (board[index] || winner) return;

        const newBoard = [...board];
        newBoard[index] = xIsNext ? "X" : "O";

        setBoard(newBoard);
        setXIsNext(!xIsNext);
    };

    return (
        <>
            {/* Μήνυμα Νικητή / Σειράς */}
            <div className="text-center pt-10 text-3xl font-bold text-gray-700">
                {winner ? `Νικητής: ${winner}! 🎉` : `Σειρά του: ${xIsNext ? "X" : "O"}`}
            </div>

            <main className="container mx-auto grid grid-cols-3 w-120 h-120 pt-10">
                {/* 1ο Τετράγωνο */}
                <div className="container border-r-2 border-b-2 bg-blue-300 text-center place-content-center text-8xl aspect-square">
                    <ButtonHook label={board[0]} onClick={() => handleSquareClick(0)} />
                </div>
                {/* 2ο Τετράγωνο */}
                <div className="container border-r-2 border-l-2 text-8xl aspect-square border-b-2 bg-blue-200 text-center place-content-center">
                    <ButtonHook label={board[1]} onClick={() => handleSquareClick(1)} />
                </div>
                {/* 3ο Τετράγωνο */}
                <div className="container mx-auto border-l-2 text-8xl aspect-square border-b-2 bg-blue-300 text-center place-content-center">
                    <ButtonHook label={board[2]} onClick={() => handleSquareClick(2)} />
                </div>

                {/* 4ο Τετράγωνο */}
                <div className="container mx-auto border-r-2 border-t-2 text-8xl aspect-square border-b-2 bg-blue-200 text-center place-content-center">
                    <ButtonHook label={board[3]} onClick={() => handleSquareClick(3)} />
                </div>
                {/* 5ο Τετράγωνο */}
                <div className="container mx-auto border-r-2 border-l-2 border-b-2 text-8xl aspect-square border-t-2 bg-blue-300 text-center place-content-center">
                    <ButtonHook label={board[4]} onClick={() => handleSquareClick(4)} />
                </div>
                {/* 6ο Τετράγωνο */}
                <div className="container mx-auto border-l-2 border-b-2 text-8xl aspect-square border-t-2 bg-blue-200 text-center place-content-center">
                    <ButtonHook label={board[5]} onClick={() => handleSquareClick(5)} />
                </div>

                {/* 7ο Τετράγωνο */}
                <div className="container mx-auto border-r-2 border-t-2 text-8xl aspect-square bg-blue-300 text-center place-content-center">
                    <ButtonHook label={board[6]} onClick={() => handleSquareClick(6)} />
                </div>
                {/* 8ο Τετράγωνο */}
                <div className="container mx-auto border-r-2 border-l-2 border-t-2 text-8xl aspect-square bg-blue-200 text-center place-content-center">
                    <ButtonHook label={board[7]} onClick={() => handleSquareClick(7)} />
                </div>
                {/* 9ο Τετράγωνο */}
                <div className="container mx-auto border-l-2 border-t-2 text-8xl aspect-square bg-blue-300 text-center place-content-center">
                    <ButtonHook label={board[8]} onClick={() => handleSquareClick(8)} />
                </div>
            </main>
        </>
    );
};
export default Main;
