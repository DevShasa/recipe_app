import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useParams } from "react-router-dom";
import { getRecipeByid } from "../api/api";
import Loader from "../components/Loader";

function RecepieDetail() {

    const [detail, setDetail] = useState({
        loading: true,
        recepie: {}
    })

    const { id } = useParams()

    useEffect(()=>{
        getRecipeByid(id).then((result)=>{
            setDetail({
                loading:false,
                recepie: result
            });
        })
    },[id])

    return (
        <div>
            {detail.loading
                ? <Loader />
                : <div dangerouslySetInnerHTML={{__html: detail.recepie.summary}}/>
            }
        </div>
    )
}

export default RecepieDetail