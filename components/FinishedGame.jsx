import "../styles/fireWorks.css"

export const FinishedGame = () => {

    return (
        <>
            <div className={"pyro"}>
                <div className={"before"}> </div>
                <div className={"after"}> </div>
            </div>
            <div className={"py-28 px-4 flex items-center justify-center text-center flex-col"}>
                <p className={"text-gray-800 text-3xl"}>
                    🎉 Congratulations! You Won  ^_^ 🎉
                </p>
                <p className={"text-gray-800 text-3xl mt-4 font-medium"}>
                    You can play another round by clicking on Go Home button.
                </p>
            </div>
        </>
    )
}