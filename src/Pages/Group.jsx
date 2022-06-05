// react-bootstrap components
import React, { useState, useEffect } from "react"
import PostCompi from "../Components/PostComponent";
import Cardi from "../Components/Card";
import 'react-tagsinput/react-tagsinput.css'
import {
    Container,
    Card,
    Col,
    Row,
    CardBody,
    Badge,
    Button,
    Modal,
    ModalFooter,
    ModalHeader,
    ModalBody,
    UncontrolledTooltip,
  } from "reactstrap"
  import { BsLinkedin } from 'react-icons/bs';
  import { BsGithub } from 'react-icons/bs';
  import { RiInstagramFill } from 'react-icons/ri';
  import { GrTwitter } from 'react-icons/gr';
  import Avatar from '@mui/material/Avatar';
  import { Link, useParams } from "react-router-dom";
  import AddBoxIcon from '@mui/icons-material/AddBox';
  import MarkunreadIcon from '@mui/icons-material/Markunread';
  import WhatsAppIcon from '@mui/icons-material/WhatsApp';
  import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import axios from "axios";
const SERVERURL="http://localhost:1337/api"

export default function GroupProfile()
{
    const {id}=useParams()
    const [like,setLike]=useState(false);
    const [group,setGroup]=useState()
    const[tags,setTags]=useState(['react','java','node','abcde'])
    let memList=[{"photourl":"https://images.pexels.com/photos/1172253/pexels-photo-1172253.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2","url":"/groups","name":"JSdddddddddsdjnc sdddddddd"},{"photourl":"https://images.pexels.com/photos/1172253/pexels-photo-1172253.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2","url":"/groups","name":"JSdddddddddsdjnc sdddddddd"},{"photourl":"https://images.pexels.com/photos/1172253/pexels-photo-1172253.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2","url":"/groups","name":"JSdddddddddsdjncsdddddddd"},{"photourl":"https://images.pexels.com/photos/1172253/pexels-photo-1172253.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2","url":"/groups","name":"JSdddddddddsdjnc sdddddddd"}]
    let adminMail="reachdarshanv@gmail.com";
    let postsComp=[{"date":"4 June 2022","likes":"10","Url":"https://pbs.twimg.com/profile_images/1479443900368519169/PgOyX1vt_400x400.jpg","content":"This is my first post xD .. Please do comment and share In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available."},{"date":"4 June 2022","Url":"https://images.pexels.com/photos/1172253/pexels-photo-1172253.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2","content":"This is my first post xD .. Please do comment and share "},{"date":"4 June 2022","Url":"https://images.pexels.com/photos/1172253/pexels-photo-1172253.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2","content":"This is my first post xD .. Please do comment and share In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available."},{"date":"4 June 2022","Url":"https://images.pexels.com/photos/1172253/pexels-photo-1172253.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2","content":"This is my first post xD .. Please do comment and share "}]
    let members=30;

    useEffect(()=>{
        axios.get(`${SERVERURL}/group/${id}`)
        .then((res)=>{
            if(!res.data.err && res.data.resGrp){
                setGroup(res.data.resGrp)
            }
        })
        .catch((e)=>{
            console.log(`Error while fetching group ${id}`)
            console.log(e)
        })
    },[id])


    function handleLike(e)
    {
        console.log(e)
        console.log("liked")
    }
    return (
        <React.Fragment>
        {group?(    <div className="page-content" style={{height:"100%"}}>
                <Container style={{height:"100%",position:"relative"}}>
                    <Row className="mt-3">
                        <Card className="overflow-hidden">
                            <div className="" style={{ display: "flex", borderRadius: "15px 15px 0px 0px", justifyContent: "center" }}>
                                <Row style={{}}  >
                                    <Col xs="5">
                                    <img 
                                    src="https://picsum.photos/id/200/1440/128"
                                    style={{borderRadius:"15px 15px 0px 0px",height:"8rem",width:"90rem",zIndex:"-1",margin:"0 auto"}}
                                    />
                                    </Col>
                                </Row>
                            </div>
                            <CardBody className="pt-0">
                                <Row >
                                <Col  sm="4">
                                <div className="avatar-xs profile-user-wid mb-4">
                                    <img
                                    src={group.photoURL}
                                    alt=""
                                    style={{display:"block",marginLeft:"auto",marginRight:"auto",justifyContent:"center",left:"44%",position:"absolute",height:"7rem",width:"7rem",alignItems:"center", top:"4rem",zIndex:"2"}}
                                    className="img-thumbnail rounded-circle "
                                    />
                                                                      
                                </div>
                                </Col>
                                </Row>
                            </CardBody>
                            <CardBody>
                                <Row>
                                    <Col style={{textAlign:"center"}} >
                                        <h4 >{group.name}</h4> 
                                        <h5>{group.people.length} members</h5>
                                        <h3>JOIN 
                                        <AddBoxIcon onClick={()=>console.log("follow")} style={{cursor:"pointer",color:"#0980b8",height:"2rem",width:"3rem"}}/>
                                        </h3>
                                        <h6 className="text-muted">{group.bio}</h6>
                                        {/* <h2><BsGithub src="www.google.com"/> <BsLinkedin/></h2> */}
                                        <a href="https://www.linkedin.com"><BsLinkedin className='mt-1' style={{ height: "30px", width: "30px", color: "#0A66C2", marginRight: "1rem" }} /></a>
                                        <a href="https://www.Instagram.com" ><RiInstagramFill className='mt-1' style={{ height: "30px", color: "#E1306C", width: "30px", marginRight: "1rem" }} /> </a>
                                        <a href="https://www.twitter.com" ><GrTwitter className='mt-1' style={{ height: "30px", color: "#00acee", width: "30px", marginRight: "1rem" }} /></a>
                                        <a href="https://www.twitter.com" ><WhatsAppIcon className='mt-1' style={{ height: "30px", color: "#075e54", width: "30px", marginRight: "1rem" }} /></a>

                                        <h2></h2>
                                    </Col>
                                </Row>
                            </CardBody>
                        </Card>
                    </Row>
                    <Row className="mt-3">
                        {/* <Card className="overflow-hidden" >
                            <CardBody>
                                <h3>Skills :</h3>
                                <TagsInput value={tags} onChange={handleChange} />
                            </CardBody>
                        </Card> */}
                        <Card style={{textAlign:"center"}} className="overflow-hidden">
                            <CardBody>   
                            <h3>Tags</h3>                        
                            {
                                group.tags && group.tags.map((e,index)=>{
                                    return(
                                        <Badge pill className="badge-soft-success me-1" key={index}>{e}</Badge>
                                    )
                                })
                            }    
                            </CardBody>
                        </Card>
                    </Row>

                    <Row className="mt-3">
                        <Col>
                            <Card className="overflow-hidden group">
                                <CardBody className="mb-1">
                                    <h3 style={{ textAlign: "center" }}>MEMBERS</h3>

                                </CardBody>
                                <hr></hr>
                                {/* {
                                    ar.map((e)=>(<li>{e}</li>))
                                } */}
                                {
                                    group.people.map(({photoURL,uid,name})=>(
                                      
                                        <Col  style={{display:"flex",justifyContent:"center"}} className="mt-3 overflow-hidden group">
                                            <Row >
                                                <Col style={{ marginRight: "20px" }} xs={1} >

                                                    {/* <img
                                                    src={photourl}
                                                    className="avatar-xs rounded-circle"
                                                    mr={2}
                                                    style={{height:"50px",width:"50px"}}
                                                    alt=""
                                                /> */}
                                                <Avatar style={{marginRight:"20px"}} alt="Remy Sharp" src={photoURL} className="mr-2" />
                                            </Col>
                                            <Col xs={8}>
                                            <div className="flex-grow-1 overflow-hidden">
                                                <h5 className="text-truncate font-size-15 line-3 m-2">
                                                <Link
                                                    style={{textDecoration:"none"}}
                                                    to={`/user/${uid}`}
                                                    className="text-dark"
                                                    xl={2}
                                                >
                                                    {name}
                                                </Link>
                                                </h5>
                                            </div>
                                            </Col>
                                            </Row>
                                        </Col>

                                    ))
                                }
                            </Card>
                        </Col>
                        <Col>
                            <Card className="overflow-hidden">
                                <CardBody>
                                    <h3 style={{ textAlign: "center" }}>CONTACT US</h3>
                                </CardBody>
                                <hr></hr>
                                {/* <hr></hr> */}
                                <h4 style={{textAlign:"center"}}>Contact admin for any queries <Link to={`/user/${group.admin}`}><MarkunreadIcon/></Link></h4>
                            </Card>
                        </Col>
                    </Row>

                    <Row className="mt-2">
                        <Card>
                            <CardBody>
                                <h3 style={{ textAlign: "center" }}>POSTS</h3>
                            </CardBody>

                            <Row mr={4} mb={5}>
                                {
                                    postsComp.map(({ date, Url, content, likes }) => (
                                        <Col xl={4} md={6} xs={10}>
                                            <Card className="mt-3" sx={{ width: "200px" }}>
                                                <CardActionArea>


                                                    <CardContent>
                                                        {date &&
                                                            <Typography gutterBottom variant="h5" component="div">
                                                                {date}
                                                            </Typography>
                                                        }
                                                        {content &&
                                                            <Typography variant="body2" color="text.secondary">
                                                                {content}
                                                            </Typography>
                                                        }
                                                    </CardContent>
                                                    <div style={{ display: "flex", justifyContent: "center" }}>

                                                        {Url &&
                                                            <CardMedia
                                                                style={{ display: "flex", justifyContent: "center", height: "10rem", width: "8rem" }}
                                                                component="img"
                                                                // height="100%"
                                                                image={Url}
                                                                alt="green iguana"
                                                            />
                                                        }

                                                    </div>

                                                </CardActionArea>
                                            </Card>
                                            <Typography gutterBottom variant="h6" component="div">
                                                <ThumbUpIcon style={{ cursor: "pointer", color: like ? "#87CEEB" : "" }} onClick={() => { setLike((prev) => !prev) }} /> {likes + " likes" || "0 likes"}
                                            </Typography>
                                        </Col>
                                    ))
                                }
                            </Row>
                        </Card>
                    </Row>
                </Container>
            </div>
        ):(
            <div>
                Loading
            </div>
        )
}
        </React.Fragment>
    )
}