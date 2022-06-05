import { useState } from 'react';
import '../Components/styles/posti_.css'
import { MdAddPhotoAlternate } from "react-icons/md";

import {useSelector} from 'react-redux'
import {selectUserName,selectUserPhotoURL,selectUserSlug} from '../Features/User/userSlice'

import { Slide } from '@mui/material';
import axios from 'axios';

const SERVERURL="http://localhost:1337/api"

const PostCompi = ({setPosts}) => {

    const photoURL=useSelector(selectUserPhotoURL)
    const name=useSelector(selectUserName)
    const slug=useSelector(selectUserSlug)

    const [vis, setVis] = useState(false);
    const [textContent, setText] = useState("");
    const [url, setPhotoUrl] = useState("");
    // const [finalObject, setFinalObject] = useState(
    //     {
    //         content: "",
    //         photoURL: "",
    //     })
    const styles =
    {
        photoIcon:
        {
            width: "30px",
            height: "30px",
            marginRight: "10px"
        },
        upload:
        {
            display: "flex",
            flexDirection: "row",
            fontSize: "17px",

        },

        but:
        {
            width: "80px",
            paddingTop: "5px",
            paddingBottom: "5px",
            backgroundColor: "#0A66C2",
            color: "white",
            borderRadius: "15px",
            border: "0px",
            marginTop: "10px",
            marginBottom: "10px",


        },
        input:
        {
            // borderRadius: "1rem",
            border: "0px",
            color:"blue",
            // outlineStyle: "solid",
            // outlineColor: "black",
            // outlineWidth: "thin",
            width: "18rem",
            paddingLeft: "1rem",
            boxShadow: "2px 2px 2px 2px #888888"
        }
    }



    const textRecording = (e) => {

        e.preventDefault();
        // console.log(e.target.value)
        setText(e.target.value)
        // console.log("this state Value --> ", textContent)    
    }

    const URLRecording = (e) => {
        e.preventDefault();
        // console.log(e.target.value)
        setPhotoUrl(e.target.value)
    }
    const clicked = () => {
        // alert("I am clicked");
        // let val = document.getElementsByClassName("textHere").innerHTML;
        // console.log(document.getElementsByClassName("textHere").innerText;
        let obj={
            parentId:slug,
            parentName:name,
            parentPhoto:photoURL,
            content:textContent,
            photoURL:url,
            isGroup:false
        }
        // finalObject.content = textContent;
        // finalObject.photoURL = url;
        console.log(obj);

        axios.post(`${SERVERURL}/post`,obj)
        .then((res)=>{
            if(!res.data.err){
                alert('Posted successfully!')
                
                setText('');
                setPhotoUrl('')
                setPosts((prev)=>[...prev,res.data.post])
                setVis(false);
            }
        }).catch((err)=>{
            console.log(`Error occured while posting`)
            console.log(err)
        })
        // console.log(textContent);
    }
    return (
        <div >
            <div className="card" style={{ marginRight: "1rem", marginLeft: "2rem",marginTop: "20px",  borderRadius: "10px" }}>
                <header style={{ marginLeft: "10px" }}>
                    <h4 style={{cursor:"pointer"}} onClick={() => setVis((prev) => !prev)} className="text-orange-700"> Create a post</h4>
                    <hr style={{ marginRight: "20px" }} />
                </header>
                <div>
                    <div style={{ display: "flex" }} className="conTent">
                        <img style={{ marginLeft: "2rem", borderRadius: "50%", width: "4rem", height: "4rem", marginRight: "1rem" }}
                            src={photoURL} />


                        <button style={{
                            transitionProperty: "display", transition: "1s all ease"
                            , marginBottom: !vis ? "20px" : "0px",
                            display: !vis ? "block" : "none", backgroundColor: "#0094D7", outline: "none", border: "none",
                            borderRadius: "14px", "padding": "1px", fontSize: "18px", color: "white", fontWeight: "600", width: "230px"
                        }} onClick={() => setVis((prev) => !prev)}>START A POST</button>



                        <div style={{ transition: "1s all ease", display: !vis ? "none" : "block", width: "50%" }}>
                            <h3 style={{ marginTop: "0.3rem", marginLeft: "0.2rem" }}>{name}</h3>

                            {/* <h4 style={{ fontSize: "1.1rem" }}>post-here</h4> */}
                        </div>

                    </div>
                </div>


                <textarea onChange={textRecording}
                    className='textHere'
                    style={{ transitionProperty: "display", transition: "1s all ease", display: !vis ? "none" : "block", marginTop: "25px", padding: "1rem", outline: "none" }}
                    placeholder="Typehere . . ."
                    value={textContent}
                    name="textArea" id="inputBox"
                    cols="2"
                    rows="10">

                </textarea>

                <div style={{ transitionProperty: "display", transition: "1s all ease", display: !vis ? "none" : "block" }}>

                    <div style={styles.upload} className='photoUploads'>
                        <MdAddPhotoAlternate style={styles.photoIcon} />
                        <h2 style={{ fontSize: "1rem",marginTop:"0.2rem",marginRight: "1rem", fontFamily: "sans-serif" }}>Photo URL :</h2>
                        <input onChange={URLRecording} placeholder='  Enter Photo URL' type="text" style={styles.input} value={url}/>

                    </div>
                    <br />
                    <button style={styles.but} onClick={clicked}>POST</button>

                </div>
            </div>



        </div >
    );
}

export default PostCompi;