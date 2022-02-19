import React from 'react';
import './Header.css';
import memesData from './memesData.js'

export default function Header(){

    const [image, setImage] = React.useState(``);
    const [meme, setMeme] = React.useState({
        lefttext:``,
         righttext:``,
         randomMeme:``
    })

    const [allMemeImages, setAllMemeImages] = React.useState(memesData)

        let randomNumber=Math.floor(Math.random()*100);
        
        function  callForRandomMeme(){
        setMeme(
            prevState=>{
                return {...prevState, randomMeme:memesData.data.memes[randomNumber].url}

            }

    
        )
    }

    function handleChange(event) {
        const {name, value} = event.target
        setMeme(prevMeme=>({
            ...prevMeme,
            [name]:value
        }))
    }


    return (
        <div className='belowp'>
            
            <div className='form'>

                <input type="text" placeholder='Shut up' 
                name="lefttext" 
                value={meme.lefttext}
                onChange={handleChange}
                >

                </input>
                <input type="text" 
                placeholder='And take my money' 
                name="rightext" value={meme.righttext} 
                onChange={handleChange}>
                </input> 
                
            </div>
            
            <button onClick={callForRandomMeme} 
            className='btn--getnew'>
                Get a new meme image 🖼
            </button>

            <div className='image'>
            <img src={meme.randomMeme} 
            alt="Press the above button to load the meme" 
            className="image--meme"/>

            <h2 className="meme--text top">{meme.lefttext}</h2>
            <h2 className="meme--text bottom">{meme.righttext}</h2>
            </div>
            
        </div>
    )
}