

const Header = () => {
    return (
        <>
            <header className="bg-gray-900 text-amber-400 w-full fixed top-0">
                <div className="container mx-auto flex justify-between px-4 py-4 accent-blue-300">
                    <h1 className="text-center">Welcome, try my game!</h1>
                    <a href="/public" className="flex gap-4">Restart?</a>
                </div>
                <div className="container mx-auto justify-center">
                    <p className="text-center pb-2">
                        Click on a square to toggle between
                        "X", "O" and a blank space.
                        <br/>
                        (Play fair!)
                    </p>
                </div>
            </header>
        </>
    )
}
export default Header