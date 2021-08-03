import React, {useState, useEffect} from "react";
import styled from "styled-components";
import { Avatar } from "@material-ui/core";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import SearchIcon from "@material-ui/icons/Search";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase";
// import { lightTheme, darkTheme, GlobalStyles } from "./Toggle";
import Switch from '@material-ui/core/Switch';


function Header(props) {
  
    const [user] = useAuthState(auth);

    const handleChange = () =>{
      
    }
    // const [handleChange, setTheme] = useState(props.handleChange) ;
    // useEffect(() => {   
    //   setTheme(props.handleChange);
    // }, [props.handleChange]);
    
  return (
    <HeaderContainer >
      <HeaderLeft>
        <HeaderAvatar onClick={() => auth.signOut()} alt={user?.displayName} src={user?.photoURL}/>
        <AccessTimeIcon />
      </HeaderLeft>
      <HeaderCenter>
        <SearchIcon />
        <input placeholder="Search" />
      </HeaderCenter>
      <HeaderRight>
       
        <Switch 
            onChange={handleChange}
            name="switch"
            color="primary"
            
          />
       
        <HelpOutlineIcon />
      </HeaderRight>
    </HeaderContainer>
  );
}

export default Header;

const HeaderContainer = styled.div`
  display: flex;
  position: fixed;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  padding: 10px 0;
  background-color: var(--slack_color);
  /* background-color: ${props => props.handleChange ? props.theme.black : props.theme.white};  */
  color: white;
`;

const HeaderLeft = styled.div`
  flex: 0.3;
  display: flex;
  align-items: center;
  margin-left: 20px;

  > .MuiSvgIcon-root {
    margin-left: auto;
    margin-right: 30px;
  }
`;

const HeaderAvatar = styled(Avatar)`
  cursor: pointer;
  :hover {
    opacity: 0.8;
  }
`;

const HeaderCenter = styled.div`
  flex: 0%.4;
  opacity: 1;
  border-radius: 6px;
  text-align: center;
  background-color: #421f44;
  display: flex;
  padding: 0 50px;
  color: gray;
  border: 1px gray solid;

  > input {
    background-color: transparent;
    border: none;
    text-align: center;
    min-width: 30vw;
    outline: 0;
    color: white;
  }
`;

const HeaderRight = styled.div`
  flex: 0%.3;
  display: flex;
  align-items: flex-end;
  
  > .MuiSvgIcon-root {
    margin-left: auto;
    margin-right: 20px;
  }
`;

