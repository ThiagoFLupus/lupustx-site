import { useSelector } from 'react-redux';

import HeaderPage from '../../components/headerPage/HeaderPage';
import FastPresentation from '../../components/fastPresentation/FastPresentation';
import ImgProduct from '../products/img-back-products.jpg';
import ImgProductList from '../products/slide1.jpg';

function Products(){
    const colorApp= useSelector(state=> state.generalReducer.colorApp);
    console.log(colorApp);
    return(
        <div>
            <HeaderPage
                firstTitle={true}
                titleText="Conheça nossos produtos"
                height="200px"
                colorBack="#3e4454"
                colorText="white"
                imgBack={ImgProduct}
            />

            <FastPresentation 
                innerText="Para você que é da área de estética, confira nosso sistema de gestão Aesthetic."
                colorText="white"
                pageLink="/products/aesthetic"
                imgLogo={ImgProductList}
            />
            <FastPresentation 
                innerText="Para você que é da área médica, confira nosso sistema de gestão Consulti."
                colorText="white"
                pageLink="/products/consulti"
                imgLogo={ImgProduct}
            />
        </div>
    );
}

export default Products;