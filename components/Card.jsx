'use client'
import Image from "next/image";
import {useDispatch, useSelector} from "react-redux";
import {clickItem} from "@/redux/features/gameSlice";
import {clsx} from "clsx";

export const Card = ({imgUrl, index, name}) => {
    const { isClicked } = useSelector(state => state.game);
    const dispatch = useDispatch();

    const handleClickCard = (e) => {
        e.stopPropagation();
        dispatch(clickItem());
    };

    return (
       <div onClick={handleClickCard} className={clsx(isClicked? "is-flipped" : "","cardsContainer")}>
           <div className={"card"}>
               <div className={"card__face--front"}>
                   <Image src={"/icons/Question-mark256.png"} width={256} height={256} alt={"icon"} className={"rounded w-[5.8rem] h-[5.8rem]"}/>
               </div>
               <div className={"card__face--back"}>
                   <Image src={imgUrl} width={256} height={256} alt={imgUrl.split("/")[2]} className={"rounded w-[5.8rem] h-[5.8rem]"}/>
               </div>
           </div>
       </div>
    )
}