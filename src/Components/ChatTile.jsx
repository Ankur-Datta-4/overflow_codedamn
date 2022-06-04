import React from 'react'

const ChatTile = ({chatName,recentMessage}) => {
    const stules={
        display:'flex',
        flexDirection:'column',
        height:'4rem',
        width:'100%',
        maxWidth:'7rem',
        
    }
    const imgStyle={
        width:'1.5rem',
        height:'1.5rem',
        borderRadius:'50%'
    }
    const recentMsg={
        fontSize:'1rem'
    }
  return (
    <div style={stules}>
        {/* Avatar here */}
        <div className='avatar+name' style={{fontSize:'1.2rem'}}>
            <img src="https://joeschmoe.io/api/v1/random" style={imgStyle}/>
            {chatName}
        </div>
        <div style={recentMsg}>
            {recentMessage}
        </div>
    </div>
  )
}

export default ChatTile