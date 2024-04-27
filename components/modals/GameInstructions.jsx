'use client'
import {useSelector} from "react-redux";

export const GameInstructions = () => {
    const {isOpen} = useSelector(state => state.instructions);

    if (isOpen === false) return null;
    return (
        <div className={"pr-4 right-0 justify-end flex fixed top-20 z-[1000] font-caveat w-full"}>
            <div className={"GameInstructions w-1/3 p-2 rounded-lg backdrop-blur bg-[#0c0c0cAD] text-white animate-dropDown"}>
                <p className={"mt-1 font-normal text-xl text-center"}>
                    By clicking the start button, all cards will be shown for 3 seconds. Memorize the pairs and find them!
                </p>
                <p className={"font-normal text-xl text-center"}>
                    You`ll have to click on each card to see the picture behind it, then click on another card to match them. Once you found a pair, you`ll get 1 point. Find all pairs to finish the game!
                </p>
            </div>
        </div>
    )
}