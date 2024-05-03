'use client'
import {clsx} from "clsx";
import {endGame, setCharacters, startGame} from "@/redux/features/gameSlice";
import {useDispatch, useSelector} from "react-redux";

export const StartBtn = () => {
    const {isStarted, isFinished} = useSelector(state => state.game);
    const dispatch = useDispatch();

    let characters = [
        {imgUrl : "/icons/6.jpg", name : "naruto"},
        {imgUrl : "/icons/7.jpg", name : "hinata"},
        {imgUrl : "/icons/8.jpg", name: "sarada"},
        {imgUrl : "/icons/9.jpg", name: "sakura"},
        {imgUrl : "/icons/1.jpg", name: "kakashi"},
        {imgUrl : "/icons/4.jpg", name: "himavari"},
        {imgUrl : "/icons/5.jpg", name: "sasuke"},
        {imgUrl :"/icons/2.jpg", name: "kurama"},
        {imgUrl : "/icons/3.jpg", name: "boruto"},
        {imgUrl : "/icons/10.jpg", name: "kawaki"},
        {imgUrl : "/icons/11.jpg", name: "gara"},
        {imgUrl : "/icons/12.jpg", name: "jiraya"},
        {imgUrl : "/icons/13.jpg", name: "itachi"},
        {imgUrl : "/icons/14.jpg", name: "orochimaru"},
        {imgUrl : "/icons/15.jpg", name: "mitsoki"},
        {imgUrl : "/icons/16.jpg", name: "minato"},
        {imgUrl : "/icons/17.jpg", name: "mightGuy"},
        {imgUrl : "/icons/16.jpg", name: "minato"},
        {imgUrl : "/icons/17.jpg", name: "mightGuy"},
        {imgUrl : "/icons/18.jpg", name: "kushina"},
        {imgUrl : "/icons/18.jpg", name: "kushina"},
        {imgUrl : "/icons/10.jpg", name: "kawaki"},
        {imgUrl : "/icons/11.jpg", name: "gara"},
        {imgUrl : "/icons/12.jpg", name: "jiraya"},
        {imgUrl : "/icons/13.jpg", name: "itachi"},
        {imgUrl : "/icons/3.jpg", name: "boruto"},
        {imgUrl : "/icons/4.jpg", name: "himavari"},
        {imgUrl : "/icons/5.jpg", name: "sasuke"},
        {imgUrl : "/icons/14.jpg", name: "orochimaru"},
        {imgUrl : "/icons/1.jpg", name: "kakashi"},
        {imgUrl :"/icons/2.jpg", name: "kurama"},
        {imgUrl : "/icons/6.jpg", name : "naruto"},
        {imgUrl : "/icons/7.jpg", name : "hinata"},
        {imgUrl : "/icons/8.jpg", name: "sarada"},
        {imgUrl : "/icons/9.jpg", name: "sakura"},
        {imgUrl : "/icons/15.jpg", name: "mitsoki"},
    ]

    // Fisher Yates Shuffle
    function swap(array, i, j) {
        const temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    function shuffledChar (charArray) {
        const length = charArray.length;
        for (let i = length; i > 0; i--) {
            const randomIndex = Math.floor(Math.random() * i);
            const currentIndex = i - 1;
            swap(charArray, currentIndex, randomIndex)
        }
        return charArray;
    }

    const handleStartGame = () => {
        dispatch(setCharacters(shuffledChar(characters)));
        dispatch(startGame());
    };

    const handleEndGame = () => {
        dispatch(endGame());
    };

    return (
        <div className={"cursor-pointer p-3 flex items-start"}>
            <button onClick={ !isStarted ? handleStartGame : handleEndGame} className={"group active:bg-[#C2410CD3] duration-100 transition-all hover:bg-[#F3772DC6] justify-center flex rounded-lg px-6 py-2 bg-[#FC5712AD] text-white text-2xl"}>
                {!isStarted ? "Start" : "Back to home"} {!isStarted && "--"}
                <span className={clsx(!isStarted ? "group-hover:translate-x-1 font-caveat pl-0" : "group-hover:text-[1.6rem] pl-2 font-sans" ,"transition-all duration-75")}>{!isStarted ? ">" : "Ħ"}</span>
            </button>
        </div>
    )
}