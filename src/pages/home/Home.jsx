import { useSelector } from 'react-redux'; 
import { useEffect, useState } from 'react';
import { Carousel } from 'react-bootstrap';


import '../home/Home.css';
import presentationVideo from '../home/videos/aperto_mao.mp4';
import iconInsta from '../home/images/instagram_icon.png';
import iconLinkedin from '../home/images/linkedin_icon.png'
import slide1 from '../home/images/slide1.jpg';
import slide2 from '../home/images/slide2.jpg';

function Home(){
    const colorApp= useSelector(state=> state.generalReducer.colorApp);
    // const sizeWindowRedux= useSelector(state=> state.generalReducer.width);
    const [scrollY, setScrollY]= useState(window.scrollY);
    const targetDeslize= document.getElementsByClassName('dv-present');

    const scrollEventDeslize= ()=> {
        if(window.scrollY % 10 === 0) setScrollY(window.scrollY);
    }

    useEffect(()=> {
        document.addEventListener('scroll', scrollEventDeslize);
        return _ => {
            window.removeEventListener('scroll', scrollEventDeslize);
        }
    // eslint-disable-next-line
    }, []); 

    useEffect(()=> {
        Array.from(targetDeslize).forEach((target)=> {
                if((scrollY * 5) > target.offsetTop){
                    target.classList.add('deslize');
                }else{
                    target.classList.remove('deslize');
                }
        })
    // eslint-disable-next-line
    }, [scrollY]);

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

            <section className="sec-presentation" style={{background: colorApp.moreStrongBack}}>
                <section>
                    <div className="dv-present right"> Simplicidade </div>
                    <div className="dv-present left"> Fluidez </div>
                    <div className="dv-present right"> Boa relação custo-benefício </div>
                    <div className="dv-present left"> são princípios que norteiam nossos serviços </div>
                </section>
            </section>

            <section  className="sec-cards-products">
                <div className="dv-slide">
                    <Carousel interval={900}>
                        <Carousel.Item interval={900}>
                            <img
                                className="d-block w-100 item-slide"
                                src={slide1}
                                alt="First slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100 item-slide"
                                src={slide2}
                                alt="Second slide"
                            />
                        </Carousel.Item>
                    </Carousel>
                </div>
            </section>

            <section className="sec-social-icons" style={{background: colorApp.secondaryBack}}>
                <div>
                    <div>
                        Para mais conteúdo, visite-nos em nossas redes sociais!
                    </div>
                    <div className="dv-soc">
                        <a href="https://instagram.com/lupustx" target="_blank" rel="noreferrer">
                            <img className="img-icon" src={iconInsta} alt=""></img>
                        </a>
                    </div>
                    <div className="dv-soc">
                        <a href="https://linkedin.com" target="_blank" rel="noreferrer">
                            <img className="img-icon" src={iconLinkedin} alt=""></img>
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Home;