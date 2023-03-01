import {useEffect, useState} from 'react'
import '../Componets/Container/Container.css'

export function Marcador(){
    const url = "https://backend-ipc-jov.onrender.com/h-points/"
    const [todos, setTodos] = useState(0)

    useEffect(() =>{
        let mas = 0
        fetch(url)
        .then((res) => res.json())
        .then((data) => {
            for(let x=0; x<data.data.length;x++){
               let xl = data.data[x].number
               mas = mas + xl
               
            }         
            let variable = Math.floor(mas)
            setTodos(variable)
        })
    }, [])
    
    return(
        <span>{todos}</span>
    )
}