import "../styles/fireWorks.css"

export const FinishedGame = () => {

    return (
        <>
            <div className={"pyro"}>
                <div className={"before"}> </div>
                <div className={"after"}> </div>
            </div>
            <div className={"py-40 px-4 flex items-center justify-center flex-col"}>
                <p className={"text-gray-800 text-3xl"}>
                    🎉 Congratulations! You have finished the game  ^_^ 🎉
                </p>
                <p className={"text-gray-800 text-3xl mt-4 font-medium"}>
                    You can play another round by clicking on Back to home button.
                </p>
            </div>
        </>
    )
}