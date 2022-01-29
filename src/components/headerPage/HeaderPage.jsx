import './HeaderPage.css';

/*
*  props: {
*       titleText: ''
*       firstTitle: true | false,
*       imgBack: '',
*       colorBack: '',
*       colorText: '',
*       height: ''
*  }
*/
function HeaderPage(props){
    let defFirstTitle = 'first-title';
    if(!props.firstTitle) defFirstTitle = 'first-img';
    return (
        <div className="HeaderPage">
            <div 
                className={`area-title-${defFirstTitle}`} 
                style={{height: `${props.height}`, color: `${props.colorText}`, background: `${props.colorBack}`, textAlign: "center"}}
            >
                <h3> {props.titleText} </h3>
            </div>
            <div 
                className={`area-img-${defFirstTitle}`} 
                style={{height: `${props.height}`, backgroundImage: `url(${props.imgBack})`}}
            >
            </div>
        </div>
    );
}

export default HeaderPage;