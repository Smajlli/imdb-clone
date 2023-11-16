import { useState, useEffect } from "react";

const screenSize = () => {
    const [windowSize, setWindowSize] = useState({
        width: window.innerWidth,
        height: window.innerHeight
    });

    useEffect(() => {
        const handleScreenResize = () => {
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight
            });
        };

        window.addEventListener('resize', handleScreenResize);

        return () => {
            window.removeEventListener('resize', handleScreenResize);
        };

    }, []);

    return windowSize;
}

export default screenSize;