'use client'
import {useDispatch, useSelector} from "react-redux";
import Image from "next/image";
import {triggerInstructions} from "@/redux/features/instructionsSlice";

export const GameInstructions = () => {
    const {isOpen} = useSelector(state => state.instructions);
    const dispatch = useDispatch();

    if (isOpen === false) return null;
    return (
        <div className={"right-0 top-0 justify-end flex fixed z-[1000] font-caveat h-[100vh] w-full bgModal"}>
            <div className={"overflow-y-auto font-bold text-xl text-center items-end flex-col flex w-3/4 xl:w-1/4 sm:w-2/5 p-5 backdrop-blur bg-[#ffffffBA] text-[#0c0c0cAD] GameInstructions animate-instructionMenu"}>
                <Image onClick={() => dispatch(triggerInstructions())} src={"/icons/close.svg"} width={20} height={20} alt={"icon"} className={"mb-3 cursor-pointer"}/>
                <div className={"mx-auto bg-[#0c0c0cAD] text-gray-50 w-2/4 rounded-lg my-2 backdrop-blur"}>
                    <h2 className={"font-bold text-xl"}>How to play :</h2>
                </div>
                <p>
                    By clicking the start button, all cards will be shown for 3 seconds. Memorize the pairs and find them!
                </p>
                <p>
                    You`ll have to click on each card to see the picture behind it, then click on another card to match them. Once you find a pair, they will disappear. Find all pairs to finish the game!
                </p>
                <hr className={"w-full border-black text-black border-t-black my-3.5 opacity-20"}/>
                <div className={"text-center pt-2"}>
                    <h3 className={"bg-gray-50 rounded-lg backdrop-blur w-2/4 mx-auto mb-1"}>Standard :</h3>
                    <p className={"mb-4"}>
                        In standard mode there is no rush! You can enjoy finding pairs to win the game.
                    </p>
                    <h3 className={"bg-gray-50 rounded-lg backdrop-blur w-2/4 mx-auto mb-1"}>Challenge Mode :</h3>
                    <p>
                        In challenge mode, in order to win you`ll have to find the pairs within the given time. If you miss the timer, you`ll lose.
                    </p>
                </div>
            </div>
        </div>
    )
}