
import { useLottie } from "lottie-react";
import groovyWalkAnimation from "./lp_1.json";



const Example = () => {
    const options = {
        animationData: groovyWalkAnimation,
        loop: true,
        autoplay: true,
    };

    const { View } = useLottie(options);

    return View;
};

export default Example;