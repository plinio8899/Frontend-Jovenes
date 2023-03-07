import {useEffect, useState} from 'react'
import '../Componets/Container/Container.css'
import { Loading } from '../Componets/Loading/Loanding'

export function Marcadorm(){
    const url = "https://backend-ipc-jov.onrender.com/m-points/"
    const [todos, setTodos] = useState(0)
    const [loading, setLoading] = useState(true)

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
            setLoading(false) // se actualiza el estado de loading a "false" cuando se obtienen los datos
        })
    }, [])

    if (loading) { // se muestra un mensaje de "loading" mientras se obtienen los datos
        return (
            <Loading/>
        )
    }

    return(
        <span className="colorGirl">{todos}</span>
    )
}
