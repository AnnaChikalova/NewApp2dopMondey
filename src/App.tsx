import React, {useEffect, useState} from 'react';

import './App.css';
import {Button} from "./UniversalComponents/Button";
type DataType={
    body: string
    id: number
    title: string
    userId: number
}
function App() {
    const [data, setData]=useState<Array<DataType>>([])
    console.log(data)
    const GetMeData=()=>{
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(json => setData(json))
    }
    const CleanMeData=()=>{
        setData([])
    }

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(json => setData(json))
    }, [])
  return (
    <div className="App">
      <Button name={'CLEAN DATA'} callBack={CleanMeData}/>
        <ul>
            {data.map(el=>{
                return (
                    <li key={el.id}>
                        <span>{el.title}</span>
                        <span>{el.id}</span>

                    </li>
                )
            })}

        </ul>
    </div>
  );
}

export default App;
