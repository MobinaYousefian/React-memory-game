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
                <div className={"mx-auto bg-[#0c0c0cAD] text-gray-50 w-2/4 rounded-lg my-4 backdrop-blur"}>
                    <h2 className={"font-bold text-xl"}>How to play :</h2>
                </div>
                <p className={""}>
                    By clicking the start button, all cards will be shown for 3 seconds. Memorize the pairs and find them!
                </p>
                <p className={""}>
                    You`ll have to click on each card to see the picture behind it, then click on another card to match them. Once you find a pair, they will disappear. Find all pairs to finish the game!
                </p>
            </div>
        </div>
    )
}