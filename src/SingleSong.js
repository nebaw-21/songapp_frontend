import React from 'react';
import styled from '@emotion/styled';
import Footer from './Components/Footer';
import NavBar from './Components/NavBar';
import Loading from './Components/Loading';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getSpecificSong } from './Redux/actions/getSpecificSong';
import { useSelector, useDispatch } from 'react-redux';

const VideoPlayer = () => {

  const dispatch = useDispatch();
  const { id } = useParams();

  // Fetch song details from Redux state
  const song = useSelector((state) => state.songs.songs);
  const isLoading = useSelector((state) => state.songs.isLoading);

  useEffect(() => {
    dispatch(getSpecificSong(id));
  }, [id, dispatch]);

  if (isLoading) {
    return <Loading />;
  }

  return (
<>
<NavBar/>
<VideoContainer>
      <AspectRatio>
        <Video
          controls
          autoPlay
          poster={song.image}
        >
          <source src={song.video} type="video/mp4" />
        </Video>

      </AspectRatio>

    </VideoContainer>
<Footer/>

</>

  );
};

export default VideoPlayer;

const VideoContainer = styled.div`
width: 100%;
padding:5rem 0rem 2rem 0rem;  
box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const AspectRatio = styled.div`
position: relative;
padding-bottom: 56.25%; /* 9:16 aspect ratio */
`;

const Video = styled.video`
position: absolute;
top: 0;
left: 0;
width: 100%;
height: 70%;
object-fit: cover;
@media (max-width:769px){
    height:100%;
}
`;