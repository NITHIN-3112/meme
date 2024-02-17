import React from "react"
// import memesData from "../memesData.js"
export default function Meme(){
    
    // const [SetImage,setMemeImage]=React.useState("http://i.imgflip.com/1bij.jpg")
    const [meme,setMeme]=React.useState({
        toptext:"",
        bottomtext:"",
        randomImage:"http://i.imgflip.com/1bij.jpg"
        
    })
    const [allMemeImage,MemeImage]=React.useState([])
    React.useEffect(() => {
       fetch("https://api.imgflip.com/get_memes")
       .then(res => res.json())
       .then(data => MemeImage(data.data.memes))
        
    },[])
    // console.log(allMemeImage)
    function getImage(){
        //  const allMemeImage = memesData.data.memes
        const randomNumber = Math.floor(Math.random() * allMemeImage.length)
        const url =allMemeImage[randomNumber].url
        setMeme(prevImage => ({
            ...prevImage,
            randomImage : url
        }))
        
    }
    function handleChange(event){
            const {name,value}  = event.target
            setMeme(prev => ({
               ...prev,
               [name]:value 
            }))
        }
    return(
       
        <main>
            <div className="form">
                <input type="text" 
                placeholder="top-text" 
                className="form-input"
                name ="toptext"
                value={meme.toptext}
                onChange={handleChange} />
                <input type="text" 
                placeholder="bottom-text" 
                className="form-input"
                name ="bottomtext"
                value={meme.bottomtext}
                onChange={handleChange}/>  
                <button className="form-button" onClick={getImage}> Get a new  meme Image</button>
                
             
            </div>
            <div className="meme">
                <img src={meme.randomImage} className="meme-img" />
                <h2 className="meme--text top">{meme.toptext}</h2>
                <h2 className="meme--text bottom">{meme.bottomtext}</h2>
            </div>
               
        </main>
        
        
    )
}