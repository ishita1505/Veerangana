export default function Slider(){
    return (
        <div id="carousel" className="flex py-2 overflow-auto no-scrollbar">
            <span>
                <img className="mx-2 lg:h-60 lg:w-160 h-48 w-80 max-w-none rounded-xl sm:w-70" src={process.env.PUBLIC_URL + "/HeadingSectionImages/1.jpg"} />
               
            </span>
            <span>
                <img className="mx-2 lg:h-60 lg:w-160 h-48 w-80 max-w-none rounded-xl sm:w-70" src={process.env.PUBLIC_URL + "/HeadingSectionImages/2.jpg"} />
               
            </span>
            <span>
                <img className="mx-2 lg:h-60 lg:w-160 h-48 w-80 max-w-none rounded-xl sm:w-70" src={process.env.PUBLIC_URL + "/HeadingSectionImages/3.jpg"} />
                
            </span>
            <span>
                <img className="mx-2 lg:h-60 lg:w-160 h-48 w-80 max-w-none rounded-xl sm:w-70" src={process.env.PUBLIC_URL + "/HeadingSectionImages/4.jpg"} />
                
            </span>
            <span>
                <img className="mx-2 lg:h-60 lg:w-160 h-48 w-80 max-w-none rounded-xl sm:w-70" src={process.env.PUBLIC_URL + "/HeadingSectionImages/5.jpeg"} />
                
            </span>
            <span>
                <img className="mx-2 lg:h-60 lg:w-160 h-48 w-80 max-w-none rounded-xl sm:w-70" src={process.env.PUBLIC_URL + "/HeadingSectionImages/6.jpg"} />
              
            </span>
            <span>
                <img className="mx-2 lg:h-60 lg:w-160 h-48 w-80 max-w-none rounded-xl sm:w-70" src={process.env.PUBLIC_URL + "/HeadingSectionImages/7.jpeg"} />
                
            </span>

        </div>
    )
}




