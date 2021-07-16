import { CardProps } from "./Card"

function TranscribingCard({name, cover, status}: CardProps): JSX.Element {
    return(
        <div className="h-60 w-80 m-5 shadow-lg rounded-lg">
            <div className="group h-3/4 relative">
                <img className="h-full w-full object-cover object-center" src={cover} alt="cover" />
                <div className="inset-0 absolute h-full w-full group-hover:bg-black group-hover:opacity-50"></div>
            </div>
            <div className="m-2">
                <div className="font-bold">{name}</div>
                <div className="text-gray-500 text-sm">{status.toUpperCase()}</div>
            </div>
        </div>
    )
}

export default TranscribingCard