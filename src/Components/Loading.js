import React from "react";
import LoadingAnimation from "../Loading.json"
import Lottie from "lottie-react";
import Styled from "@emotion/styled";

const Container = Styled.div`
display:flex;
width:100%;
height:100vh;
justify-content:center;
align-items:center;
background-color:#FDF5AD;
padding:0rem;

`;
export default function Loading(){
    return(
        <Container>
            <Lottie animationData={LoadingAnimation }/>

        </Container>
    )
}