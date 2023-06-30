import React, {useState} from "react";
import './guestcardlist.css';
import Guest from "../Guest/Guest";
import { MdPersonAddAlt1, MdPersonRemoveAlt1, MdOutlineRemove, MdOutlineAdd } from "react-icons/md";




function GuestCardList() {
    return (<div className="guestcardlist">
      <Guest addicon={'addperson'} removeicon={'removeperson'} title='Adults'/>
      <Guest addicon={'addperson'} removeicon={'removeperson'}  title='Children'/>
      <Guest addicon={'add'} removeicon={'remove'} title='Room(s)'/>
    </div>)
}

export default GuestCardList;