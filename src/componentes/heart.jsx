import './heart.css';
import { GrCatalog  } from "react-icons/gr";
import { GrEmergency  } from "react-icons/gr";
import { useState } from 'react';

const Heart = ()=>{

    const [liked,setLiked] = useState (false)

    const handleClick = ()=>{
        liked == true ? setLiked(false) : setLiked(true)
    }

    return(

        <div onClick={handleClick}>
            {liked == true ? <GrEmergency className='asterisco'/> : <GrCatalog className='libro'/> }
            
        </div>

    )
}
export default Heart;