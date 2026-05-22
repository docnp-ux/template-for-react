import ButtonHook from "../ButtonHook.tsx";


const Main = () => {
    return (
        <>
            <main className="container mx-auto grid grid-cols-3 w-120 h-120 pt-44">
                <div className="container border-r-2 border-b-2 bg-blue-300
                    text-center place-content-center text-8xl aspect-square">
                    <ButtonHook/>
                </div>
                <div className="container border-r-2 border-l-2 text-8xl aspect-square
                    border-b-2 bg-blue-200 text-center place-content-center">
                    <ButtonHook/>
                </div>
                <div className="container mx-auto border-l-2 text-8xl aspect-square
                  border-b-2 bg-blue-300 text-center place-content-center">
                    <ButtonHook/>
                </div>

                <div className="container mx-auto border-r-2 border-t-2 text-8xl aspect-square
                    border-b-2 bg-blue-200 text-center place-content-center">
                    <ButtonHook/>
                </div>
                 <div className="container mx-auto border-r-2 border-l-2 border-b-2 text-8xl aspect-square
                    border-t-2 bg-blue-300 text-center place-content-center">
                     <ButtonHook/>
                </div>
                 <div className="container mx-auto border-l-2 border-b-2 text-8xl aspect-square
                    border-t-2 bg-blue-200 text-center place-content-center">
                     <ButtonHook/>
                </div>

                 <div className="container mx-auto border-r-2 border-t-2 text-8xl aspect-square
                    bg-blue-300 text-center place-content-center">
                     <ButtonHook/>
                </div>
                <div className="container mx-auto border-r-2 border-l-2 border-t-2 text-8xl aspect-square
                    bg-blue-200 text-center place-content-center">
                    <ButtonHook/>
                </div>
                <div className="container mx-auto border-l-2 border-t-2 text-8xl aspect-square
                    bg-blue-300 text-center place-content-center">
                    <ButtonHook/>
                </div>
            </main>
        </>
    )
}
export default Main