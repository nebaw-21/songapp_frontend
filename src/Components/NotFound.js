import React from "react";
import Lottie from "lottie-react";
import NotFoundAnimation from "../NotFound.json";
import Styled from "@emotion/styled";

const Container = Styled.div`
display:flex;
width:100%;
height:100vh;
justify-content:center;
align-items:center;

`;

export default function NotFound(){
    return(
        <Container>
            <Lottie animationData={NotFoundAnimation}/>
        </Container>
    )
}