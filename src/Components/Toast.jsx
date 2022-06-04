import React, { useState } from "react";

import { Button, Card, CardBody, Col, Container, Label, Row } from "reactstrap";
import toastr from "toastr";
import "toastr/build/toastr.min.css";


export default function ToastShow(title1,mes,status){
    const [showEasing, setshowEasing] = useState("swing");
    const [hideEasing, sethideEasing] = useState("linear");
    const [showMethod, setshowMethod] = useState("fadeIn");
    const [hideMethod, sethideMethod] = useState("fadeOut");
    const [showDuration, setshowDuration] = useState(300);
    const [hideDuration, sethideDuration] = useState(1000);
    const [timeOut, settimeOut] = useState(5000);
    const [extendedTimeOut, setextendedTimeOut] = useState(1000);

    function showToast() {
        const ele=status; //error,success
        const position ="toast-top-right";

        let toastType;
        const title = title1;
        let message = mes;
        const closeButton = true;

        const showEasing ="swing";

        //Hide Easing
        const hideEasing ="linear";
    
        //show method
        const showMethod ="fadeIn";
    
        //Hide method
        const hideMethod ="fadeOut";
    
        //show duration
        const showDuration =300;
    
        //Hide duration
        const hideDuration =1000;
    
        //timeout
        const timeOut =5000;
    
        //extended timeout
        const extendedTimeOut = 1000;

        toastr.options = {
            positionClass: positionClass,
            timeOut: timeOut,
            extendedTimeOut: extendedTimeOut,
            closeButton: closeButton,
            debug: debug,
            progressBar: progressBar,
            preventDuplicates: preventDuplicates,
            newestOnTop: newestOnTop,
            showEasing: showEasing,
            hideEasing: hideEasing,
            showMethod: showMethod,
            hideMethod: hideMethod,
            showDuration: showDuration,
            hideDuration: hideDuration
          };
    }
    // function clearToast() {
    //     toastr.clear();
    // }
}

