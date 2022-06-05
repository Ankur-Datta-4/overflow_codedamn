import React, { useState, useEffect, useRef } from "react";
import NET from "vanta/dist/vanta.net.min";
import LP1 from "../Components/LP1";

function Landing() {

    const styles = {
        text:
        {
            fontSize: "8rem",
            marginTop: "1rem",
            marginLeft: "4.5rem",
            fontWeight: "600",

        },
        animation:
        {
            height: "20rem",
            width: "80rem",
        }
    }

    const [vantaEffect, setVantaEffect] = useState(0);
    const myRef = useRef(null);
    useEffect(() => {
        if (!vantaEffect) {
            setVantaEffect(
                NET({
                    el: myRef.current,
                    mouseControls: true,
                    touchControls: true,
                    gyroControls: true,
                    minHeight: 200.0,
                    minWidth: 200.0,
                    scale: 1.0,
                    scaleMobile: 1.0,
                    color: 0xfff0,
                    backgroundColor: 0x000,
                })
            );
        }
        return () => {
            if (vantaEffect) vantaEffect.destroy();
        };
    }, [vantaEffect]);
    return (
        <div className="wrapper">


            <div style={{ height: "100vh", zIndex: "-1" }}
                ref={myRef}>
            </div>

            <div style={{ height: "40rem", display: "flex", flexDirection: "row  " }}>
                <div style={styles.text}><span style={{ color: "#000D6B" }}>Discover A</span> <span style={{ color: "rgb(148,70,232)" }}>world without</span>  <span style={{
                    color: "#7900FF"
                }}>Limits</span> </div>

                <div style={styles.animation} >

                    <LP1 />
                </div>

            </div>



        </div >


    );
}

export default Landing;