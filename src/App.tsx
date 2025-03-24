import './App.css'
import TimerProgress from './components/TimerProgress'

function App() {

  return (
    <main>
      <div className="card">
        {/** Timer display */}
             <TimerProgress seconds={0} />
             {/**Controls */}
             <div className='group' style={{marginTop: '3rem'}}>
        <button className='btn primary'>Start</button>
        <button className='btn'>Reset</button>
             </div>
      </div>
    </main>
  )
}

export default App
