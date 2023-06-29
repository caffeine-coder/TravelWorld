import React from "react";
import './guestcardlist.css';
import Guest from "../Guest/Guest";
import { MdPersonAddAlt1, MdPersonRemoveAlt1, MdOutlineRemove, MdOutlineAdd } from "react-icons/md";




function GuestCardList() {

    const addperson = <MdPersonAddAlt1 className="icon"/>;
    const removeperson = <MdPersonRemoveAlt1 className="icon"/>;
    const add = <MdOutlineAdd className="icon"/>;
    const remove = <MdOutlineRemove className="icon"/>;
    return (<div className="guestcardlist">
      <Guest addicon={addperson} removeicon={removeperson} title='Adults'/>
      <Guest addicon={addperson} removeicon={removeperson} title='Children'/>
      <Guest addicon={add} removeicon={remove} title='Room(s)'/>
    </div>)
}

export default GuestCardList;