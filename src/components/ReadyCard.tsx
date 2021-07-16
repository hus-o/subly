import { useEffect, useState } from "react"

// I initially imported CardProps interface but wanted to have status as just "ready" so I made this instead. 
interface ReadyProps{
    name: string,
    cover: string,
    languages:string[],
    status: "ready",
    updatedAt:string
}

// this components handles media with the status "ready"
function ReadyCard({name, cover, languages, updatedAt}: ReadyProps): JSX.Element {
    const [date,setDate] = useState<string>("")

    useEffect(() => {
        const formattedDate = new Date(updatedAt).toLocaleString("en-GB")
        setDate(formattedDate)
    },[updatedAt])

    return(
        <div className="h-60 w-80 m-5 shadow-lg">
            <div className="group h-3/4 relative">
                <img className="h-full w-full object-cover object-center" src={cover} alt="cover" />
                <div className="inset-0 absolute h-full w-full group-hover:bg-black group-hover:opacity-50"></div>
                    <div className="flex absolute top-0 left-0 rounded-md m-2 opacity-0 group-hover:opacity-100 bg-white shadow-lg">
                        <div className="h-full rounded-l-md p-0.5 bg-blue-600">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 bg-blue-600" viewBox="0 0 20 20" fill="white"><path fillRule="evenodd" d="M7 2a1 1 0 011 1v1h3a1 1 0 110 2H9.578a18.87 18.87 0 01-1.724 4.78c.29.354.596.696.914 1.026a1 1 0 11-1.44 1.389c-.188-.196-.373-.396-.554-.6a19.098 19.098 0 01-3.107 3.567 1 1 0 01-1.334-1.49 17.087 17.087 0 003.13-3.733 18.992 18.992 0 01-1.487-2.494 1 1 0 111.79-.89c.234.47.489.928.764 1.372.417-.934.752-1.913.997-2.927H3a1 1 0 110-2h3V3a1 1 0 011-1zm6 6a1 1 0 01.894.553l2.991 5.982a.869.869 0 01.02.037l.99 1.98a1 1 0 11-1.79.895L15.383 16h-4.764l-.724 1.447a1 1 0 11-1.788-.894l.99-1.98.019-.038 2.99-5.982A1 1 0 0113 8zm-1.382 6h2.764L13 11.236 11.618 14z" clipRule="evenodd" /></svg>
                        </div>
                        <p className="p-0.5 mx-1">{`${languages.length} languages`}</p>
                    </div>
                    <button type="button" className="opacity-0 absolute top-1/2 left-1/2 transform -translate-y-2/4 -translate-x-2/4 w-24 h-10 border-white border-2 rounded-md text-white text-sm group-hover:opacity-100">Edit</button>
            </div>
            <div className="m-2">
                <div className="font-bold">{name}</div>
                <div className="text-gray-500 text-sm">{`Last edited ${date}`}</div>
            </div>
        </div>
    )
}

export default ReadyCard