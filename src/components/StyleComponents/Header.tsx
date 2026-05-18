

const Header = () => {
    return (
        <>
            <header className="bg-blue-300 w-full fixed">
                <div className="container mx-auto flex justify-between px-4 accent-blue-300">
                    <h1 className="text-center">Welcome, try my game!</h1>
                    <a href="/public" className="flex gap-4">Restart?</a>
                </div>
                <div className="container mx-auto justify-center accent-blue-300">
                    <br/>
                    <p className="text-center">
                        Click on a square to toggle between
                        "X", "O" and a blank space.
                        <br/>
                        <br/>
                        (Play fair!)
                    </p>
                </div>
            </header>
        </>
    )
}
export default Header