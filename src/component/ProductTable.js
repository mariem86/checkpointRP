import React from 'react';
import PropTypes from 'prop-types'

function ProductTable({product}) {
    return (
       
        <div className='table'>
    
          <table >{product.map(product=>
          
          <tr>
              
            <th>name</th>
              <td >{product.name}</td>
           <th>category</th>
            <td>{product.category}</td>
            <th>price</th>
           <td>{product.price}</td>
           </tr> 
           )}
           
            
            
            
             </table>
              </div>
         
            
            
           
            
             )
             // eslint-disable-next-line
             ProductTable.ProTotype={
                optionalUnion: PropTypes.oneOfType([
                    PropTypes.string,
                    PropTypes.number,
                    ]),
             }    
            }



 
 export default ProductTable
