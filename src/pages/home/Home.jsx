import { useSelector } from 'react-redux'; 

import '../home/Home.css';
import presentationVideo from '../home/videos/aperto_mao.mp4';

function Home(){
    const colorApp= useSelector(state=> state.generalReducer.colorApp);
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

            <div className="logo-home">

            </div>

            <section className="sec-presentation" style={{background: colorApp.secondaryBack}}>
                <section>
                    <div className="dv-presentation"> Simplicidade </div>
                    <div className="dv-presentation"> Fluidez </div>
                    <div className="dv-presentation"> Boa relação custo-benefício </div>
                    <div className="dv-presentation"> são princípios que norteiam nossos serviços </div>
                </section>
            </section>
        </div>
    );
}

export default Home;