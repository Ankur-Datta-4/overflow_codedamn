
import React, { useState } from "react";
import "../Components/styles/Card.css";
import food from '../Components/logo.png'
import axios from "axios";
import { Link } from "react-router-dom";
import Avatar from '@mui/material/Avatar';

const SERVERURL="http://localhost:1337/api"

const Cardi = ({ post: props }) => {
    console.log(props);
    // const navigate=useNavigate()
    let [like, setLike] = useState(false);
    let [count,setCount]=useState(props.likes)
    const styles =
    {
        CardStyles:
        {
            backgroundColor: "whitesmoke",
            color: "#272727",
            padding: "20px",
            margin:"0 auto",
            borderRadius: "10px",
            border: "0px",
            borderColor: "tomato",
            borderStyle: "solid",
            transition: "200ms",
            // maxWidth: "100%",
            minWidth:"100%"
        }
    }

    function hitLike(){
        let inc=1;
        if(like) inc=-1;

        let obj={count,inc}
        axios.patch(`${SERVERURL}/post/${props._id}`,obj)
        .then((res)=>{
            if(!res.data.err){
                setLike((prev)=>!prev)
                setCount((prev)=>prev+inc);
            }
        }).catch((e)=>{
            console.log(`Error while trying to like`)
            console.log(e)
        })
        
    }

    return (

        <div style={styles.CardStyles} className="card mt-5">
            <div className="card-header">
                <div className="profile">
                    {/* <span className="letter"></span> */}
                    <Avatar style={{ verticalAlign: "baseline", cursor:"pointer"}}  src={props.parentPhoto} />
                </div>
                <div className="card-title-group">
                 <Link to={`/user/${props.parentId}`} style={{textDecoration:'none',color:'inherit'}}>  <h5 className="card-title"> {props.parentName}</h5></Link>
                    <h7 className="card-date">{props.createdAt}</h7>
                </div>
            </div>

            <div style={{display:"flex",justifyContent:"center"}}>{props.photoURL && <img style={{height:"50%",width:"70%"}} className="card-image" src={props.photoURL} alt="Logo" />} </div>

            <div className="card-text">{props.content}</div>

            <div className="card-like-bar">

                <div onClick={hitLike}
                    style={{
                        display: like ? "flex" : "none",
                        width: "50%"
                        , height: "30px",
                        color:"#ED4956",
                       cursor:'pointer' 
                    }}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" style={{ marginRight:"15px"}}>
                        <path fill-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clip-rule="evenodd" />
                    </svg>
                    
                    <h4>{count}</h4>
                </div>


                <div onClick={hitLike}
                    style={{
                        display: !like ? "flex" : "none",
                        width: "50%"
                        , height: "30px",
                        cursor:'pointer' 
                        // color:"#ED4956"
                    }}>
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" style={{ marginRight:"15px"}}>
                        <path stroke-linecap="round" stroke-linejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                    
                    <h4>{count}</h4>
                </div>

            </div>
        </div>
    );
}

export default Cardi;