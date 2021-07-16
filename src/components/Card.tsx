import ErrorCard from "./ErrorCard"
import ReadyCard from "./ReadyCard"
import TranscribingCard from "./TrancribingCard"

export interface CardProps{
    name: string,
    cover: string,
    languages:string[],
    status: "ready" | "transcribing" | "error",
    errorMessage?:string,
    updatedAt:string
}

// This component's only job is to conditionally render the required card components
function Card({status, name, cover, languages, errorMessage, updatedAt}: CardProps): JSX.Element {
    if (status === "ready"){
        return <ReadyCard name={name} cover={cover} languages={languages} status={status} updatedAt={updatedAt}/>
    }
    else if (status === "transcribing"){
        return <TranscribingCard name={name} cover={cover} status={status} />
    }
    else{
        return <ErrorCard name={name} cover={cover} errorMessage={errorMessage} status={status}/>
        // my idea here was to have this as an elseif statement (or switch case) and on the defaulting statement have a generic error card if the status didn't match anything
        // but I opted for this as I didn't want to overcomplicate things.
    }
}

export default Card