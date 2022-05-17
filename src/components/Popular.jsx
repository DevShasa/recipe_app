import { useEffect, useState } from "react";
import { popular } from "../api/api";

function Popular() {

    const [items, setItems] = useState([])

    useEffect(()=>{
        popular()
            .then((data)=>{
                console.log(data)
                setItems(data.recipes)
            })
            .catch((error)=>{console.log(error)})
    },[])

    return (
        <div>
            {Array.isArray(items) && items.length > 0 && (
                items.map(item=>(<p key={item.id}>{item.title}</p>))
            )}

        </div>
    )
}

export default Popular