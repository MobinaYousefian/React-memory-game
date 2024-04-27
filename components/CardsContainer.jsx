import Image from "next/image";

export const CardsContainer = () => {

    return (
        <section className={"w-5/6 mx-auto bg-[#ffffffBA] backdrop-blur select-none p-4 mt-10 rounded-lg"}>
            <div className={"flex flex-col justify-center items-center py-24"}>
                <Image src={"/icons/naruto-icon.png"} width={577} height={433} alt={"icon"} className={"w-44 h-44"}/>
                <h5 className={"font-medium text-3xl mt-4"}>
                    Click the Start button above to begin
                </h5>
            </div>
        </section>
    )
}