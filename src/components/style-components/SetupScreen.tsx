import ButtonHook from "../ButtonHook.tsx";

type SetupScreenProps = {
    selectedPiece: string;
    onStartGame: () => void;
}

const SetupScreen = ({ selectedPiece, onStartGame }: SetupScreenProps) => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-slate-50 font-sans">
            <h1 className="text-4xl font-extrabold text-blue-600 mb-8 tracking-wide">
                Παιχνίδι Τρίλιζας
            </h1>

            <div className="bg-white p-8 rounded-2xl shadow-xl border border-slate-100 flex flex-col items-center max-w-sm w-full">
                <p className="text-lg text-slate-600 mb-6 font-medium text-center">
                    Κάνε κλικ στο κουμπί για να επιλέξεις το σύμβολο που θα παίξει πρώτο:
                </p>

                {/* Εδώ χρησιμοποιούμε το ButtonHook σου μέσα σε ένα ωραίο πλαίσιο */}
                <div className="w-32 h-32 bg-blue-100 rounded-xl flex items-center justify-center text-6xl text-blue-600 font-bold border-2 border-blue-300 hover:scale-105 transition-transform overflow-hidden mb-8">
                    <ButtonHook />
                </div>

                <button
                    onClick={onStartGame}
                    // Διορθωμένος έλεγχος: Κλειδώνει ΜΟΝΟ αν το label είναι άδειο string ή σκέτο κενό
                    disabled={!selectedPiece || selectedPiece.trim() === ""}
                    className={`w-full py-4 px-6 rounded-xl font-bold text-lg text-white shadow-md transition-all
        ${(!selectedPiece || selectedPiece.trim() === "")
                        ? "bg-slate-300 cursor-not-allowed"
                        : "bg-blue-500 hover:bg-blue-600 active:scale-95"}`}
                >
                    Έναρξη Παιχνιδιού
                </button>

            </div>
        </div>
    );
};

export default SetupScreen;
