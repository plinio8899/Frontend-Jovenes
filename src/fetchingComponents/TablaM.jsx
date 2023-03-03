import { useState, useEffect } from "react"

export function TablaM(){
    const url = "https://backend-ipc-jov.onrender.com/m-points/"
    const [desc, setDesc] = useState(null)
    
    
    useEffect(() =>{
        fetch(url)
        .then((res) => res.json())
        .then((data) => {
                setDesc(data.data.reverse())
        })
    }, [])
    
    return(
        <>
            <div>
                {desc?.map((tabla) => (
                    <>
                    <table align="center" cellspacing="2" cellpadding="2" border="1" width="100%">
                        <tr align="center">
                            <td align="center" width="20%">{tabla.number}</td>
                            <td align="center" rowspan="2" colspan="2" cellpadding="2">{tabla.description}</td>
                        </tr>
                    </table>
                    </>))}
                </div>
            </>
            
        )
}