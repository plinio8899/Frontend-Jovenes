import { useState, useEffect } from "react"
import { Loading } from "../Componets/Loading/Loanding"

export function TablaM(){
    const url = "https://backend-ipc-jov.onrender.com/m-points/"
    const [desc, setDesc] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() =>{
        fetch(url)
        .then((res) => res.json())
        .then((data) => {
            setDesc(data.data.reverse())
            setLoading(false)
        })
    }, [])

    if (loading) {
        return <Loading/>
    }

    return(
        <>
            <div className="tableTeam tableTeamPadd">
                {desc?.map((tabla) => (
                    <>
                    <table  cellPadding="2" width="100%">
                    <tbody>
                        <tr>
                            <td style={{textAlign: "center"}} width="18%">{tabla.number}</td>
                            <td  rowSpan="2" colSpan="2" cellPadding="2">{tabla.description}</td>
                        </tr>
                        </tbody>
                    </table>
                    </>))}
                </div>
            </>
        )
}
