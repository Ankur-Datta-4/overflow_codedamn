import React, { useState, useEffect, useRef } from "react";
import NET from "vanta/dist/vanta.net.min";

function Landing() {
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

        <div style={{ height: "100vh", zIndex: "-1" }}
            ref={myRef}>



        </div>

    );
}

export default Landing;