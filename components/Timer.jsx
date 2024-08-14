"use client"
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {setIsGameOver} from "@/redux/features/gameSlice";

export const Timer = () => {
    const dispatch = useDispatch();
    const {timer} = useSelector(state => state.game);
    const [timeRemaining, setTimeRemaining] = useState(timer);


    useEffect(() => {
        const interval = setInterval(() => {
            setTimeRemaining((prev) => {
                if (prev === 0) {
                    clearInterval(interval);
                    dispatch(setIsGameOver());
                    return 0;
                } else {
                    return prev - 1
                }
            });
        }, 1000)

        return () => clearInterval(interval);
    }, [])

    const minutes = Math.floor((timeRemaining % 3600) / 60);
    const seconds = timeRemaining % 60;

    return (
        <div className={"backdrop-blur-sm bg-[#ffffffBA] text-[#0c0c0cAD] w-max px-4 py-1 mx-auto rounded-lg flex justify-center text-2xl font-bold"}>
            <span className={""}>{minutes < 10 ? "0" + minutes : minutes}</span>
            <span className={"px-1.5"}>:</span>
            <span className={""}>{seconds < 10 ? "0" + seconds : seconds}</span>
        </div>
    )
}