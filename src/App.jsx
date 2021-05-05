import React from 'react';




const SlotM = (props) => {

    let x = props.x;
    let y = props.y;
    let z = props.z;

    if (x===y && y===z) {
        return (
            <>
            <div className ="slot_timer" >
                <h1>
                    {x} {y} {z} </h1>
                <h1>
                    This is matching
                </h1>
                <hr />
            </div>
            </>
        );
    }else{
        return (
            <>
            <div className ="slot_timer" >
                <h1>
                    {x} {y} {z} </h1>
                <h1>
                    This is not matching
                </h1>
                <hr />
            </div>
            </>
        );
    }
};
const App = () => {
    return<>
            <h1  className= "heading_style">
                 &#x1F3B0; Welcome to {" "}<span style = {{fontWeight :'bold'}}>Slot machine game</span> &#x1F3B0;</h1>
                <div>
                 <SlotM x = '😄' y='😄' z='😄'/> 
                 <hr />
                 <SlotM x = '😄' y = '🚡' z ='😄'/>
                 <hr />
                 <SlotM x ='😄' y='😄' z='😄'/>
                 </div>
    </>;
   
};

export {App,SlotM} ;