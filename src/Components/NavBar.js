import styled from '@emotion/styled';
import { useState, useEffect } from 'react';
import { IoPerson } from "react-icons/io5";
import { useSelector, useDispatch } from 'react-redux';
import { getSpecificUser } from '../Redux/actions/getSpecificUser'; 

const MyNavbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [isLogged, setIsLogged] = useState(false); // Default state should be false
  const dispatch = useDispatch();
  
    const token = localStorage.getItem('token'); // Retrieve token from local storage
  // // Fetch user details from Redux state
   const user = useSelector((state) => state.users.users); // Assuming the state structure is { user: { ... } }

  console.log(user);
  useEffect(() => {
    if (token) {
      dispatch(getSpecificUser(token));
      setIsLogged(true);
    }
  }, [token]);
  
  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };


  const handleLogout = () => {
  
    localStorage.removeItem('token');
    setIsLogged(false);
    window.location.href = "/";
  };


  return (
    <Navbar>
      <Logo href='/'></Logo>    

  {!isLogged ? (
  <NavLink href="/login">Signup</NavLink>
) : (
  <RightNav>
    <UserInfo>
      <UserName>{user.data?.name}</UserName>
      <UserIcon><IoPerson /></UserIcon>
    </UserInfo>
    <AdminPanel href="/admin">Admin Panel</AdminPanel>
    <LogoutButton onClick={handleLogout}>Logout</LogoutButton>
  </RightNav>
)}


      <MenuButton onClick={toggleMenu}>
        <MenuIcon>&#9776;</MenuIcon>
      </MenuButton>

      {showMenu && (
        <Menu>
          {!isLogged ? (
            <MenuItem href="/login">Signup</MenuItem>
          ) : (
            <>
              <UserInfo showMenu={showMenu}>
                <UserName>{user.data?.name}</UserName>
                <UserIcon> <IoPerson /></UserIcon>
              </UserInfo>
              <AdminPanel showMenu={showMenu} href="/admin">Admin Panel</AdminPanel>
              <LogoutButton onClick={handleLogout} showMenu={showMenu} >logout</LogoutButton>
            </>
          )}
        </Menu>
      )}
    </Navbar>
  );
};



const Navbar = styled.div`
  background-color: #fff;
  padding: 0.5rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 768px) {
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
  }
`;

const Logo = styled.a`
  height: 3rem;
  width:3rem;
  border-radius:50%;
  background-color:yellow;
`;

const NavLink = styled.a`
  font-size: 1rem;
  font-weight: bold;
  margin: 0 3rem;
  color: #333;
  text-decoration: none;

  &:hover {
    color: #007bff;
  }

  @media (max-width: 768px) {
    margin: 0.5rem 0;
    display:none;
  }
`;

const MenuButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  margin:3rem, 3rem;
  @media (min-width: 769px) {
    display: none;
  }
`;

const LogoutButton = styled.a`
  background-color: #dc3545; 
  text-decoration: none;
  color: #fff;
  padding: 0.75rem 3rem;
  border: none;
  border-radius: 1.5rem;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: background-color 0.3s ease;
  margin-right:2rem;

  &:hover {
    background-color: #c82333; 
  }

  &:active {
    transform: translateY(2px);
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
  }

  @media (max-width: 769px) {
    ${({ showMenu }) => !showMenu && `display: none;`}
  }

  @media (min-width: 769px) {
    ${({ showMenu }) => showMenu && `display: none;`}
   
  }

`;

const AdminPanel = styled.a`
  background-color: #FDD835;
  text-decoration: none;
  color: #fff;
  padding: 0.75rem 2rem;
  border: none;
  border-radius: 2rem;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: background-color 0.3s ease;
  margin-bottom: 5px;
  margin-right:2rem;
  &:hover {
    background-color: #E6D37C; 
  }

  &:active {
    transform: translateY(2px);
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
  }

  @media (max-width: 769px) {
    ${({ showMenu }) => !showMenu && `display: none;`}
  }

  @media (min-width: 769px) {
    ${({ showMenu }) => showMenu && `display: none;`}

  }

`;

const MenuIcon = styled.span`
  font-size: 2rem;
  color: #333;
  padding-right:1rem;
`;

const Menu = styled.div`
  background-color: #F2F2F2;
  position: absolute;
  width: 100%;
  height: 100hv;
  left:0%;
  top: 100%;
  display: flex;
  flex-direction: column;

 box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  @media (min-width: 769px) {
    display: none;
  }
`;

const MenuItem = styled.a`
  font-size: 1rem;
  font-weight: bold;
  margin: 1rem 1rem;
  
  color: #333;
  text-decoration: none;

  &:hover {
    color: #007bff;
  }
`;

const UserInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;
  margin-right: 9rem;


  @media (max-width: 769px) {
    ${({ showMenu }) => !showMenu && `display: none;`}
  }

  @media (min-width: 769px) {
    ${({ showMenu }) => showMenu && `display: none;`}
    margin-right: 0.25rem;
    margin-top:0.5rem;
  }
`;

const UserName = styled.span`
  font-size: 1.1rem;
  font-weight: bold;
  margin-right: 0.25rem;
`;

const UserIcon = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: #007bff; 
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
`;



const RightNav = styled.div`
display:flex;
justify-content: space-around;


`;

export default MyNavbar;