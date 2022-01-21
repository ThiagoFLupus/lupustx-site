import { useSelector } from 'react-redux';
import Divider from '@mui/material/Divider';

import './FooterSite.css';

function FooterSite(){
    const colorApp= useSelector(state=> state.generalReducer.colorApp);

    return (
        <div className="FooterSite" style={{background: colorApp.mostStrongBack}}>
            <div>
                <h5> Fale conosco</h5>
                <h6> Ficaremos contentes em recebê-lo </h6>
                <div className="dv-soc">
                    <a className="link-product" href="https://instagram.com/lupustx" target="_blank" rel="noreferrer">
                        {/* <img className="img-icon" src={iconInsta} alt=""></img> */}
                        Aesthetic
                    </a>
                </div>
                <div className="dv-soc">
                    <a className="link-product" href="https://linkedin.com" target="_blank" rel="noreferrer">
                        {/* <img className="img-icon" src={iconLinkedin} alt=""></img> */}
                        Consulti
                    </a>
                </div>
            </div>
            <div className="divider-line">
                <Divider sx={{ borderBottomWidth: 3 }} />
            </div>
            
            <div className="marca-lupus-footer"> <h5> Lupus TX - 2022 </h5> </div>
        </div>
    );
}

export default FooterSite;