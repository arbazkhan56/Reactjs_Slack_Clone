import React from 'react'
import styled from "styled-components";
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import CreateIcon from '@material-ui/icons/Create';
import InsertCommentIcon from '@material-ui/icons/InsertComment';
import InboxIcon from '@material-ui/icons/Inbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import AppsIcon from '@material-ui/icons/Apps';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import Sidebaroption from './Sidebaroption';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import AddIcon from '@material-ui/icons/Add';
import {useCollection } from "react-firebase-hooks/firestore";
import { db } from "../firebase";
function Sidebar() {
    const [channels] = useCollection(db.collection("rooms"));
    

    return (
        <SidebarContainer>
        <SidebarHeader>
            <SidebarInfo>
                <h2>Arbaz hussain</h2>
                <h3>
                <FiberManualRecordIcon />
                Web Development
                </h3>

            </SidebarInfo>
            <CreateIcon />

        </SidebarHeader>

        <Sidebaroption Icon={InsertCommentIcon} title = "Threads" />
        <Sidebaroption Icon={InboxIcon} title = "Mentions & reactions" />
        <Sidebaroption Icon={DraftsIcon} title = "Saved items" />
        <Sidebaroption Icon={BookmarkBorderIcon} title = "Channel browser" />
        <Sidebaroption Icon={PeopleAltIcon} title = "People & user groups" />
        <Sidebaroption Icon={AppsIcon} title = "Apps" />
        <Sidebaroption Icon={FileCopyIcon} title = "File browser" />
        <Sidebaroption Icon={ExpandLessIcon} title = "Show less" />
        <hr />
        <Sidebaroption Icon={ExpandMoreIcon} title = "Show More" />
        <hr />
        <Sidebaroption Icon={AddIcon} addChannelOption title = "Add Channel" />

        {channels?.docs.map((doc) => (
            <Sidebaroption
              key={doc.id}
              id={doc.id}
              title={doc.data().name}
              />
        ))}
            
        </SidebarContainer>
    )
}

export default Sidebar

const SidebarContainer = styled.div`
    background-color: var(--slack_color);
    color: white;
    flex: 0.3;
    border-top: 1px solid #49274b;
    max-width: 260px;
    margin-top: 60px;

    >hr{
        margin-top: 10px;
        margin-bottom: 10px;
        border: 1px solid #49274b;
    }
`;
const SidebarHeader = styled.div`
    display: flex;
    border-bottom: 1px solid #49274b;
    padding: 13px;

    >.MuiSvgIcon-root{
        padding: 8px;
        color: #49274b;
        font-size: 18px;
        background-color: white;
        border-radius: 999px;
    }
`;
const SidebarInfo = styled.div`
    flex: 1;

    > h2 {
        font-size: 15px;
        font-weight: 900;
        margin-bottom: 5px;
    }

    > h3 {
        display: flex;
        font-size: 13px;
        font-weight: 400;
        align-items: center;
    }
    > h3 > .MuiSvgIcon-root{
        font-size: 14px;
        margin-top: 1px;
        margin-right: 2px;
        color: green;
    }
`;
// const FiberManualRecordIcon = styled.div`

// `;