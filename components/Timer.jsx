"use client"
import {useSelector} from "react-redux";

export const Timer = () => {
    const {timer} = useSelector(state => state.game);

    return (
        <div className={"w-max px-3 mx-auto backdrop-blur-sm bg-[#0c0c0cAD] text-[#ffffffBA] rounded-lg flex justify-center text-xl font-bold"}>
            {timer}
        </div>
    )
}