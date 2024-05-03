import "./fireWorks.css"

export const FinishedGame = () => {

    return (
        <div className={"mt-10 py-40 w-5/6 mx-auto bg-[#ffffffBA] backdrop-blur px-4 rounded-lg flex items-center justify-center flex-col"}>
            <div className="pyro">
                <div className="before"> </div>
                <div className="after"> </div>
            </div>
            <p className={"text-gray-800 text-3xl"}>
                🎉 Congratulations! You have finished the game  ^_^ 🎉
            </p>
            <p className={"text-gray-800 text-3xl mt-4 font-medium"}>
                You can play another round by clicking on Back to home button.
            </p>
        </div>
    )
}