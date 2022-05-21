import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useParams } from "react-router-dom";
import { getRecipeByid } from "../api/api";
import Loader from "../components/Loader";

function RecepieDetail() {

    const [activeTab, setActiveTab] = useState('instructions')
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

    // <div dangerouslySetInnerHTML={{__html: detail.recepie.summary}}/>
    return (
        <div>
            {detail.loading
                ? <Loader />
                : (
                    <DetailWrapper>
                        <RecepieImage>
                            <h2>{detail.recepie.title}</h2>
                            <img src={detail.recepie.image} alt={detail.recepie.title}/>
                        </RecepieImage>
                        <Info>
                            <Button 
                                onClick={()=>setActiveTab("instructions")}
                                className={activeTab === "instructions" ? "active" : ""}
                            >
                                Instructions
                            </Button>
                            <Button 
                                onClick={()=>setActiveTab("ingredients")}
                                className={activeTab === "ingredients" ? "active" : ""}
                            >
                                Ingredients
                            </Button>

                            { activeTab === "instructions" && (
                                <Instructions>
                                    <p dangerouslySetInnerHTML={{ __html: detail.recepie.summary}} />
                                    <h4>Instructions</h4>
                                    <ul>
                                        {detail.recepie.analyzedInstructions[0]?.steps.map((item)=>(
                                            <li key={item.number}>{item.step}</li>
                                        ))}
                                    </ul>
                                </Instructions>
                            )}

                            {activeTab === "ingredients" && (
                                <ul>
                                    {detail.recepie.extendedIngredients.map((item)=>(
                                        <li key={item.id}>{item.original}</li>
                                    ))}
                                </ul>
                            )}
                        </Info>
                    </DetailWrapper>
                )
            }
        </div>
    )
}

export default RecepieDetail

const DetailWrapper  = styled.div`
    display: flex;
    margin-top: 10rem;
    margin-bottom: 5rem;

    h2{
        margin-bottom: 2rem;
    }

    li{
        font-size: 1.2rem;
        line-height: 2.5rem;
    }

    ul{
        margin-top: 2rem;
    }

    .active{
        background: linear-gradient(35deg, #494949, #313131);
        color: white;
    }
`;

const Button = styled.button`
    padding: 1rem 2rem;
    color: #313131;
    background: white;
    border: 2px solid black;
    margin-right: 2rem;
    font-weight: 600;
`;

const Info = styled.div`
    margin-left: 10rem;
`;

const Instructions = styled.div`
    margin-top: 2rem;

    p{
        font-size: 1.1rem;
        margin-bottom: 1rem;
    }

    h4{
        font-size: 1.5rem;
        color: black;
    }
`;

const RecepieImage = styled.div`
    height: fit-content;
    position: sticky;
    top: 4.5rem;
`;