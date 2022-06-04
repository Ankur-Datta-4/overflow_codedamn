// react-bootstrap components
import React, { useState, useEffect } from "react"

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
import { Link } from "react-router-dom";
import Avatar from '@mui/material/Avatar';
import TagsInput from 'react-tagsinput'


export default function User()
{
    const[tags,setTags]=useState(['react','java','node','abcde'])

    function handleChange(tags){
        setTags(tags)
    }

    let ar=[{"photourl":"https://images.pexels.com/photos/1172253/pexels-photo-1172253.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2","url":"/groups","name":"JSdddddddddsdjnc sdddddddd"},{"photourl":"https://images.pexels.com/photos/1172253/pexels-photo-1172253.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2","url":"/groups","name":"JSdddddddddsdjnc sdddddddd"},{"photourl":"https://images.pexels.com/photos/1172253/pexels-photo-1172253.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2","url":"/groups","name":"JSdddddddddsdjncsdddddddd"},{"photourl":"https://images.pexels.com/photos/1172253/pexels-photo-1172253.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2","url":"/groups","name":"JSdddddddddsdjnc sdddddddd"}]
    return(

            <div className="page-content" style={{height:"100%"}}>
                <Container  style={{height:"100%",position:"relative"}}>
                    <Row className="mt-3">
                        <Card className="overflow-hidden" >
                            <div className="">
                            <Row style={{ }}  >
                                <Col xs="7">
                                <img 
                                    src="https://media.istockphoto.com/vectors/abstract-blue-vector-background-with-stripes-can-be-used-for-cover-vector-id1270261573?k=20&m=1270261573&s=612x612&w=0&h=8KkJd1DCgwZxMyh3AYFSzfuTRphs3mLuEMYMmUpmsmQ="
                                    style={{borderRadiusTop:"2px 2px 0px 0px",height:"8rem",width:"50rem",zIndex:"-1",margin:"0 auto"}}
                                />
                                </Col>
                            </Row>
                                
                            </div>
                            <CardBody className="pt-0">
                                <Row >
                                <Col sm="2">
                                <div className="avatar-xs profile-user-wid mb-4">
                                    <img
                                    src="https://images.pexels.com/photos/1172253/pexels-photo-1172253.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                                    alt=""
                                    style={{position:"absolute",height:"7rem",width:"7rem",alignItems:"center", top:"4rem",zIndex:"2"}}
                                    className="img-thumbnail rounded-circle "
                                    />
                                </div>
                                </Col>
                                </Row>
                            </CardBody>
                            <CardBody>
                                <Row>
                                    <Col sm="7">
                                        <h4>DARSHAN V</h4>
                                        <h6 className="text-muted">In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.
                                        </h6>
                                        {/* <h2><BsGithub src="www.google.com"/> <BsLinkedin/></h2> */}
                                        <BsLinkedin className='mt-1' style={{height:"30px",width:"30px", color:"#0A66C2",marginRight:"1rem"}}/>                 
                                        <BsGithub className='mt-1' style={{height:"30px",width:"30px",marginRight:"2px"}}/>

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
                        <Card className="overflow-hidden">
                            <CardBody>   
                            <h3>Skills</h3>                        
                            {
                                tags.map((e)=>{
                                    return(
                                        <Badge pill className="badge-soft-success me-1">{e}</Badge>
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
                                    <h3 style={{textAlign:"center"}}>GROUPS</h3>
                                </CardBody>
                                <hr></hr>
                                {/* {
                                    ar.map((e)=>(<li>{e}</li>))
                                } */}
                                {
                                    ar.map(({photourl,url,name})=>(
                                      
                                        <Col  style={{display:"flex",justifyContent:"center"}} className="mt-3 overflow-hidden group">
                                            <Row >
                                            <Col style={{marginRight:"20px"}} xs={1} >
                                       
                                                {/* <img
                                                    src={photourl}
                                                    className="avatar-xs rounded-circle"
                                                    mr={2}
                                                    style={{height:"50px",width:"50px"}}
                                                    alt=""
                                                /> */}
                                                <Avatar style={{marginRight:"20px"}} alt="Remy Sharp" src={photourl} className="mr-2" />
                                            </Col>
                                            <Col xs={8}>
                                            <div className="flex-grow-1 overflow-hidden">
                                                <h5 className="text-truncate font-size-15 line-3 m-2">
                                                <Link
                                                    style={{textDecoration:"none"}}
                                                    to={`/groups/${url}`}
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
                                    <h3 style={{textAlign:"center"}}>ACTIVITY</h3>
                                </CardBody>
                                {/* <hr></hr> */}
                            </Card>
                        </Col>
                    </Row>

                </Container>
            </div>
    )
}