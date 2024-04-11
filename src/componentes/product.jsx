import './product.css'; 
import AddCard from './AddCard'; 


const Producto = (props)=>{ 
    return( 
        <div className="product"> 
            <div className='product-conteiner-texto'> 
                <h3 className='img-name'>{props.name}</h3> 
                <p className='img-descripcion'>{props.descripcion}</p> 
            </div> 
            {props.showAddCard && <AddCard />}
        </div> 
    ) 
} 
export default Producto; 