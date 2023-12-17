import React,{useState} from "react";

function Search(){
    const list = [
        "Banana",
        "Apple",
        "Orange",
        "Mango",
        "Pineapple",
        "Watermelon"
      ];
    const [value, setValue]=useState(list);
    const handle=(event)=>{
        if(event.target.value ===""){
            setValue(list);
            return;
        }
        const filterlist = list.filter(
            (item)=>item.toLowerCase().indexOf(event.target.value.toLowerCase())!==-1
        );
        setValue(filterlist);
    }
    return(
        <div>
            <label >search :</label>
            <input type="search"
            onChange={handle}
             />
            <ul>
               {value&&value.map((item,index)=>
                 <li key={index}>{item}</li>)}
            </ul>
        </div>
    )
}
export default Search;