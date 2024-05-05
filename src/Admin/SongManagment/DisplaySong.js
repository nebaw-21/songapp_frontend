import React, { useEffect } from 'react';
import styled from '@emotion/styled';
import Footer from '../../Components/Footer';
import NavBar from '../../Components/NavBar';
import Loading from "../../Components/Loading";
import { useDispatch, useSelector } from 'react-redux';
import { getSongs } from '../../Redux/actions/getSongs';
import { deleteSong } from '../../Redux/actions/deletSong'; 

const DisplaySong = () => {
  const dispatch = useDispatch();
  const songs = useSelector((state) => state.songs.songs);
  const isLoading = useSelector((state) => state.songs.isLoading);

  useEffect(() => {
    dispatch(getSongs());
  }, [dispatch]);

  const handleDelete = (id) => {
    dispatch(deleteSong(id));
    window.location.href = "./displaySong";
  };

  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
      <NavBar />
      <Container>
        <TableWrapper>
          <TableHeader>
            <Button href='/createSong'>Create</Button>
          </TableHeader>
          <TableBody>
            {songs.map((song, index) => (
              <TableRow key={index}>
                <TableData>{index + 1}</TableData>
                <TableData>{song.title}</TableData>
                <TableData>{song.author}</TableData>
                <ActionButtons>
                  <Button href={`/editSong/${song._id}`}>Edit</Button>
                  <Button2 onClick={() => handleDelete(song._id)}>Delete</Button2> {/* Add onClick event handler */}
                </ActionButtons>
              </TableRow>
            ))}
          </TableBody>
        </TableWrapper>
      </Container>
      <Footer />
    </>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 5rem;
  margin-bottom: 2rem;
  height: 100vh;
  `;
  
  const TableWrapper = styled.div`
  width: 80%;
  border-radius:1.5rem;
  box-shadow: 12px 12px 2px 1px #F5F5F5;
  max-width: 800px;
  margin: 0 auto;
  border: 1px solid #ddd;
`;

const TableHeader = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 1rem;
  background-color: #f7f7f7;
`;

const Button = styled.a`
  padding: 0.5rem 1rem;
  text-decoration: none;
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

const Button2 = styled.a`
  padding: 0.5rem 1rem;
  text-decoration: none;
  font-size: 1rem;
  color: #fff;
  background-color: #d41313;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #f26161;
  }
`;

const TableBody = styled.div`
  background-color: #fff;
`;

const TableRow = styled.div`
  display: flex;
  align-items: center;
  padding: 1rem;

  &:nth-of-type(even) {
    background-color: #f7f7f7;
  }
`;

const TableHead = styled.div`
  flex: 1;
  font-weight: bold;
  padding: 0.5rem;
  border-bottom: 1px solid #ddd;
`;

const TableData = styled.div`
  flex: 1;
  padding: 0.5rem;
  border-bottom: 1px solid #ddd;
`;

const ActionButtons = styled.div`
  display: flex;
  gap: 0.5rem;
`;

export default DisplaySong;