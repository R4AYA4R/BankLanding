import { useEffect } from "react";
import { useState } from "react"

export const useIsOnScreen=(ref)=>{
    const [isIntersectingNow,setIsIntersectingNow]=useState({
        productsIntersecting:false,
        casesIntersecting:false,
        featuresIntersecting:false,
        questionsIntersecting:false,
        testimonialsIntersecting:false,
        topIntersecting:false,
    });

    const callback=(entries,observer)=>{
        entries.forEach(entry => {
            if(entry.isIntersecting){
                if(entry.target.id == 'products'){
                    setIsIntersectingNow((prev)=>({...prev,productsIntersecting:true}));
                    observer.unobserve(entry.target);
                }
                if(entry.target.id == 'cases'){
                    setIsIntersectingNow((prev)=>({...prev,casesIntersecting:true}));
                    observer.unobserve(entry.target);
                }
                if(entry.target.id == 'features'){
                    setIsIntersectingNow((prev)=>({...prev,featuresIntersecting:true}));
                    observer.unobserve(entry.target);
                }
                if(entry.target.id == 'questions'){
                    setIsIntersectingNow((prev)=>({...prev,questionsIntersecting:true}));
                    observer.unobserve(entry.target);
                }
                if(entry.target.id == 'testimonials'){
                    setIsIntersectingNow((prev)=>({...prev,testimonialsIntersecting:true}));
                    observer.unobserve(entry.target);
                }
                if(entry.target.id == 'top'){
                    setIsIntersectingNow((prev)=>({...prev,topIntersecting:true}));
                    observer.unobserve(entry.target);
                }
            }
        });
    }

    const observer=new IntersectionObserver(callback);

    useEffect(()=>{
        observer.observe(ref.current);
    },[]);

    return isIntersectingNow;
}   