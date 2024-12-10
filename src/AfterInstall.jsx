import './AfterInstall.css'

function AfterInstall() {
  return (
    <>
      <h2 className="header">Edit Website Extension installed!</h2>
      <div className='descr'>Click the pencil icon (1) located on the right side of your browser window to begin editing</div>
      <div className='descr'>Please try editing this sample text (2)</div>
      <div className='descr'>Click the pencil icon (1) to stop editing</div>
      <img className='img' src="./after_install.png" alt="" />
    </>
  )
}

export default AfterInstall