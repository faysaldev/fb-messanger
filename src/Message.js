import { Avatar } from '@material-ui/core'
import React, { forwardRef } from 'react'
import { useStateValue } from './StateProvider';

const Message =forwardRef(({id,src,img,username,text},ref)=>{


    const [{user},dispatch]=useStateValue();

    const isLoggend = user.displayName=== username;


    return (
        <div className={`massage ${isLoggend && 'not__me'}`} ref={ref}>
            <div className={`avater ${isLoggend && 'avatar__none'}`}>
            <Avatar src={src} alt="Faysal" />
            <span>{username}</span>
            </div>
            
            <div className={`message__text ${isLoggend && "gest"}`}>
                {img && <img className="msg__img" src={img}/>}

            {text && <h3>{text} </h3>}
            </div>
        </div>
    )
})

export default Message
