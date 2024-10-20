import { useState } from 'react';
import './App.css';
import dice1 from './images/dice1.png';
import dice2 from './images/dice2.png';
import dice3 from './images/dice3.png';
import dice4 from './images/dice4.png';
import dice5 from './images/dice5.png';
import dice6 from './images/dice6.png';


function App() 
{ 
  var diceImages = [
    dice1,
    dice2,
    dice3,
    dice4,
    dice5,
    dice6,
  ];

  const [player1Name, setPlayer1Name] = useState('Player 1');   // Player1 can change the name
  const [image, setNewImage] = useState(diceImages[0]);
  const [image2, setNewImage2] = useState(diceImages[1]);
  const [resultMessage, setResultMessage] = useState(''); // Result message

  const rollDice = () => {
    // Generate random number
    var randomNum1 = Math.floor(Math.random() * 6);
    var randomNum2 = Math.floor(Math.random() * 6);
    setNewImage(diceImages[randomNum1]);
    setNewImage2(diceImages[randomNum2]);

      // Compare the two random numbers
      if (randomNum1 > randomNum2) {
        setResultMessage(`${player1Name} wins! 😄`);
    } else if (randomNum1 < randomNum2) {
        setResultMessage(`Player 2 wins! 😢`);
    } else {
        setResultMessage(`Draw! 🤝`);
    }
  };

    return (   
      <div className='App'>
        <center>
          <h2>{resultMessage}</h2> {/* Result message displayed here */}
          <div className='container'>
            <div className='dice-container'>
              <input type="text" placeholder="Enter Player 1's name" value={player1Name} onChange={(e) => setPlayer1Name(e.target.value)} style={{ fontSize: '30px', marginBottom: '1rem' }}/>
              <img className='square' src={image}></img>
            </div>
            <div style={{width: '40px', display: 'inline-block'}}></div>
            <div className='dice-container'>
              <input type="text" value="Player 2" readOnly style={{ fontSize: '30px', marginBottom: '1rem' }} />
              <img className='square' src={image2}></img>
            </div>
          </div>
          <button type="button" className="btn btn-success w-50" style={{  color: 'white' }} onClick={rollDice}><i className="fa-solid fa-shuffle"></i></button>
        </center>
      </div> 
  );
}

export default App;
