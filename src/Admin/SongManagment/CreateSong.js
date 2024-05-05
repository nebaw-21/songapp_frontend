import React, { useState } from 'react';
import styled from '@emotion/styled';
import Footer from '../../Components/Footer';
import NavBar from '../../Components/NavBar';
import { useDispatch } from 'react-redux';
import { postSongs } from '../../Redux/actions/postSongs';

const Form = () => {
  const [title, setTitle] = useState('');
  const [image, setBackgroundImage] = useState('');
  const [video, setVideoSong] = useState('');
  const dispatch = useDispatch();

  const songData = {
    title: title,
    video: video,
    image: image,
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(postSongs(songData));
    setBackgroundImage("");
    setTitle("");
    setVideoSong("");
    window.location.href = '/displaySong';
  };

  return (
    <>
    <NavBar />
    <Container>
      <FormWrapper onSubmit={handleSubmit}>
        <InputWrapper>
          <Label>Title of Song</Label>
          <Input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </InputWrapper>
        <InputWrapper>
          <Label>Background Image</Label>
          <Input
            type="text"
            value={image}
            onChange={(e) => setBackgroundImage(e.target.value)}
            placeholder='Please use image url from the internet'
            required
          />
        </InputWrapper>
        <InputWrapper>
          <Label>Video Song</Label>
          <Input
            type="text"
            value={video}
            onChange={(e) => setVideoSong(e.target.value)}
            required
            placeholder='Please use video url from the internet'
          />
        </InputWrapper>
        <Button type="submit">Add</Button>
      </FormWrapper>
    </Container>
<Footer />
    </>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  `;
  
  const FormWrapper = styled.form`
  width: 400px;
  border-radius:1.5rem;
  box-shadow: 12px 12px 2px 1px #F5F5F5;
  padding: 2rem;
  background-color: #f7f7f7;

`;

const InputWrapper = styled.div`
  margin-bottom: 1.5rem;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  font-weight: bold;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.5rem;
  font-size: 1rem;
  border: 1px solid #ddd;
  border-radius: 4px;
`;

const Button = styled.button`
  width: 100%;
  padding: 0.5rem;
  font-size: 1rem;
  color: #fff;
  background-color: #007bff;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

export default Form;