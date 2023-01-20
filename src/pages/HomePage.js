import React from "react";

export default function HomePage(){
    const [Total,setTotal] = React.useState(0);
    const [input,setInput] = React.useState(0);
    function buttonPress(button) {
        console.log(button);
        if(!input){
            return;
        }
        const value=parseInt(input);
        switch(button){
            case 'add':
                setTotal((curr)=>curr+value);
                break;
            case 'sub':
                setTotal((curr)=>curr-value);
                break;
            case 'mul':
                setTotal((curr)=>curr*value);
                break;
            case 'div':
                setTotal((curr)=>curr/value);
                break;
            default:
                console.log("invalid button");

        }
        setInput(0);


        console.log(input);
        
    }
    return <div style={style.main}> 
    <div style={style.box}>
        <h1 style={style.title}>Total</h1>
        <h2 style={style.title}>{Total}</h2>
        <div style={style.inputContainer}>
            <p style={style.title}>Enter Number:</p>
            <input style={style.input}
            value={input}
            type='number'
            placeholder='enter number'
            onChange={(event)=>setInput(event.target.value)}
            />
            <div style={style.buttonContainer}>
                <button style={style.button} onClick={()=>buttonPress('add')}>+</button>
                <button style={style.button} onClick={()=>buttonPress('sub')}>-</button>
                <button style={style.button} onClick={()=>buttonPress('mul')}>x</button>
                <button style={style.button} onClick={()=>buttonPress('div')}>/</button>
            </div>
        </div>
    </div>
    
    </div>
}

const style={
    main:{
        width:'100vw',
        height:'100vh',
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        fontFamily:'Calibri',
        backgroundColor:'rgb(162, 135, 187) ',

    },
    box:{
        boxShadow: '0px 10px 15px -3px rgba(0,0,0,0.1)',
        width:500,
        height:500,
        borderRadius:50,
        backgroundColor:'white',
        padding:30,
    },
    title:{
        textAlign:'center',

    },
    inputContainer:{
        display:'grid',
        justifyContent:'center',

    },
    input:{
        padding:8,
        border:'2px solid pink',
        borderRadius:10,
        fontSize:20,
        
    },
    button:{
        border:'none',
        padding:10,
        borderRadius:10,
        backgroundColor:'hotpink',
        color:'white',
        minWidth:40,
        minHeight:40,

    },
    buttonContainer:{
        marginTop:40,
        display:'flex',
        justifyContent:'space-evenly',
    }
    
};