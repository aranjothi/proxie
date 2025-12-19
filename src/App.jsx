import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [personColor, setPersonColor] = useState('#000000');
  const [personPosition, setPersonPosition] = useState({ top: '50%', left: '50%' });

  useEffect(() => {
    const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
    setPersonColor(randomColor);
    
    // random positioning on grid
    const randomTop = Math.random() * 100;
    const randomLeft = Math.random() * 100;
    setPersonPosition({ top: `${randomTop}%`, left: `${randomLeft}%` });

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          console.log('user location:', position.coords.latitude, position.coords.longitude);
        },
        (error) => {
          console.error('error w/ getting user location:', error);
        }
      );
    }
  }, []);

  const items = []

  for (let i = 0; i < 169; i++) {
    items.push(<div className="grid-item"></div>)
  }

  async function addFriend() {

  }

  return (
    <>
      <div className="grid-container">
        {items}
        <div 
          className="person-box" 
          style={{ 
            backgroundColor: personColor,
            top: personPosition.top,
            left: personPosition.left
          }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" class="size-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M15.182 15.182a4.5 4.5 0 0 1-6.364 0M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0ZM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Z" />
          </svg>


        </div>
      </div>
      <div className="lower-container">
        <button className="add-friend-button" onClick={() => addFriend()}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25" fill="currentColor" className="size-6">
            <path d="M5.25 6.375a4.125 4.125 0 1 1 8.25 0 4.125 4.125 0 0 1-8.25 0ZM2.25 19.125a7.125 7.125 0 0 1 14.25 0v.003l-.001.119a.75.75 0 0 1-.363.63 13.067 13.067 0 0 1-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 0 1-.364-.63l-.001-.122ZM18.75 7.5a.75.75 0 0 0-1.5 0v2.25H15a.75.75 0 0 0 0 1.5h2.25v2.25a.75.75 0 0 0 1.5 0v-2.25H21a.75.75 0 0 0 0-1.5h-2.25V7.5Z" />
          </svg>
        </button>
        <input className="message-input" type="text" placeholder="Type a message..." />
        <button className="send-button" onClick={() => sendMessage()}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
            <path d="M3.478 2.404a.75.75 0 0 0-.926.941l2.432 7.905H13.5a.75.75 0 0 1 0 1.5H4.984l-2.432 7.905a.75.75 0 0 0 .926.94 60.519 60.519 0 0 0 18.445-8.986.75.75 0 0 0 0-1.218A60.517 60.517 0 0 0 3.478 2.404Z" />
          </svg>
        </button>
      </div>
    </>
  )
}

export default App
