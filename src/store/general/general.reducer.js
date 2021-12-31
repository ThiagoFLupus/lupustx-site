const colorApp= {
    generalBack: '#e0ffff',
    secondaryBack: '#53b8bb',
    moreStrongBack: '#055052',
    detailBack: '#f3f2c9',
    mostStrongBack: '#003638'
}

let dataGeneral= {
    height: document.documentElement.clientHeight,
    width: document.documentElement.clientWidth,
    colorApp
}
// eslint-disable-next-line
export default function (state= dataGeneral, action){
    switch(action.type){
        case "SETSIZEWINDOW":
            state.height= document.documentElement.clientHeight;
            state.width= document.documentElement.clientWidth;
            return {...state};
        default:
            return {...state};
    }
}