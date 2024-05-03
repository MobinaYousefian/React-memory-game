'use client'
import Image from "next/image";
import {useDispatch, useSelector} from "react-redux";
import {clearOpenCards, setFoundPairs, setOpenCards} from "@/redux/features/gameSlice";
import {clsx} from "clsx";
import {useEffect, useRef, useState} from "react";
import {FinishedGame} from "@/components/FinishedGame";

export const Card = ({imgUrl, index, name,characters}) => {
    const {openCards, foundPairs} = useSelector(state => state.game);
    const dispatch = useDispatch();
    const timeOut = useRef(null);
    const [isFlipped, setIsFlipped] = useState(false);
    // const [isFound, setIsFound] = useState(false);


    /* function to check pairs */
    const handleCheckPairs = () => {
        const [first, second] = openCards;
        if (characters[first].name === characters[second].name) {
            dispatch(setFoundPairs(characters[first].name));
            dispatch(clearOpenCards());
            return;
        }

        //timeOut to auto flip the card when 2 cards aren`t a pair
        timeOut.current = setTimeout(() => {
            dispatch(clearOpenCards());
        }, 500);
    }

    useEffect(() => {
        let timeout = null;
        if (openCards.length === 2) {
            timeout = setTimeout(handleCheckPairs, 500);
        }

        return () => {
            clearTimeout(timeout);
        };
    }, [openCards]);


    /* function to handle the clicks on cards */
    const onClick = () => {
        if (openCards.length === 1) {
            dispatch(setOpenCards(index));
        }else {
            clearTimeout(timeOut.current); //if two cards were already clicked, flips them back
            dispatch(setOpenCards(index))
        }
        setIsFlipped(openCards.includes(index));
    };

    const handleClickCard = () => {
        !isFlipped && onClick();
    };

    return (
        <div onClick={handleClickCard} className={clsx(isFlipped && "isFlipped", foundPairs[name] ? "isFound" : "", "cardsContainer")}>
            <div className={clsx("card")}>
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