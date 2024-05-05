import React from "react";
import styled from "@emotion/styled";
import NavBar from "../Components/NavBar"
import Footer from "../Components/Footer";
import { FaHeadphones } from "react-icons/fa";

export default function AdminPanel(){
    return(
        <>
<NavBar />

<Container>

<Card href="/displaySong">
    <Icon>
<FaHeadphones />
    </Icon>
<Title>Song Managment</Title>
</Card>

</Container>

<Footer/>
        </>
    )
}

const Container = styled.div`
display:flex;
margin-top:5rem;
margin-bottom:3rem;
justify-content:center;
align-items:center;
width:100%;
height:100%;
`;
const Card = styled.a`
width:20rem;
text-decoration: none;
margin-top:3rem;
height:20rem;
border-radius:1.5rem;
background-color:#E3E3E3;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
cursor:pointer;
`;
const Icon = styled.div`
font-size:5rem;
`;

const Title = styled.div`
font-size:1.5rem;
font-weight:bold;
margin-top:1rem;
`;