import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useParams } from "react-router-dom";

function RecepieDetail() {

    const { id } = useParams()

    return (
        <div>
            Receppie number { id }
        </div>
    )
}

export default RecepieDetail