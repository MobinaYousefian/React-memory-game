import Image from "next/image";

export const Card = ({imgUrl}) => {

    return (
        <div className={"p-1"}>
            <Image src={imgUrl} width={256} height={256} alt={imgUrl.split("/")[2]} className={"w-[6rem] h-[6rem]"}/>
        </div>
    )
}