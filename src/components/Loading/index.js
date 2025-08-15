import { useState, useEffect } from "react";
import "./loading.css";
import "animate.css";

function Loading({ loading }) {

    const [loadingState, setLoadingState] = useState(loading);
    const [hidden, setHidden] = useState(false);

    useEffect(() => {
        setLoadingState(loading);
        setTimeout(() => {
            setHidden(true);
        }, 2500);
    }, [loading]);

    return (
        <div className={`loading ${loadingState ? "" : "animate__animated animate__fadeOut animate__delay-1s"} ${hidden ? "hidden" : ""}`}>
            <div className="loader"></div>
        </div>
    );
}

export default Loading;
 