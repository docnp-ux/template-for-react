

const Footer = () => {
    return (
        <>
            <footer className="bg-gray-900 min-h-[20vh]">
                <div className="container mx-auto py-8 flex justify-between text-center">
                    <div className="text-center text-amber-400 w-1/2">
                        <h1 className="text-left text-xl">How to play?</h1>
                        <br/>
                        <p className="text-left">
                            Tic-Tac-Toe is a classic, simple strategy game for two players.
                            The goal is to be the first to line up three of your symbols
                            (either \(X\) or \(O\)) in a horizontal, vertical, or diagonal
                            row on a 3x3 grid.
                        </p>
                    </div>
                    <img src="https://static.vecteezy.com/system/resources/previews/026/626/129/non_2x/tic-tac-toe-icon-symbol-design-illustration-vector.jpg" alt="Game Logo"
                    className="size-1/5"/>

                </div>
            </footer>
        </>
    )
}
export default Footer