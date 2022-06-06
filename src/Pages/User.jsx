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
  } from "reactstrap"

import GitHubCalendar from 'react-github-calendar';
import { BsLinkedin } from 'react-icons/bs';
import { BsGithub } from 'react-icons/bs';
import { Link, useParams } from "react-router-dom";
import Avatar from '@mui/material/Avatar';
// import TagsInput from 'react-tagsinput'

import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { useSelector } from "react-redux";
import { selectUserSlug } from "../Features/User/userSlice";
import axios from "axios";
// import { useNavigate } from "react-router-dom";
import {useRouter} from 'next/router'

const SERVERURL="http://localhost:1337/api"

export default function User()
{
    const {id}=useParams()
    // const id=`ankurr2002gmailcom`
    const slug=useSelector(selectUserSlug)

    const router=useRouter()
    useEffect(()=>{
        if(slug==="" || !slug){
            router.push('/')
        }
    },[])

    const [privilege,setPrivilege]=useState(id===slug)
    const[tags,setTags]=useState(['react','java','node','abcde'])
    const [user,setUser]=useState()
    const [index,setIndex]=useState(0)
    const [gitUsername,setGitUsername]=useState('')
    // const navigate=useNavigate()

    useEffect(()=>{
        axios.get(`${SERVERURL}/user/ankurr2002gmailcom`)
        .then((res)=>{
            if(!res.data.err){
                if(res.data.user && res.data.user.links[0].provider==="github"){
                    setIndex(1);
                    parseGit(res.data.user.links[0].url)
                }else if(res.data.user){
                    setIndex(0);
                    parseGit(res.data.user.links[1].url)

                }
                setUser(res.data.user)
            }
        }).catch((e)=>{
            console.log(`Error fetching ${id}`)
            console.log(e)
        })
    },[])

    function handleChange(tags){
        setTags(tags)
    }
    function parseGit(link){
        console.log(link)
        let arr=link.split('/');
        console.log(arr[arr.length-1])
        setGitUsername(arr[arr.length-1])

    }
    let ar=[{"photourl":"https://images.pexels.com/photos/1172253/pexels-photo-1172253.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2","url":"/groups","name":"JSdddddddddsdjnc sdddddddd"},{"photourl":"https://images.pexels.com/photos/1172253/pexels-photo-1172253.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2","url":"/groups","name":"JSdddddddddsdjnc sdddddddd"},{"photourl":"https://images.pexels.com/photos/1172253/pexels-photo-1172253.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2","url":"/groups","name":"JSdddddddddsdjncsdddddddd"},{"photourl":"https://images.pexels.com/photos/1172253/pexels-photo-1172253.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2","url":"/groups","name":"JSdddddddddsdjnc sdddddddd"}]
    
    let postsComp=[{"date":"4 June 2022","Url":"https://pbs.twimg.com/profile_images/1479443900368519169/PgOyX1vt_400x400.jpg","content":"This is my first post xD .. Please do comment and share In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available."},{"date":"4 June 2022","Url":"https://images.pexels.com/photos/1172253/pexels-photo-1172253.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2","content":"This is my first post xD .. Please do comment and share "},{"date":"4 June 2022","Url":"https://images.pexels.com/photos/1172253/pexels-photo-1172253.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2","content":"This is my first post xD .. Please do comment and share In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available."},{"date":"4 June 2022","Url":"https://images.pexels.com/photos/1172253/pexels-photo-1172253.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2","content":"This is my first post xD .. Please do comment and share "}]
    
    const selectLastHalfYear = contributions => {
        const currentYear = new Date().getFullYear();
        const currentMonth = new Date().getMonth();
        const shownMonths = 6;
      
        return contributions.filter(day => {
          const date = new Date(day.date);
          const monthOfDay = date.getMonth();
      
          return (
            date.getFullYear() === currentYear &&
            monthOfDay > currentMonth - shownMonths &&
            monthOfDay <= currentMonth
          );
        });
      };

    return(

        user?( <div className="page-content" style={{height:"100%",borderRadius:"45px 45px 0px 0px"}}>
                <Container  style={{height:"100%",position:"relative"}}>
                    <Row className="mt-3">
                        <Card className="overflow-hidden" >
                            <div className="" style={{display:"flex",borderRadius:"15px 15px 0px 0px",justifyContent:"center"}}>
                            <Row style={{  }}  >
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
                                    src={user.photoURL}
                                    alt=""
                                    style={{display:"flex",justifyContent:"center",left:"45%",position:"absolute",height:"7rem",width:"7rem",alignItems:"center", top:"4rem",zIndex:"2"}}
                                    className="img-thumbnail rounded-circle "
                                    />
                                </div>
                                </Col>
                                </Row>
                            </CardBody>
                            <CardBody>
                                <Row>
                                    <Col style={{textAlign:"center"}} >
                                        <h4 >{user.name}</h4>
                                        <h6 className="text-muted">{user.bio}</h6>
                                        {/* <h2><BsGithub src="www.google.com"/> <BsLinkedin/></h2> */}
                                        <a href={user.links[index].url}><BsLinkedin className='mt-1' style={{height:"30px",width:"30px", color:"#0A66C2",marginRight:"1rem"}}/></a>              
                                        <a href={user.links[1-index].url} style={{color:"black"}}><BsGithub className='mt-1' style={{height:"30px",width:"30px",marginRight:"2px"}}/> </a>

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
                            <h3>Interests</h3>                        
                            {
                                user.interests.map((e)=>{
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
                                  user.groups && user.groups.map(({photoURL,name,gid})=>(
                                      
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
                                                <Avatar style={{marginRight:"20px"}} alt="Remy Sharp" src={photoURL} className="mr-2" />
                                            </Col>
                                            <Col xs={8}>
                                            <div className="flex-grow-1 overflow-hidden">
                                                <h5 className="text-truncate font-size-15 line-3 m-2">
                                                <Link
                                                    style={{textDecoration:"none"}}
                                                    to={`/group/${gid}`}
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
                                <hr></hr>
                                <h3>Github</h3>
                                <GitHubCalendar style={{justifyContent:"center"}} username={gitUsername} transformData={selectLastHalfYear}  />
                                {/* <hr></hr> */}
                            </Card>
                        </Col>
                    </Row>
                    
                    <Row className="mt-2">
                        <Card>
                            <CardBody onClick={()=>router.push('/test')}>
                                <h3 style={{textAlign:"center",cursor:'pointer'}}>POSTS</h3>
                            </CardBody>
                            <Row mr={4} mb={5}>                            
                            {
                                postsComp.map(({date,Url,content})=>(
                                    <Col  xl={4} md={6} xs={10}>
                                    <Card  className="mt-3" sx={{ maxWidth: 345 }}>
                                            <CardActionArea>
                                               
                                                
                                                <CardContent>
                                                { date &&
                                                <Typography gutterBottom variant="h5" component="div">
                                                    {date}
                                                </Typography>
                                                }
                                                { content &&
                                                <Typography variant="body2" color="text.secondary">
                                                    {content}
                                                </Typography>
                                                }
                                                </CardContent>
                                                <div style={{display:"flex",justifyContent:"center"}}>
                                                {Url && 
                                                <CardMedia
                                                style={{display:"flex",justifyContent:"center",height:"10rem",width:"8rem"}}
                                                component="img"
                                                // height="100%"
                                                image={Url}
                                                alt="green iguana"
                                                />
                                                
                                                }
                                                </div>
                                            </CardActionArea>
                                     </Card>
                                     </Col>
                                ))
                            }
                            </Row>
                        </Card>
                    </Row>
                </Container>
            </div>
        ):<div>Loading...</div>
    )
}