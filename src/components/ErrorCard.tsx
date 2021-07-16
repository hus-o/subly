interface ErrorProps{
    name: string,
    cover: string,
    status:string,
    errorMessage?:string
}
function ErrorCard({status, name, cover, errorMessage}: ErrorProps): JSX.Element {
    return(
        <div className="h-60 w-80 m-5 shadow-lg rounded-lg">
        <div className="group h-3/4 relative">
            <div className="h-full w-full bg-yellow-100"></div>
            <div className="flex flex-col items-center w-full absolute top-1/2 left-1/2 transform -translate-y-2/4 -translate-x-2/4 font-semibold">
                <div className="text-xs w-11/12 mb-2 flex">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-12 mr-1" fill="none" viewBox="0 0 24 24" stroke="red"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                <div>
                <p className="mb-1">An error occurred while processing your file. Delete file to try again, and report issue if the problem persists</p>
                <p className="text-red-600">{`Error Message: ${errorMessage}`}</p>
                </div>
                </div>
                <div className="text-sm">
                    <button type="button" className="bg-white text-black h-10 w-24 mr-0.5 rounded-md border-2 border-black">Delete file</button>
                    <button type="button" className="bg-blue-600 text-white h-10 w-24 ml-0.5 border-2 border-blue-600 rounded-md">Report issue</button>
                </div>
            </div>
        </div>
        <div className="m-2">
            <div className="font-bold">{name}</div>
            <div className="text-gray-500 text-sm">{status.toUpperCase()}</div>
        </div>
    </div>
    )
}

export default ErrorCard