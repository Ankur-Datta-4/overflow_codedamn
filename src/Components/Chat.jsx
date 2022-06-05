import React, { useEffect, useState } from "react";
// import MetaTags from "react-meta-tags";
// import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import './scss/_chat.scss';
import { isEmpty, map } from "lodash";
import moment from "moment";
import {
  Button,
  Card,
  Col,
  Container,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Form,
  FormGroup,
  Input,
  InputGroup,
  Nav,
  NavItem,
  NavLink,
  Row,
  TabContent,
  TabPane,
  UncontrolledDropdown,
  UncontrolledTooltip,
} from "reactstrap";
import classnames from "classnames";

//Import Scrollbar
import PerfectScrollbar from "react-perfect-scrollbar";
import "react-perfect-scrollbar/dist/css/styles.css";

//Import Breadcrumb
// import Breadcrumbs from "components/Common/Breadcrumb";
// import images from "assets/images";
// import {
//   addMessage as onAddMessage,
//   getChats as onGetChats,
//   getContacts as onGetContacts,
//   getGroups as onGetGroups,
//   getMessages as onGetMessages,
// } from "store/actions";

//redux
import { useSelector, useDispatch } from "react-redux";
import { selectUserEmail, selectUserName, selectUserPhotoURL,setMessages,selectUserMsgs,addMessageCur, selectUserSlug } from "../Features/User/userSlice";
import axios from "axios";
const SERVERURL="http://localhost:1337/api"


