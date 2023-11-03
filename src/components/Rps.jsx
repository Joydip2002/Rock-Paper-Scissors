import React, { useEffect, useState } from 'react';
import './Rsp.css';

const options = ['rock', 'paper', 'scissors'];
const Rps = () => {
  const [localImage, setLocalImage] = useState('rock');
  const [computerImage, setSetComputerImage] = useState(options[Math.floor(Math.random() * 3)]);
  const [winner, setWinner] = useState('');
  const [loading, setLoading] = useState(false);

  console.log(winner);
  console.log('computer=>', computerImage);
  console.log('local=>', localImage);

  const rspFunc = (choose) => {
    setLocalImage(choose);
    setSetComputerImage(options[Math.floor(Math.random() * 3)])
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }

  useEffect(() => {
    const checkWinner = () => {
      if (localImage === computerImage) {
        setWinner('Tie')
      }
      else if ((localImage === 'rock' && computerImage === 'scissors') || (localImage === 'scissors' && computerImage === 'paper') || (localImage === 'paper' && computerImage === 'rock')) {
        setWinner('You are Winner...😃💥')
      }
      else {
        setWinner('Computer is Winner...🖥️💥')
      }
    }
    checkWinner();
  }, [localImage, computerImage])

  return (
    <>
      <div className='d-flex justify-content-center flex-column align-items-center min-vh-100'>
        <div className="winner p-4 text-center text-capitalize display-6 bg-success border-1 rounded-3 text-white mb-5"><b>
          { loading ==true? (<div class="spinner-border text-warning  d-flex justify-content-center" role="status">
                  <span class="visually-hidden">Loading...</span>
                </div>): winner}
        </b></div>
        <div className='d-flex  justify-content-center'>
          <div className="computer-hand" style={{ width: '40%' }}>
            <div className='text-center'><b>Computer</b></div>
            {
              loading == true ?
                (<div class="spinner-border text-warning  d-flex justify-content-center" role="status">
                  <span class="visually-hidden">Loading...</span>
                </div>) : (
                  <>
                    <img src={computerImage == 'rock' ? 'rock.png' : ''} className={computerImage == 'rock' ? '' : 'hidden'} width='80%' alt="scissors" />
                    <img src={computerImage == 'scissors' ? 'lscissors.png' : ''} className={computerImage == 'scissors' ? '' : 'hidden'} width='80%' alt="scissors" />
                    <img src={computerImage == 'paper' ? 'paper.png' : ''} className={computerImage == 'paper' ? '' : 'hidden'} width='80%' alt="scissors" />
                  </>
                )
            }
          </div>
          <div className="local-hand" style={{ width: '40%' }}>
            <div className='text-center'><b>You</b></div>
            <img src={localImage == 'rock' ? 'rrock.png' : ''} className={localImage == 'rock' ? '' : 'hidden'} width='80%' alt="scissors" />
            <img src={localImage == 'scissors' ? 'scissors.png' : ''} className={localImage == 'scissors' ? '' : 'hidden'} width='80%' alt="scissors" />
            <img src={localImage == 'paper' ? 'rpaper.png' : ''} className={localImage == 'paper' ? '' : 'hidden'} width='80%' alt="scissors" />
          </div>
        </div>
        <div className='d-flex gap-2 mt-5'>
          <button className='btn btn-primary' onClick={() => rspFunc('rock')}>Rock</button>
          <button className='btn btn-warning' onClick={() => rspFunc('paper')}>Paper</button>
          <button className='btn btn-danger' onClick={() => rspFunc('scissors')}>Scissors</button>
        </div>
      </div>
    </>
  )
}

export default Rps
