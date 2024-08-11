import {Card} from "@/components/Card";
import {CardPreview} from "@/components/CardPreview";
import {Timer} from "@/components/Timer";

export const CardsContainer = ({characters, isPreview, timer}) => {

    return (
        <div>
            {
                (!isPreview && timer > 0) && <Timer/>
            }
            <div className={"h-full w-11/12 mx-auto flex flex-wrap justify-center items-center"}>
                {
                    isPreview ?
                        <CardPreview characters={characters}/>
                        :
                        characters.map((item, index) => (
                            <Card
                                key={index}
                                imgUrl={item.imgUrl}
                                name={item.name}
                                index={index}
                            />
                        ))
                }
            </div>
        </div>
    )
}