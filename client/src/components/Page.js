import React from "react";
import { animated, useSpring } from "react-spring";

function Page({ children }) {
    const fadeIn = useSpring({
        from: {
            opacity: 0,
            transform: `translate3d(0,5rem,0)`
        },
        to: {
            opacity: 1,
            transform: `translate3d(0rem,0,0)`
        },
        config: { mass: 1, tension: 175, friction: 30 }
    });

    return <animated.div style={fadeIn}>{children}</animated.div>;
}

export default Page;