import React, {useRef, useEffect} from "react";
import {mount} from 'marketing/MarketingIndex'

const MarketingApp = () => {
    const ref = useRef(null);

    useEffect(()=>{
        mount(ref.current);//Mount marketing app to the current div which rendered by the container
    },[]);
    return (
        <>
           <div ref={ref}></div>
        </>
    )
}

export default MarketingApp;