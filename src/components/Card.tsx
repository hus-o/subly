import ErrorCard from "./ErrorCard"
import ReadyCard from "./ReadyCard"
import TranscribingCard from "./TrancribingCard"

export interface CardProps{
    name: string,
    cover: string,
    languages:string[],
    status:string,
    errorMessage?:string
}

function Card({status, name, cover, languages, errorMessage}: CardProps): JSX.Element {
    if (status === "ready"){
        return <ReadyCard name={name} cover={cover} languages={languages} status={status}/>
    }
    else if (status === "transcribing"){
        return <TranscribingCard name={name} cover={cover} languages={languages} status={status} />
    }
    else{
        return <ErrorCard />
    }
}

export default Card