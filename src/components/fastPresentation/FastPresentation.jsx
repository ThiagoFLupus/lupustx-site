import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import '../fastPresentation/FastPresentation.css';

/*
*  props: {
*       innerText: '',
*       colorText: '',
*       pageLink: '',
*       imgLogo: '',
*       imgBack: ''
*  }
*/
function FastPresentation(props){
    const colorApp= useSelector(state=> state.generalReducer.colorApp);
    return (
        <div className="FastPresentation" style={props.imgBack ? {backgroundImage: props.imgBack} : {background: colorApp.moreStrongBack}}>
            <div className="dv-text">
                <h5 style={{color: props.colorText}}>{props.innerText}</h5>
                <Link to={`${props.pageLink}`} style={{color: props.colorText}}>
                    Clique e veja!
                </Link>
            </div>
            <div>
                <div className="dv-fast-logo">
                    <Link to={`${props.pageLink}`}>
                        <img
                            className="img-list-product"
                            src={props.imgLogo}
                            alt=""
                        ></img>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default FastPresentation;