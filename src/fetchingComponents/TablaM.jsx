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


