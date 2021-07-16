import axios, { AxiosResponse } from "axios";
import { useEffect, useState } from "react";
import Card from "./components/Card"

export interface DataArray {
  id: number,
  name: string,
  cover: string,
  languages: string[],
  createdAt: string,
  status:string,
  updatedAt: string,
  errorMessage?: string
}

function App(): JSX.Element {
  const [data, setData] = useState<Array<DataArray>>([])
  
  // function to hit endpoint and return data
  const getData = async() =>{
    const response: AxiosResponse = await axios.get("https://run.mocky.io/v3/a811c0e9-adae-4554-9694-173aa23bc38b")
    console.log(response.data.media)
    setData(response.data.media) // returns just the required media field instead of whole response
  }

  useEffect(() => {
    getData()
  },[])


  return (
    <>
    <div className="flex justify-evenly">
      {data ? data.map((element:DataArray,index: number) =>{
      return (
        <Card key={index} name={element.name} cover={element.cover} languages={element.languages} status={element.status} errorMessage={element.errorMessage} updatedAt={element.updatedAt}/>
      )
      }) : 
      <h2>Loading</h2>}
      </div>
    </>
  );
}

export default App;
