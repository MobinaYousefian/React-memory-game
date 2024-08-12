"use client"
import "../styles/previewAnimation.css"
import Image from "next/image";
import {useEffect} from "react";
import {useDispatch} from "react-redux";
import {setIsPreview} from "@/redux/features/gameSlice";

export const CardPreview = ({characters}) => {
    const dispatch = useDispatch();

    useEffect(() => {
        let timeout = null;
        timeout = setTimeout(() => {
            dispatch(setIsPreview(false));
        }, 3000)

        return () => {clearTimeout(timeout)}
    }, [])

    return (
        <>
            <div className={"z-50 font-bold text-5xl absolute -top-10 w-full text-center"}>
                <span className={"countdown-pulse3 fixed left-[49%]"}>3</span>
                <span className={"countdown-pulse2 fixed left-[49%]"}>2</span>
                <span className={"countdown-pulse1 fixed left-[49%]"}>1</span>
            </div>
            {
                characters.map((item, i) => (
                    <div className={"w-[11%] p-1.5"} key={i}>
                        <Image src={item.imgUrl} width={256} height={256} alt={item.imgUrl.split("/")[2]} className={"rounded w-[5.8rem] h-[5.8rem]"}/>
                    </div>
                ))
            }
        </>
    )
}