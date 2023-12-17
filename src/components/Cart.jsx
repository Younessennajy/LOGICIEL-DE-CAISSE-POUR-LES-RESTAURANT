import React,{useState} from 'react';
import { useEffect } from 'react';
import "../styles/cart.css";

const Cart = ({cart, setCart, handleChange}) => {
    const [style,setstyle] = useState(false);
    const [num_recu, setNumRecu] = useState(1);
    const [price, setPrice] = useState(0);
    const today = new Date();
    const date = today.getFullYear()+'/'+today.getMonth()+'/'+today.getDay()+'  '+today.getHours()+':'+today.getMinutes()+':'+today.getSeconds();
    const handlePrice = ()=>{
        let ans = 0;
        cart.map((item)=>(
            ans += item.amount * item.price
        ))
        setPrice(ans);
    }

    const handleRemove = (id) =>{
        const isConfirmed = window.confirm("Are you sure you want to remove this item?");
    if (isConfirmed) {
        const arr = cart.filter((item)=>item.id !== id);
            setCart(arr);
    }
        
    }
    
    useEffect(()=>{
        handlePrice();
    })
    const monstyle = {
        display: style ? 'block' : 'none'
    };
    
    const handlerecu = () => {
        setstyle(!style);
    };
   
    
    const generateReceiptContent = () => {
        let content = `Receipt for Order ${num_recu}\n`;
        content += `Date: ${date}\n\n`;
        
        content += "Products:\n";
        cart.forEach((item) => {
          content += `${item.amount} ${item.title} - ${item.price}\n`;
        });
      
        content += `\nTotal: DH - ${price}\n`;
      
        return content;
      };
      
    const handleDownload = () => {
        const receiptContent = generateReceiptContent(); 
        const blob = new Blob([receiptContent], { type: 'text/plain' });
        const link = document.createElement('a');
    
        link.href = URL.createObjectURL(blob);
        link.download = `receipt_${num_recu}.txt`;
        link.click();
        setNumRecu(num_recu+1);
      };

  return (
    <article>
        {cart?.length>0?
            (cart.map((item)=>(
                <div className="cart_box" key={item.id}>
                    <div className="cart_img">
                        <img src={item.img} alt='1'/>
                        <p>{item.title}</p>
                    </div>
                    <div>
                        <button onClick={()=>handleChange(item, +1)}> + </button>
                        <button>{item.amount}</button>
                        <button onClick={()=>handleChange(item, -1)}> - </button>
                    </div>
                    <div>
                        <span>{item.price}</span>
                        <button onClick={()=>handleRemove(item.id)} >Remove</button>
                    </div>
                </div>
            ))) : (<h1 style={{fontSize:"40px",textAlign:"center",fontFamily:"monospace", color:"red", margin:"15% 0px"}}>aucun element</h1>)}
        <div className='total'>
            <span>Total Price of your Cart</span>
            <span>DH - {price}</span>
        </div>
        <div className="button">
            <button onClick={handlerecu}>Afficher recus</button>
            <button onClick={handleDownload}>Telecharger recu</button>
        </div>

        <div className='recu' style={monstyle}>
            <h1>Reçu N* {num_recu}</h1>
            <h3> {date}</h3>

            <table>
                <tr>
                    <td>nombre</td>
                    <td>produit</td>
                    <td>prix</td>
                </tr>
                <br/>
                    {
                        cart.map(
                            (item)=>(
                                <tr key={item.id}>
                                    <td>{item.amount}</td>
                                    <td>{item.title}</td>
                                    <td>{item.price}</td>  
                                    
                                </tr>                         
                            )
                        )
                    }<br/>
                    <tbody>                    
                                <tr>
                                    total : <td  colspan="2">{price}</td>                                    
                                </tr>                         
                    </tbody>
            </table>
            <h2 className='remercie'>Merci de Votre visite <br /> A Bientot</h2>
            

        </div>
    </article>
  )
}

export default Cart