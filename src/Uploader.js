import React, { useState } from 'react'
import  db,{ storage } from './firebase';
import SendIcon from '@material-ui/icons/Send';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import AppsIcon from '@material-ui/icons/Apps';
import CameraAltIcon from '@material-ui/icons/CameraAlt';
import PhotoIcon from '@material-ui/icons/Photo';
import MicIcon from '@material-ui/icons/Mic';
import { useStateValue } from './StateProvider'
import firebase from 'firebase'

function Uploader() {


    const [text,setText] =useState('');
    const [img,setImg] =useState(null);
  const [{ user }, dispatch] =useStateValue();
    
const handleChange=(e)=>{
    if(e.target.files[0]){
      setImg(e.target.files[0])
    }
  }
  


    const handleUpload=(e)=>{
        e.preventDefault();

  if(img){

    const uploadTask = storage.ref(`images/${img.name}`).put(img);

    uploadTask.on(
      "state_changed",
      snapshot => {},
      error => {
        console.log(error)
      },
      ()=>{

        storage.ref("images").child(img.name).getDownloadURL().then((url)=>{
          db.collection('post').add({
            username:user.displayName,
            avatar:user.photoURL,
            text:text,
            img:url,
            timestamp: firebase.firestore.FieldValue.serverTimestamp()
          })
        })

      }

    )

  }else{
    db.collection('post').add({
      username:user.displayName,
      avatar:user.photoURL,
      text:text,
      img:false,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })
  }

        setText('');
        setImg(null)

    }


const sendEmoji=(e)=>{
  e.preventDefault();

const emoji = "😍";


db.collection('post').add({
  username:user.displayName,
  avatar:user.photoURL,
  text:emoji,
  img:false,
  timestamp: firebase.firestore.FieldValue.serverTimestamp()
})

}


    return (
        <form>
        <div className="icons">
          <AppsIcon />
          <CameraAltIcon />
          <input className="file" hidden type="file" onChange={handleChange} />
          <PhotoIcon onClick={()=> document.querySelector('.file').click()} />
          <MicIcon />
        </div>
        <input value={text} onChange={(e)=> setText(e.target.value)} placeholder="Enter a Massage..."/>

        {!text? (<button onClick={sendEmoji} className="emoji__btn"><h2>😍</h2></button>):(<button type="submit" onClick={handleUpload}><SendIcon /></button>)}

        </form>
    )
}

export default Uploader
