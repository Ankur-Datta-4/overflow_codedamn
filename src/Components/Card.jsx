
import React, { useState } from "react";
import "../Components/styles/Card.css";
import food from '../Components/logo.png'
const Cardi = ({ post: props }) => {
    console.log(props);

    let [like, setLike] = useState(false);
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
            maxWidth: "100%"
        }
    }
    return (

        <div style={styles.CardStyles} className="card mt-5">
            <div className="card-header">
                <div className="profile">
                    <span className="letter"></span>
                </div>
                <div className="card-title-group">
                    <h5 className="card-title">{props.title}</h5>
                    <h7 className="card-date">{props.date}</h7>
                </div>
            </div>

            <div style={{display:"flex",justifyContent:"center"}}>{props.image.photourl && <img style={{height:"50%",width:"70%"}} className="card-image" src={props.image.photourl} alt="Logo" />} </div>

            <div className="card-text">{props.description}</div>

            <div className="card-like-bar">

                <div onClick={() => { setLike((prev) => !prev) }}
                    style={{
                        display: like ? "block" : "none",
                        width: "20px"
                        , height: "20px"
                    }}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clip-rule="evenodd" />
                    </svg>
                </div>


                <div onClick={() => { setLike((prev) => !prev) }}
                    style={{
                        display: !like ? "block" : "none",
                        width: "20px"
                        , height: "20px"
                    }}>
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                </div>

            </div>
        </div>
    );
}

export default Cardi;