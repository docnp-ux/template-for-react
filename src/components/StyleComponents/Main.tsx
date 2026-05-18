import ButtonHook from "../ButtonHook.tsx";


const Main = () => {
    return (
        <>
            <main className="container mx-auto grid grid-cols-3 pt-72
            min-h-[80vh] p-36 bg-gray-200">
                <div className="container mx-auto border-r-2 text-8xl
                    border-b-2 bg-blue-300 text-center place-content-center">
                    <ButtonHook/>
                </div>
                <div className="container mx-auto border-r-2 border-l-2 text-8xl
                  border-b-2 bg-blue-200 text-center place-content-center">
                    <ButtonHook/>
                </div>
                <div className="container mx-auto border-l-2 text-8xl
                  border-b-2 bg-blue-300 text-center place-content-center">
                    <ButtonHook/>
                </div>

                <div className="container mx-auto border-r-2 border-t-2 text-8xl
                    border-b-2 bg-blue-200 text-center place-content-center">
                    <ButtonHook/>
                </div>
                 <div className="container mx-auto border-r-2 border-l-2 border-b-2 text-8xl
                    border-t-2 bg-blue-300 text-center place-content-center">
                     <ButtonHook/>
                </div>
                 <div className="container mx-auto border-l-2 border-b-2 text-8xl
                    border-t-2 bg-blue-200 text-center place-content-center">
                     <ButtonHook/>
                </div>

                 <div className="container mx-auto border-r-2 border-t-2 text-8xl
                    bg-blue-300 text-center place-content-center">
                     <ButtonHook/>
                </div>
                <div className="container mx-auto border-r-2 border-l-2 border-t-2 text-8xl
                    bg-blue-200 text-center place-content-center">
                    <ButtonHook/>
                </div>
                <div className="container mx-auto border-l-2 border-t-2 text-8xl
                    bg-blue-300 text-center place-content-center">
                    <ButtonHook/>
                </div>
            </main>
        </>
    )
}
export default Main