import './App.css';
import ProductConteiner from './componentes/productConteiner';
import Product from './componentes/product';
import data from './products.json';

const App = () => {
    return (
        <ProductConteiner>

            {data.map( product=>
                <Product
                key = {product.name}
                name={product.name}
                descripcion={product.descripcion}
                url= {product.url}
                showAddCard={product.showAddCard}/>
             )}
            
        </ProductConteiner>
    )
}
export default App;
