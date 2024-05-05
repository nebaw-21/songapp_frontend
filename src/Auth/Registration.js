import React, { useState } from 'react';
import styled from '@emotion/styled';
import { useDispatch } from 'react-redux';
import { postUser } from '../Redux/actions/registerUser';

const Register = () => {
  const dispatch = useDispatch();

  // State to store form inputs
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });

  // Function to handle form input changes
  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(postUser(formData));
    window.location.href = "/login";
  };

  return (
    <Container>
      <FormContainer>
        <Heading>Sign Up</Heading>
        <Description>Sign Up to access More features</Description>
        <Form onSubmit={handleSubmit}>
          <WrapInput>
            <InputLabel htmlFor="name">Your Name</InputLabel>
            <InputField 
              type="text" 
              required
              name="name" 
              id="name" 
              placeholder="Nebiyu" 
              value={formData.name}
              onChange={handleInputChange} />
          </WrapInput>
          <WrapInput>
            <InputLabel htmlFor="email">Email address</InputLabel>
            <InputField 
              type="email" 
              name="email" 
              id="email" 
              required
              placeholder="nebiyuzewge@gmail.com" 
              value={formData.email}
              onChange={handleInputChange} />
          </WrapInput>
          <WrapInput>
            <InputLabel htmlFor="password">Password</InputLabel>
            <InputField 
              type="password" 
              name="password" 
              required
              id="password" 
              placeholder="*****" 
              value={formData.password}
              onChange={handleInputChange} />
          </WrapInput>
          <SubmitButton type="submit">Sign up</SubmitButton>
          <SignupLink href="/login">Already have an account? Sign in.</SignupLink>
        </Form>
      </FormContainer>
    </Container>
  );
};

export default Register;


const Container = styled.div`
display:flex;
height:100%;
width:100%;
justify-content:center;
align-items: center;
`;

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 350px;
  padding: 20px;
  border-radius: 1rem;
  margin-top:5rem;
  background-color: #f8f8f8;
`;

const Heading = styled.h1`
  text-align: center;
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;
`;

const Description = styled.p`
  text-align: center;
  font-size: 14px;
  color: #666;
  margin-bottom: 20px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const InputLabel = styled.label`
  font-size: 14px;
  color: #333;
  margin-bottom: 5px;
`;

const InputField = styled.input`
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #ccc;
  font-size: 16px;
`;


const SubmitButton = styled.button`
  padding: 10px 20px;
  border-radius: 5px;
  background-color: #337ab7;
  color: #fff;
  font-size: 16px;
  border: none;
  cursor: pointer;
`;

const SignupLink = styled.a`
  font-size: 14px;
  color: #337ab7;
  text-decoration: none;
  margin-top: 10px;
  text-align: center;
`;
const WrapInput = styled.div`
display:flex;
flex-direction: column;

`;

