

const Header = () => {
    return (
        <>
            <header className="bg-blue-300 w-full min-h-[10vh]">
                <div className="container mx-auto flex justify-between px-4 accent-blue-300">
                    <h1 className="text-center">Welcome, try my game!</h1>
                    <a href="/public" className="flex gap-4">Restart?</a>
                </div>
            </header>
        </>
    )
}
export default Header