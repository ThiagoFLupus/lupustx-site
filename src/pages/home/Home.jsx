import { useEffect } from 'react'; 

import '../home/Home.css';
import presentationVideo from '../home/videos/aperto_mao.mp4';

function Home(){
    const scrollEvent= ()=> {
        console.log("jkhjh");
    }
    useEffect(()=> {
        document.addEventListener('scroll', scrollEvent)
        return _ => {
            window.removeEventListener('scroll', scrollEvent)
          }
    }, []);
    return(
        <div className="Home">
            <div>
                <video 
                    className="video-presentation"
                    autoPlay="autoplay" 
                    loop="loop"
                    muted
                >
                    <source src={presentationVideo} type="video/mp4" />
                </video>
            </div>
        </div>
    );
}

export default Home;