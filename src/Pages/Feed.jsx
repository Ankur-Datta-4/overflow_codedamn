import React, { useState, useEffect } from "react"

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
  import { Link } from 'react-router-dom'
  import Avatar from '@mui/material/Avatar';
  import CardMedia from '@mui/material/CardMedia';
  import Typography from '@mui/material/Typography';
  import { CardActionArea } from '@mui/material';
  import PostCompi from "../Components/PostComponent";
  import Cardi  from "../Components/Card"
export default function Feed()
{
    // let photourl="https://www.parisbeacon.com/wp-content/uploads/2022/04/What-Cillian-Murphy-Hates-Most-About-Tommy-Shelby-and-Peaky.jpg"
    let photourl="https://st1.latestly.com/wp-content/uploads/2020/05/Cillian-Murphy.jpg"
    let postNumber=30;
    const recipeItem = {
        recipeAuthor: "Efecan",
        title: "Avokado Ezmeli Taco",
        date: "8 Haziran 2021, Salsdcjn",
        image:{photourl},
        description:
          "Bu kremsi ve baharatlı avokado sosu, günlük taco'larınızı hazırlamak için harika seçeneklerden biri. Geleneksel olarak flautas veya taquitos ile servis edilir, ancak bazı vegan enchiladalara da harika bir katkı sağlar.",
      };

    return(
        <React.Fragment>
            <div className="page-content">
                <Container >
                    <Row style={{position:"relative",marginTop:"6rem"}} className="" >
                        <Col md={3} xs={12} style={{position:"sticky",position:"-webkit-sticky",left:"7%",top:"17%"}}>
                  
                            <Card className="overflow-hidden">
                                <div className="" style={{display:"flex",justifyContent:"center"}}>
                                    <Row style={{  }}  >
                                        <Col xs="5">
                                        <img 
                                        src="https://media.istockphoto.com/vectors/abstract-blue-vector-background-with-stripes-can-be-used-for-cover-vector-id1270261573?k=20&m=1270261573&s=612x612&w=0&h=8KkJd1DCgwZxMyh3AYFSzfuTRphs3mLuEMYMmUpmsmQ="
                                        style={{height:"6rem",width:"90rem",zIndex:"-1",margin:"0 auto"}}
                                        />
                                        </Col>
                                    </Row>
                                </div>
                                <CardBody className="pt-0">
                                <Row >
                                <Col  sm="2">
                                <div className="avatar-xl profile-user-wid mb-2">
                                    {/* <img
                                    src="https://geeksgod.com/wp-content/uploads/2021/06/GeeksforGeeks.png"
                                    alt=""
                                    style={{display:"block",marginLeft:"auto",marginRight:"auto",justifyContent:"center",left:"",position:"absolute",height:"7rem",width:"7rem",alignItems:"center", top:"3rem",zIndex:"2"}}
                                    className="img-thumbnail rounded-circle "
                                    /> */}
                                <Avatar 
                                style={{display:"block",marginLeft:"auto",marginRight:"auto",justifyContent:"center",left:"",position:"absolute",height:"5rem",width:"5rem",alignItems:"center", top:"3rem",zIndex:"2"}}
                                alt="Remy Sharp" src={photourl} className="img-thumbnail rounded-circle " />
                              
                                </div>
                                </Col>
                                </Row>
                            </CardBody>
                            <CardBody>
                                <Row>
                                    <Col className="mt-1">
                                        <h6 style={{textAlign:"center"}} >GEEKS FOR GEEKS GEEKS SSSsssssssssssss</h6> 
                                        

                                        <hr></hr>
                                        {/* <h5>No. of posts: {postNumber}</h5> */}
                                        <Typography style={{fontWeight:"bold",display:"block",padding:"4px 6px",clear:"both"}} gutterBottom variant="h7" >
                                    

                                            <span style={{float:"left"}}>No. of posts : </span>
                                            <span style={{float:"right",color:"blue"}}>{postNumber}</span>
                                        </Typography>
                                        <Typography style={{fontWeight:"bold",display:"block",padding:"4px 6px",clear:"both"}} gutterBottom variant="h7" >
                                            <span style={{float:"left"}}>Connections : </span>
                                            <span style={{float:"right",color:"blue"}}>{postNumber}</span>
                                        </Typography>
                                    </Col>    
                                </Row>
                            </CardBody>
                            </Card>

                            <Card className="overflow-hidden mt-2">
                            <CardBody>
                                <Row>
                                    <Col className="mt-1">
                                        <Row>
                                            <Link style={{textAlign:"center",textDecoration:"none"}}  to="/"><h6 >Explore Groups</h6></Link>                                        
                                        </Row>
                                        <Row>
                                            <Link to="/" style={{textAlign:"center",textDecoration:"none"}} ><h6 >Explore Interests</h6></Link> 
                                        </Row>
                                        <Row>
                                            <Link to="/" style={{textAlign:"center",textDecoration:"none"}} ><h6 style={{textAlign:"center"}} >Expand your Network</h6></Link> 
                                        </Row>
                                        <Row>
                                            <Link to="/" style={{textAlign:"center",textDecoration:"none"}} ><h6 style={{textAlign:"center"}} >Explore Groups</h6></Link> 
                                        </Row>

                                    </Col>    
                                </Row>
                                <Row>
                                    
                                </Row>
                            </CardBody>
                            </Card>
                        </Col>
                        {/* <Col>
                        </Col> */}

            {/* ------------COLUMN 2--------------------------- */}
                        <Col md={8} xs={12}>

                            <Card style={{}} className="overflow-hidden">
                                <PostCompi />
                                {/* <CardBody className="pt-0">
                                <Row >
                                <Col  sm="2">
                                
                                </Col>
                                </Row>
                            </CardBody> */}
                            </Card>

                            <Card className="overflow-hidden mt-2 px-5 ">
                            <Cardi className="mt-2" post={recipeItem} />
                            <Cardi className="mt-2"  post={recipeItem} />
                            <Cardi className="mt-2" post={recipeItem} />
                            <Cardi className="mt-2" post={recipeItem} />
                            </Card>
                        </Col>
                        
                    </Row>
                </Container>
            </div>
        </React.Fragment>
    )
}