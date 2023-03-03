import { useEffect, useState } from "react"

export function TablaH(){

    const url = "https://backend-ipc-jov.onrender.com/h-points/"
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
                <div className="tableTeam">
                {desc?.map((tabla) => (
                    <>
                    <table width="100%">
                        <tr>
                            <td style={{textAlign: "center"}} width="18%">{tabla.number}</td>
                            <td>{tabla.description}</td>
                        </tr>
                    </table>
                    </>))}
                    </div>
            </div>
        </>
    )
}