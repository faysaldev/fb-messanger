import './App.css';
import { FormControl,InputLabel ,Button, Input, Avatar, IconButton } from '@material-ui/core'
import { useEffect, useState } from 'react';
import SendIcon from '@material-ui/icons/Send';
import Message from './Message';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { useStateValue } from './StateProvider'
import Uploader from './Uploader';
import Login from './Login';
import db from './firebase';
import FlipMove from 'react-flip-move';


function App() {

  const [{user},dispatch]=useStateValue();



  const [massage,setMassage] =useState([]);

  useEffect(()=>{
  db.collection('post').orderBy('timestamp','desc').onSnapshot((snapshot)=>{
    setMassage(snapshot.docs.map((doc)=> ({
      id:doc.id,
      data:doc.data()
    })))
  })
  },[])
  


  return (
    <div className="app">

{!user?(<Login />):(
  
<div className="app__body">
<header>
        <div className="header__left">
        <Avatar src="/IMG_20201030_155418_310.jpg" alt="Faysal"/>
        <h2>Devlopers</h2>
        </div>

        <IconButton>
        <MoreVertIcon />
        </IconButton>

        </header>

        <div className="img">
        <img src="/logo.png" alt="" />

  <Uploader />

        </div>




        <div className="messages">

<FlipMove> 
{massage.map((doc)=>(
  <Message key={doc.id} id={doc.id}  src={doc.data.avatar} img={doc.data.img} username={doc.data.username} text={doc.data.text} />
))}

</FlipMove>

        </div>
</div>
)}


    </div>
  );
}

export default App;

// style={{background:"linear-gradient(#00000033, #0000004a), url(/spinner.gif)",backgroundAttachment:"fixed",backgroundPosition:"center",backgroundSize:"cover",backgroundRepeat:"no-repeat"}