interface TranscribingProps{
    name: string,
    cover: string,
    status: "transcribing",
}

// This component renders media with status "transcribing". I initially imported CardProps as the type but opted for a new type rather than setting some properties as optional in CardProp.
function TranscribingCard({name, cover, status}: TranscribingProps): JSX.Element {
    return(
        <div className="h-60 w-80 m-5 shadow-lg">
            <div className="group h-3/4 relative">
                <img className="h-full w-full object-cover object-center opacity-50" src={cover} alt="cover" />
                <div className="flex flex-col items-center w-full absolute top-1/2 left-1/2 transform -translate-y-2/4 -translate-x-2/4 font-semibold">
                    <p>Transcribing subtitles</p>
                    <div className="w-11/12 h-1 mt-10 rounded-md bg-blue-800 animate-pulse shadow-lg">
                </div>
                </div>
            </div>
            <div className="m-2">
                <div className="font-bold">{name}</div>
                <div className="text-gray-500 text-sm capitalize">{status}</div>
            </div>
        </div>
    )
}

export default TranscribingCard