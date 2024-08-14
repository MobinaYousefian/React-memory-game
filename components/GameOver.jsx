"use client"
import {useDispatch, useSelector} from "react-redux";
import Image from "next/image";
import {endGame} from "@/redux/features/gameSlice";
import {GeneralBtn} from "@/components/GeneralBtn";

export const GameOver = () => {
    const {isGameOver} = useSelector(state => state.game);
    const dispatch= useDispatch();

    if (isGameOver === false) return null
    return (
        <div className={"py-12 px-2 flex items-center justify-center text-center flex-col text-gray-600"}>
            <p className={"text-red-600 font-bold text-4xl"}>Game over</p>
            <div className={"flex items-start justify-evenly pt-16"}>
                <div className={"w-3/6 text-left text-xl sm:text-3xl"}>
                    <p className={"pb-5"}>With a little practice, your chakra will increase and you can win!</p>
                    <div className={"w-max"}>
                        <GeneralBtn
                            buttonText={"Play again"}
                            description={""}
                            fn={ () => dispatch(endGame()) }
                            customCss={"text-white bg-[#282828D3]"}
                            hoverActive={"hover:bg-[#282828F2] active:bg-[#262626FF]"}
                        />
                    </div>
                </div>
                <Image src={"/icons/game-over-naruto.jpg"} width={150} height={150} alt={"icon"} className={"w-[90px] h-[90px] sm:w-[150px] sm:h-[150px] rounded-[1.75rem]"}/>
            </div>
        </div>
    )
}