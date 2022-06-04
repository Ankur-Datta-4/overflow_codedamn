import { useState } from 'react';
import '../Components/styles/posti_.css'
import { MdAddPhotoAlternate } from "react-icons/md";

import { Slide } from '@mui/material';
const PostCompi = () => {


    const [vis, setVis] = useState(false);
    const [textContent, setText] = useState("");
    const [url, setPhotoUrl] = useState("");
    const [finalObject, setFinalObject] = useState(
        {
            text: "",
            photoURL: "",
        })
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
            borderRadius: "15px",
            border: "0px",
            // outlineStyle: "solid",
            // outlineColor: "black",
            // outlineWidth: "thin",
            width: "20rem",
            paddingLeft: "10px",
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
        console.log(e.target.value)
        setPhotoUrl(e.target.value)
    }
    const clicked = () => {
        // alert("I am clicked");
        // let val = document.getElementsByClassName("textHere").innerHTML;
        // console.log(document.getElementsByClassName("textHere").innerText;

        finalObject.text = textContent;
        finalObject.photoURL = url;
        console.log(finalObject);
        // console.log(textContent);
    }
    return (
        <div>
            <div className="card" style={{ paddingRight: "5px", paddingLeft: "10px", marginLeft: "20px", marginTop: "40px", width: "60%", borderRadius: "10px" }}>
                <header style={{ marginLeft: "10px", marginTop: "5px" }}>
                    <h1 className="text-orange-700"> Create a Post</h1>
                    <hr style={{ marginRight: "20px" }} />
                </header>
                <div>
                    <div style={{ display: "flex" }} className="conTent">
                        <img style={{ marginLeft: "10px", borderRadius: "50%", width: "70px", height: "70px", marginRight: "2%" }}
                            src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cGVvcGxlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=100&q=60" alt="imgage here" />


                        <button style={{
                            transitionProperty: "display", transition: "1s all ease"
                            , marginBottom: !vis ? "20px" : "0px",
                            display: !vis ? "block" : "none", backgroundColor: "#0094D7", outline: "none", border: "none",
                            borderRadius: "14px", "padding": "1px", fontSize: "18px", color: "white", fontWeight: "600", width: "230px"
                        }} onClick={() => setVis((prev) => !prev)}>START A POST</button>



                        <div style={{ transition: "1s all ease", display: !vis ? "none" : "block", width: "100px" }}>
                            <h3 style={{ marginTop: "3.5%", marginLeft: "2%" }}>NAME </h3>

                            <h4 style={{ fontSize: "1.1rem" }}>post-here</h4>
                        </div>

                    </div>
                </div>


                <textarea onChange={textRecording}
                    className='textHere'
                    style={{ transitionProperty: "display", transition: "1s all ease", display: !vis ? "none" : "block", marginTop: "25px", paddingLeft: "5px", outline: "none" }}
                    placeholder="Typehere . . ."
                    name="textArea" id="inputBox"
                    cols="2"
                    rows="10">

                </textarea>

                <div style={{ transitionProperty: "display", transition: "1s all ease", display: !vis ? "none" : "block" }}>

                    <div style={styles.upload} className='photoUploads'>
                        <MdAddPhotoAlternate style={styles.photoIcon} />
                        <h2 style={{ fontSize: "22px", marginRight: "20px", fontFamily: "sans-serif" }}>Photo URL :</h2>
                        <input onChange={URLRecording} placeholder='  Enter Photo URL' type="text" style={styles.input} />

                    </div>
                    <br />
                    <button style={styles.but} onClick={clicked}>POST</button>

                </div>
            </div>



        </div >
    );
}

export default PostCompi;