import React, { useState } from 'react'

function DropItem(props){
    const [open, setOpen] = useState(false);

    return(
        <li className="drop-item">
            <a href='#' className="icon-button" onClick={() => setOpen(!open)}>
                {props.icon}
            </a>
            {open && props.children}
        </li>
    );
}

function DropDownMenu() {

    function DropDownItems(props) {
        return(
            <a href="#" className="menu-items">
                <span className="icon-button">{props.leftIcon}</span>
                {props.children}
                <span className="icon-button">{props.rightIcon}</span>
            </a>
        );
    }

    return(
        <div className="dropdown">
            <DropDownItems>My profile</DropDownItems>
        </div>
    );
}

const NotificationsDropDown = () => {
    return (
        <div>
            <DropItem>
                <DropDownMenu>
                </DropDownMenu>
            </DropItem>
        </div>
    )
}

export default NotificationsDropDown