const Chat = props => {
  const dispatch = useDispatch();
  const photoURL=useSelector(selectUserPhotoURL)
  const name=useSelector(selectUserName)
  const slug=useSelector(selectUserSlug)
  // const chats=useSelector(selectUserChats)
  const [chats,setChats]=useState()
  
  const [messages,setMessages]=useState()


    function updateChats(){
      if(slug!=="" && slug!==null){
      axios.get(`${SERVERURL}/chat/u/${slug}`)
            .then((res)=>{
                if(!res.data.err){
                    let temp=res.data.chats
                    console.log(temp)//array
                    temp.forEach((chat,index)=>{
                        if(!chat.chatName){
                            if(temp[index].users[0].uid===slug){
                            temp[index]['chatName']=temp[index].users[1].name
                            temp[index]['recvId']=temp[index].users[1].uid

                        }else{
                            temp[index]['chatName']=temp[index].users[0].name
                            temp[index]['recvId']=temp[index].users[0].uid

                        }
                        }
                    })
                    
                    if(!temp.chatName){
                      console.log(temp.users)
                      
                    }
                    setChats(temp);
                }
              }).catch((err)=>{
                console.log(`Error while retreiving chats for ${slug}`);
                console.log(err)
            })
          }
    }

    function updateMessages(convId){
      axios.get(`${SERVERURL}/chat/${convId}`)
      .then((res)=>{


    
          if(!res.data.err){
              // state.msgs=res.data.msgs;
              setMessages(res.data.msgs)
            }
            console.log(res.data.msgs)
      }).catch((err)=>{
          console.log(`Error while retreiving Messages for ${convId}`);
          console.log(err)
      })
    }
  // const { chats, groups, contacts, messages } = useSelector(state => ({
  //   chats: state.chat.chats,
  //   messages: state.chat.messages,
  // }));

  const [messageBox, setMessageBox] = useState(null);
  // const Chat_Box_Username2 = "Henry Wells"
  const [currentRoomId, setCurrentRoomId] = useState(null);
  // eslint-disable-next-line no-unused-vars
  const [currentUser, setCurrentUser] = useState({
    name,
    photoURL,
    slug,
    isActive: true,
  });

  const [menu1, setMenu1] = useState(false);
  const [search_Menu, setsearch_Menu] = useState(false);
  const [settings_Menu, setsettings_Menu] = useState(false);
  const [other_Menu, setother_Menu] = useState(false);
  const [activeTab, setactiveTab] = useState("1");
  const [Chat_Box_Username, setChat_Box_Username] = useState("");
  // eslint-disable-next-line no-unused-vars
  const [Chat_Box_User_Status, setChat_Box_User_Status] = useState("");
  const [curMessage, setcurMessage] = useState("");
  const [recvId,setRecvId]=useState("")

  useEffect(() => {
    //dispatch(onGetChats());
    
    // console.log(currentUser)
    // dispatch(setChats());
    updateChats()
    if(currentRoomId){
      
      // dispatch(setMessages({convId:currentRoomId}))
      updateMessages(currentRoomId)

    }
  }, [currentRoomId]);
  // setChats(useSelector(selectUserChats));
  
  useEffect(() => {
    if (!isEmpty(messages)) scrollToBottom();
  }, [messages]);

  // const toggleNotification = () => {
  //   setnotification_Menu(!notification_Menu)
  // }

  //Toggle Chat Box Menus
  const toggleSearch = () => {
    setsearch_Menu(!search_Menu);
  };

  const toggleSettings = () => {
    setsettings_Menu(!settings_Menu);
  };

  const toggleOther = () => {
    setother_Menu(!other_Menu);
  };

  const toggleTab = tab => {
    if (activeTab !== tab) {
      setactiveTab(tab);
    }
  };

  //Use For Chat Box
  const userChatOpen = (id, name, status, roomId) => {
    setChat_Box_Username(name);
    setRecvId(id);
    setCurrentRoomId(roomId);
    // updateMessages(roomId)
    // dispatch(setMessages({convId:roomId}));
  };

  const addMessage = () => {
    // const message = {
    //   id: Math.floor(Math.random() * 100),
    //   roomId,
    //   sender,
    //   message: curMessage,
    //   createdAt: new Date(),
    // };
    // setcurMessage("");
    // dispatch(onAddMessage(message));

    const msg={
      sender:{
        uid:slug,
        name
      },
      recv:{
        uid:recvId,
        name:Chat_Box_Username
      },
      content:curMessage
    }

    
       //send message
       axios.post(`${SERVERURL}/chat/${currentRoomId}`,msg)
       .then((res)=>{
           if(!res.data.err){
               setMessages((prev)=>([...prev]))
           }else{
               setMessages([])
           }
       }).catch((err)=>{
           console.log(`Error while sending Messages for ${currentRoomId}`);
           console.log(err)
       })
    console.log(`Message sent`);
    console.log(msg);

    setcurMessage('')
    // dispatch(addMessageCur({convId:roomId,msg}))

  };

  const scrollToBottom = () => {
    if (messageBox) {
      messageBox.scrollTop = messageBox.scrollHeight + 1000;
    }
  };

  const onKeyPress = e => {
    const { key, value } = e;
    if (key === "Enter") {
      setcurMessage(value);
      addMessage()
    }
  };

  //serach recent user
  // const searchUsers = () => {
  //   var input, filter, ul, li, a, i, txtValue;
  //   input = document.getElementById("search-user");
  //   filter = input.value.toUpperCase();
  //   ul = document.getElementById("recent-list");
  //   li = ul.getElementsByTagName("li");
  //   for (i = 0; i < li.length; i++) {
  //     a = li[i].getElementsByTagName("a")[0];
  //     txtValue = a.textContent || a.innerText;
  //     if (txtValue.toUpperCase().indexOf(filter) > -1) {
  //       li[i].style.display = "";
  //     } else {
  //       li[i].style.display = "none";
  //     }
  //   }
  // };

  return (
    <React.Fragment>
      <div className="" style={{width:"100%",height:"80vh"}}>
        {/* <MetaTags>
          <title>Chat | Skote - React Admin & Dashboard Template</title>
        </MetaTags> */}
        <Container >
          {/* Render Breadcrumb */}
          {/* <Breadcrumbs title="Skote" breadcrumbItem="Chat" /> */}

          <Row>
            <Col lg="12">
              <div className="d-lg-flex m-2">
                <div className="chat-leftsidebar me-lg-4">
                  <div className="">
                    <div className="py-4 border-bottom">
                      <div className="d-flex">
                        <div className="align-self-center me-3">
                          <img
                            src={currentUser.photoURL}
                            className="avatar-xs rounded-circle"
                            alt=""
                          />
                        </div>
                        <div className="flex-grow-1">
                          <h5 className="font-size-15 mt-0 mb-1">
                            {currentUser.name}
                          </h5>
                          <p className="text-muted mb-0">
                            <i className="mdi mdi-circle text-success align-middle me-1" />
                            Active
                          </p>
                        </div>

                        <Dropdown
                          isOpen={menu1}
                          toggle={() => setMenu1(!menu1)}
                          className="float-end ms-2"
                        >
                          <DropdownToggle tag="i" className="text-muted">
                            <i className="mdi mdi-dots-horizontal font-size-18"></i>
                          </DropdownToggle>
                          <DropdownMenu>
                            <DropdownItem href="#">Action</DropdownItem>
                            <DropdownItem href="#">Another action</DropdownItem>
                            <DropdownItem href="#">Something else</DropdownItem>
                          </DropdownMenu>
                        </Dropdown> 
                      </div>
                    </div>

                    <div className="search-box chat-search-box py-4">
                      <div className="position-relative">
                        <Input
                          // onKeyUp={searchUsers}
                          id="search-user"
                          type="text"
                          className="form-control"
                          placeholder="Search..."
                        />
                        <i className="bx bx-search-alt search-icon" />
                      </div>
                    </div>

                    <div className="chat-leftsidebar-nav">
                      {/* <Nav pills justified>
                        <NavItem>
                          <NavLink
                            className={classnames({
                              active: activeTab === "1",
                            })}
                            onClick={() => {
                              toggleTab("1");
                            }}
                          >
                            <i className="bx bx-chat font-size-20 d-sm-none" />
                            <span className="d-none d-sm-block">Chat</span>
                          </NavLink>
                        </NavItem>
                        <NavItem>
                          <NavLink
                            className={classnames({
                              active: activeTab === "2",
                            })}
                            onClick={() => {
                              toggleTab("2");
                            }}
                          >
                            <i className="bx bx-group font-size-20 d-sm-none" />
                            <span className="d-none d-sm-block">Groups</span>
                          </NavLink>
                        </NavItem>
                        <NavItem>
                          <NavLink
                            className={classnames({
                              active: activeTab === "3",
                            })}
                            onClick={() => {
                              toggleTab("3");
                            }}
                          >
                            <i className="bx bx-book-content font-size-20 d-sm-none" />
                            <span className="d-none d-sm-block">Contacts</span>
                          </NavLink>
                        </NavItem>
                      </Nav> */}

                      <TabContent activeTab={activeTab} className="py-4">
                        <TabPane tabId="1">
                          <div>
                            <h5 className="font-size-14 mb-3">Recent</h5>
                            <ul className="list-unstyled chat-list" id="recent-list">
                              <PerfectScrollbar style={{ height: "410px" }}>
                                {map(chats, chat => (
                                  <li
                                    key={chat._id + false}
                                    className={
                                      currentRoomId === chat._id
                                        ? "active"
                                        : ""
                                    }

                                    style={{background:'rgba(#556ee6,0.4)',cursor:'pointer'}}
                                  >
                                    
                                      <div className="d-flex"
                                      onClick={() => {
                                        userChatOpen(
                                          chat.recvId,
                                          chat.chatName,
                                          false,
                                          chat._id
                                        );
                                      }}>
                                        
                                        <div className="align-self-center me-3">
                                          <img
                                            src="https://robohash.org/123"
                                            className="rounded-circle avatar-xs"
                                            alt=""
                                            width="48px"
                                            height="48px"
                                          />
                                        </div>

                                        <div className="flex-grow-1 overflow-hidden">
                                          <h5 className="text-truncate font-size-14 mb-1">
                                            {chat.chatName}
                                          </h5>
                                          <p className="text-truncate mb-0">
                                            {chat.recentMessage}
                                          </p>
                                        </div>
                                       
                                      </div>
                                    {/* </Link> */}
                                  </li>
                                ))}
                              </PerfectScrollbar>
                            </ul>
                          </div>
                        </TabPane>

                        

                        
                      </TabContent>
                    </div>
                  </div>
                </div>
                <div className="w-100 user-chat">
                  <Card>
                    <div className="p-4 border-bottom ">
                      <Row>
                        <Col md="4" xs="9">
                          <h5 className="font-size-15 mb-1">
                            {Chat_Box_Username}
                          </h5>

                          <p className="text-muted mb-0">
                            <i
                              className={
                                Chat_Box_User_Status === "online"
                                  ? "mdi mdi-circle text-success align-middle me-1"
                                  : Chat_Box_User_Status === "intermediate"
                                    ? "mdi mdi-circle text-warning align-middle me-1"
                                    : "mdi mdi-circle align-middle me-1"
                              }
                            />
                            {Chat_Box_User_Status}
                          </p>
                        </Col>
                        <Col md="8" xs="3">
                          <ul className="list-inline user-chat-nav text-end mb-0">
                            <li className="list-inline-item d-none d-sm-inline-block">
                              <Dropdown
                                isOpen={search_Menu}
                                toggle={toggleSearch}
                              >
                                <DropdownToggle className="btn nav-btn" tag="i">
                                  <i className="bx bx-search-alt-2" />
                                </DropdownToggle>
                                <DropdownMenu
                                  className="dropdown-menu-md"
                                >
                                  <Form className="p-3">
                                    <FormGroup className="m-0">
                                      <InputGroup>
                                        <Input
                                          type="text"
                                          className="form-control"
                                          placeholder="Search ..."
                                          aria-label="Recipient's username"
                                        />
                                        {/* <InputGroupAddon addonType="append"> */}
                                        <Button color="primary" type="submit">
                                          <i className="mdi mdi-magnify" />
                                        </Button>
                                        {/* </InputGroupAddon> */}
                                      </InputGroup>
                                    </FormGroup>
                                  </Form>
                                </DropdownMenu>
                              </Dropdown>
                            </li>
                            <li className="list-inline-item  d-none d-sm-inline-block">
                              <Dropdown
                                isOpen={settings_Menu}
                                toggle={toggleSettings}
                              >
                                <DropdownToggle className="btn nav-btn" tag="i">
                                  <i className="bx bx-cog" />
                                </DropdownToggle>
                                <DropdownMenu>
                                  <DropdownItem href="#">
                                    View Profile
                                  </DropdownItem>
                                  <DropdownItem href="#">
                                    Clear chat
                                  </DropdownItem>
                                  <DropdownItem href="#">Muted</DropdownItem>
                                  <DropdownItem href="#">Delete</DropdownItem>
                                </DropdownMenu>
                              </Dropdown>
                            </li>
                            <li className="list-inline-item">
                              <Dropdown
                                isOpen={other_Menu}
                                toggle={toggleOther}
                              >
                                <DropdownToggle className="btn nav-btn" tag="i">
                                  <i className="bx bx-dots-horizontal-rounded" />
                                </DropdownToggle>
                                <DropdownMenu className="dropdown-menu-end">
                                  <DropdownItem href="#">Action</DropdownItem>
                                  <DropdownItem href="#">
                                    Another Action
                                  </DropdownItem>
                                  <DropdownItem href="#">
                                    Something else
                                  </DropdownItem>
                                </DropdownMenu>
                              </Dropdown>
                            </li>
                          </ul>
                        </Col>
                      </Row>
                    </div>

                    <div>
                      <div className="chat-conversation" >
                        <ul className="list-unstyled">
                          <PerfectScrollbar
                            style={{ height: "55vh" }}
                            containerRef={ref => setMessageBox(ref)}
                          >
                            <li>
                              <div className="chat-day-title">
                                <span className="title">Today</span>
                              </div>
                            </li>
                            {messages &&
                              map(messages, message => (
                                <li
                                  key={"test_k" + message._id}
                                  className={
                                    message.senderId === slug
                                      ? "right"
                                      : ""
                                  }
                                >
                                  <div className="conversation-list">
                                    <UncontrolledDropdown>
                                      <DropdownToggle
                                        href="#"
                                        className="btn nav-btn"
                                        tag="i"
                                      >
                                        <i className="bx bx-dots-vertical-rounded" />
                                      </DropdownToggle>
                                      <DropdownMenu>
                                        <DropdownItem href="#">
                                          Copy
                                        </DropdownItem>
                                        <DropdownItem href="#">
                                          Save
                                        </DropdownItem>
                                        <DropdownItem href="#">
                                          Forward
                                        </DropdownItem>
                                        <DropdownItem href="#">
                                          Delete
                                        </DropdownItem>
                                      </DropdownMenu>
                                    </UncontrolledDropdown>
                                    <div className="ctext-wrap">
                                      <div className="conversation-name">
                                        {message.senderId}
                                      </div>
                                      <p>{message.content}</p>
                                      <p className="chat-time mb-0">
                                        <i className="bx bx-time-five align-middle me-1" />
                                        {moment(message.createdAt).format(
                                          "DD-MM-YY hh:mm"
                                        )}
                                      </p>
                                    </div>
                                  </div>
                                </li>
                              ))}
                          </PerfectScrollbar>
                        </ul>
                      </div>
                      <div className="p-3 chat-input-section">
                        <Row>
                          <Col>
                            <div className="position-relative">
                              <input
                                type="text"
                                value={curMessage}
                                onKeyPress={onKeyPress}
                                onChange={e => setcurMessage(e.target.value)}
                                className="form-control chat-input"
                                placeholder="Enter Message..."
                              />
                              <div className="chat-input-links">
                                <ul className="list-inline mb-0">
                                  <li className="list-inline-item">
                                    <Link to="#">
                                      <i
                                        className="mdi mdi-emoticon-happy-outline"
                                        id="Emojitooltip"
                                      />
                                      <UncontrolledTooltip
                                        placement="top"
                                        target="Emojitooltip"
                                      >
                                        Emojis
                                      </UncontrolledTooltip>
                                    </Link>
                                  </li>
                                  <li className="list-inline-item">
                                    <Link to="#">
                                      <i
                                        className="mdi mdi-file-image-outline"
                                        id="Imagetooltip"
                                      />
                                      <UncontrolledTooltip
                                        placement="top"
                                        target="Imagetooltip"
                                      >
                                        Images
                                      </UncontrolledTooltip>
                                    </Link>
                                  </li>
                                  <li className="list-inline-item">
                                    <Link to="#">
                                      <i
                                        className="mdi mdi-file-document-outline"
                                        id="Filetooltip"
                                      />
                                      <UncontrolledTooltip
                                        placement="top"
                                        target="Filetooltip"
                                      >
                                        Add Files
                                      </UncontrolledTooltip>
                                    </Link>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </Col>
                          <Col className="col-auto">
                            <Button
                              type="button"
                              color="primary"
                              onClick={() =>
                                addMessage()
                              }
                              className="btn btn-primary btn-rounded chat-send w-md "
                            >
                              <span className="d-none d-sm-inline-block me-2">
                                Send
                              </span>{" "}
                              <i className="mdi mdi-send" />
                            </Button>
                          </Col>
                        </Row>
                      </div>
                    </div>
                  </Card>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  );
};

// Chat.propTypes = {
//   chats: PropTypes.array,
//   groups: PropTypes.array,
//   contacts: PropTypes.array,
//   messages: PropTypes.array,
//   onGetChats: PropTypes.func,
//   onGetGroups: PropTypes.func,
//   onGetContacts: PropTypes.func,
//   onGetMessages: PropTypes.func,
//   onAddMessage: PropTypes.func,
// };

export default Chat;
