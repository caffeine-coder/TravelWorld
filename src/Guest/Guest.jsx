import React, {useState} from "react";
import './guest.css';
import { MdPersonAddAlt1, MdPersonRemoveAlt1, MdOutlineRemove, MdOutlineAdd } from "react-icons/md";



function Guest(props) {

    
  const [counter, setCounter] = useState(0)


  const increment = () => {
    // Counter state is incremented
    setCounter(counter + 1)
  }
  
  const decrement = () => {
    // Counter state is decremented
    if(counter>0){
    setCounter(counter - 1)
    }
    else
    {
        alert('Number of guests are empty')
    }
  }

  const addperson = <MdPersonAddAlt1 className="icon" onClick={increment}/>;
  const removeperson = <MdPersonRemoveAlt1 className="icon" onClick={decrement}/>;
  const add = <MdOutlineAdd className="icon" onClick={increment}/>;
  const remove = <MdOutlineRemove className="icon" onClick={decrement}/>;

    return (<div className="guest">
           <div className="guestcard">
            <div className="title">{props.title}</div>
            <div className="rightcontent">
            {props.removeicon==='removeperson'? removeperson: remove}
                <text className="count">{counter}</text>
            {props.addicon==='addperson'? addperson:add}
            </div>
           </div>
    </div>)
}

export default Guest;