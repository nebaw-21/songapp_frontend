import React, { useEffect } from "react";
import styled from "@emotion/styled";
import moment from "moment";
import { GiLoveSong } from "react-icons/gi";
import { useDispatch, useSelector } from "react-redux";
import { getSongs } from "../Redux/actions/getSongs";
import Loading from "./Loading";

const SongCard = () => {
  const dispatch = useDispatch();
  const songs = useSelector((state) => state.songs.songs);
  const isLoading = useSelector((state) => state.songs.isLoading);

  const formatDate = (date) => {
    const diffInSeconds = moment().diff(moment(date), "seconds");
    if (diffInSeconds < 60) {
      return `${diffInSeconds} seconds ago`;
    } else if (diffInSeconds < 3600) {
      const diffInMinutes = Math.floor(diffInSeconds / 60);
      return `${diffInMinutes} minute${diffInMinutes !== 1 ? 's' : ''} ago`;
    } else if (diffInSeconds < 86400) {
      const diffInHours = Math.floor(diffInSeconds / 3600);
      return `${diffInHours} hour${diffInHours !== 1 ? 's' : ''} ago`;
    } else {
      const diffInDays = Math.floor(diffInSeconds / 86400);
      return `${diffInDays} day${diffInDays !== 1 ? 's' : ''} ago`;
    }
  };

  useEffect(() => {
    dispatch(getSongs());
  }, [dispatch]);

  return (
    <Section>
      {isLoading ? (
        <Loading />
      ) : (
        songs.map((song) => (
          <Card  href={`/singleSong/${song._id}`} key={song._id}>
            <img src={song.image} alt="Song" />
            <Title>
              <GiLoveSong />
              {song.title}
            </Title>
            <SongInformation>
              <DateOfRelase>{formatDate(song.createdAt)}</DateOfRelase>
            </SongInformation>
          </Card>
        ))
      )}
    </Section>
  );
};

export default SongCard;


const Section = styled.div`
  margin-top: 5rem;
  margin-bottom: 2rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  gap: 1rem 0rem;
  padding-left: 1rem;
  padding-right: 1rem;


`;

const Card = styled.a`
  width: 18rem;
  text-decoration: none;
  height: 18rem;
  background-color: white;
  border-radius: 0.5rem;
  box-shadow: 2px 2px 2px 1px rgb(0 0 0 / 20%);
  hover: {
    transform: scale(1.2);
   }

  img {
    width: 100%;
    height: 60%;
    border-radius: 0.5rem;
  }

  @media (max-width: 769px) {
    width: 25rem;
    height: 20rem;
  }

  @media (min-width: 770px) and (max-width: 991px) {
    width: 21rem;
    height: 20rem;
  }

  @media (min-width: 992px) and (max-width: 1199px) {
  }

  @media (min-width: 1200px) {
  }
`;

const Title = styled.div`
  font-size: 1.25rem;
  cursor: pointer;
  font-weight: 600;
  margin-top: 0.25rem;
  margin-bottom: 0.5rem;
  color: black;
  text-align: center;
  margin-left: 1rem;
  margin-right: 1rem;
`;

const SongInformation = styled.div`
  display: flex;
  justify-content: space-around;
`;


const DateOfRelase = styled.div`
  font-size: 1rem;
  cursor: pointer;
  font-weight: 600;
  margin-top: 0.5rem;
  margin-bottom: 1rem;
  color: black;
  text-align: center;
  margin-left: 0.5rem;
  margin-right: 1rem;
`;
