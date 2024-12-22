import './AfterInstall.css'

function AfterInstall() {
  return (
    <>
      <h2 className="header">Google Meet Create installed!</h2>
      <div className='descr'>Click the puzzle piece (1) in the top right of your browser.</div>
      <div className='descr'>Then, click the little pin (2) next to the extension:</div>
      <div className='descr'>Activate the extension (3):</div>
      <img className='img' src="./run.png" alt="" />
    </>
  )
}
export default AfterInstall