import { useEffect, useState } from 'react';
import './App.css';
import TimerProgress from './components/TimerProgress';

const modesMinutes = {
    work: 1,
    shortBreak: 1,
    longBreak: 2,
};

function App() {
    const [timerMode, setTimerMode] = useState<
        'work' | 'shortBreak' | 'longBreak'
    >('work');
    const [remainingSeconds, setRemainingSeconds] = useState<number>(
        () => modesMinutes[timerMode] * 60
    );
    const [timerState, setTimerState] = useState<
        'started' | 'paused' | 'stopped'
    >('stopped');
    const [timerInterval, setTimerInterval] = useState<any>(null);
    const [buttonLabel, setButtonLabel] = useState('Start');

    const toggleTimer = () => {
        if (!timerInterval) {
            setTimerInterval(
                setInterval(() => {
                    setRemainingSeconds(prevSeconds => prevSeconds - 1);
                }, 1000)
            );

            setTimerState('started');
            setButtonLabel('Pause');
        } else {
            clearInterval(timerInterval);
            setTimerInterval(null);
            setTimerState('paused');
            setButtonLabel('Resume');
        }
    };

    const resetTimer = () => {
        clearInterval(timerInterval);
        setTimerInterval(null);
        setButtonLabel('Start');
        setRemainingSeconds(modesMinutes[timerMode] * 60);
        setTimerState('stopped');
    };

    useEffect(() => {
        if (remainingSeconds === 0) resetTimer();
        return () => {}
    }, [remainingSeconds])

    return (
        <main>
            <div className="card">
                {/** Timer display */}
                <TimerProgress
                    remainingSeconds={remainingSeconds}
                    totalSeconds={modesMinutes[timerMode] * 60}
                    timerMode={timerState}
                />

                {/**Controls */}
                <div className="group" style={{ marginTop: '3rem' }}>
                    <button
                        className="btn primary"
                        onClick={() => toggleTimer()}
                    >
                        {buttonLabel}
                    </button>
                    <button
                        className="btn"
                        onClick={() => resetTimer()}
                        disabled={timerState === 'stopped'}
                    >
                        Reset
                    </button>
                </div>
            </div>
        </main>
    );
}

export default App;
