import { useState } from "react";
import ButtonHook from "../ButtonHook.tsx";
import { usePieceSelector } from "../../hooks/usePieceSelector.ts";

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
    const [gameStarted, setGameStarted] = useState<boolean>(false);

    // ΈΝΑ κεντρικό selector state για όλο το component
    const selector = usePieceSelector();

    const [board, setBoard] = useState<string[]>(Array(9).fill(""));
    const [currentTurn, setCurrentTurn] = useState<string>("X");

    const winner = calculateWinner(board);
    const isDraw = !winner && board.every(square => square !== "" && square !== " ");

    const handleStartGame = () => {
        // Ελέγχουμε αν έχει επιλεγεί X ή O (δηλαδή δεν είναι σκέτο κενό)
        if (selector.label !== " ") {
            setCurrentTurn(selector.label);
            setGameStarted(true);
        }
    };

    const handleSquareClick = (index: number) => {
        if (board[index] || winner) return;

        const newBoard = [...board];
        newBoard[index] = currentTurn;

        setBoard(newBoard);
        setCurrentTurn(currentTurn === "X" ? "O" : "X");
    };

    const handleReset = () => {
        setBoard(Array(9).fill(""));
        setGameStarted(false);
    };

    if (!gameStarted) {
        return (
            <div className="flex flex-col items-center justify-center min-h-screen bg-slate-50 font-sans">
                <h1 className="text-4xl font-extrabold text-blue-600 mb-8 tracking-wide">
                    Παιχνίδι Τρίλιζας
                </h1>

                <div className="bg-white p-8 rounded-2xl shadow-xl border border-slate-100 flex flex-col items-center max-w-sm w-full">
                    <p className="text-lg text-slate-600 mb-6 font-medium text-center">
                        Κάνε κλικ στο κουμπί για να επιλέξεις το σύμβολο που θα παίξει πρώτο:
                    </p>

                    {/* ΣΥΝΔΕΣΗ: Περνάμε το κεντρικό selector state στο ButtonHook */}
                    <div className="w-32 h-32 bg-blue-100 rounded-xl flex items-center justify-center text-6xl text-blue-600 font-bold border-2 border-blue-300 hover:scale-105 transition-transform overflow-hidden mb-8">
                        <ButtonHook label={selector.label} onClick={selector.triggerNextPiece} />
                    </div>

                    <button
                        onClick={handleStartGame}
                        disabled={selector.label === " "}
                        className={`w-full py-4 px-6 rounded-xl font-bold text-lg text-white shadow-md transition-all
                            ${selector.label === " "
                            ? "bg-slate-300 cursor-not-allowed"
                            : "bg-blue-500 hover:bg-blue-600 active:scale-95"}`}
                    >
                        Έναρξη Παιχνιδιού
                    </button>
                </div>
            </div>
        );
    }

    return (
        <>
            <div className="text-center pt-20 text-3xl font-extrabold text-slate-700 font-sans flex flex-col items-center gap-4">
                {winner ? (
                    <span className="text-emerald-500 animate-bounce">Νικητής: {winner}! 🎉</span>
                ) : isDraw ? (
                    <span className="text-amber-500">Ισοπαλία! 🤝</span>
                ) : (
                    <span>Σειρά του παίκτη: <span className="text-blue-500">{currentTurn}</span></span>
                )}

                <button
                    onClick={handleReset}
                    className="mt-2 bg-slate-800 hover:bg-slate-900 text-white font-bold text-sm py-2 px-4 rounded-lg shadow"
                >
                    Επιστροφή στο Μενού
                </button>
            </div>

            <main className="container mx-auto grid grid-cols-3 w-120 h-120 pt-10">
                <div className="container border-r-2 border-b-2 bg-blue-300 text-center place-content-center text-8xl aspect-square">
                    <ButtonHook label={board[0]} onClick={() => handleSquareClick(0)} />
                </div>
                <div className="container border-r-2 border-l-2 text-8xl aspect-square border-b-2 bg-blue-200 text-center place-content-center">
                    <ButtonHook label={board[1]} onClick={() => handleSquareClick(1)} />
                </div>
                <div className="container mx-auto border-l-2 text-8xl aspect-square border-b-2 bg-blue-300 text-center place-content-center">
                    <ButtonHook label={board[2]} onClick={() => handleSquareClick(2)} />
                </div>

                <div className="container mx-auto border-r-2 border-t-2 text-8xl aspect-square border-b-2 bg-blue-200 text-center place-content-center">
                    <ButtonHook label={board[3]} onClick={() => handleSquareClick(3)} />
                </div>
                <div className="container mx-auto border-r-2 border-l-2 border-b-2 text-8xl aspect-square border-t-2 bg-blue-300 text-center place-content-center">
                    <ButtonHook label={board[4]} onClick={() => handleSquareClick(4)} />
                </div>
                <div className="container mx-auto border-l-2 border-b-2 text-8xl aspect-square border-t-2 bg-blue-200 text-center place-content-center">
                    <ButtonHook label={board[5]} onClick={() => handleSquareClick(5)} />
                </div>

                <div className="container mx-auto border-r-2 border-t-2 text-8xl aspect-square bg-blue-300 text-center place-content-center">
                    <ButtonHook label={board[6]} onClick={() => handleSquareClick(6)} />
                </div>
                <div className="container mx-auto border-r-2 border-l-2 border-t-2 text-8xl aspect-square bg-blue-200 text-center place-content-center">
                    <ButtonHook label={board[7]} onClick={() => handleSquareClick(7)} />
                </div>
                <div className="container mx-auto border-l-2 border-t-2 text-8xl aspect-square bg-blue-300 text-center place-content-center">
                    <ButtonHook label={board[8]} onClick={() => handleSquareClick(8)} />
                </div>
            </main>
        </>
    );
};

export default Main;
