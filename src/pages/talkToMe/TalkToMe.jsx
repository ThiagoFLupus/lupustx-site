import { useSelector } from 'react-redux';

import HeaderPage from '../../components/headerPage/HeaderPage';
import PanelTwoColumns from '../../components/panelTwoColumns/PanelTwoColumns';
import ImgTalk from '../talkToMe/img-back-talking-to-me.jpg';

function TalkToMe(){
    const colorApp= useSelector(state=> state.generalReducer.colorApp);
    console.log(colorApp);
    return(
        <div>
            <HeaderPage
                firstTitle={false}
                titleText="Fale conosco"
                height="200px"
                colorBack="#3e4454"
                colorText="white"
                imgBack={ImgTalk}
            />

            <PanelTwoColumns />
            <PanelTwoColumns />
            <PanelTwoColumns />
        </div>
    );
}

export default TalkToMe;