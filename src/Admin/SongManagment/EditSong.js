import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import Footer from '../../Components/Footer';
import NavBar from "../../Components/NavBar";
import { useSelector, useDispatch } from 'react-redux';
import { getSpecificSong } from "../../Redux/actions/getSpecificSong";
import { putSongs } from '../../Redux/actions/putSongs.js';
import { useParams } from 'react-router-dom';
import Loading from '../../Components/Loading';

const EditSong = () => {
  const [title, setTitle] = useState('');
  const [backgroundImage, setBackgroundImage] = useState(null); // Store file object instead of file path
  const [videoSong, setVideoSong] = useState(null); // Store file object instead of file path
   const dispatch = useDispatch();
  const { id } = useParams();

  // Fetch song details from Redux state
  const song = useSelector((state) => state.songs.songs);
  const isLoading = useSelector((state) => state.songs.isLoading);

  useEffect(() => {
    dispatch(getSpecificSong(id));
  }, [id, dispatch]);

  useEffect(() => {
    if (song) {
      setTitle(song.title || '');
    }
  }, [song]);

  const songData = {
    title: title,
    video: videoSong,
    image: backgroundImage,
  
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(id);
    // Dispatch the action with FormData and id
    dispatch(putSongs(songData, id));
  
    // Redirect or perform any other action after dispatching the action
     window.location.href = "/displaySong";
  };

  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
      <NavBar/>
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
              onChange={(e) => setBackgroundImage(e.target.value)} // Store selected file object
              placeholder='Please use image url from the internet'
              required
            />
          </InputWrapper>
          <InputWrapper>
            <Label>Audio Song</Label>
            <Input
              type="text"
              onChange={(e) => setVideoSong(e.target.value)} // Store selected file object
              placeholder='Please use video url from the internet'
              required
            />
          </InputWrapper>
          <Button type="submit">Edit</Button>
        </FormWrapper>
      </Container>
      <Footer/>
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
  padding: 1.5rem;
  box-shadow: 12px 12px 2px 1px #F5F5F5;
  border-radius:1rem;
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

export default EditSong;