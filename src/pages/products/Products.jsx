import { useSelector } from 'react-redux';

import HeaderPage from '../../components/headerPage/HeaderPage';
import ImgProduct from '../products/img-back-products.jpg';

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
        </div>
    );
}

export default Products;