import { useEffect, useRef, useState } from 'react';
import './App.css';
import TimerProgress from './components/TimerProgress';
import { FaChevronLeft, FaChevronRight, FaGithub } from 'react-icons/fa6';
import { formatTime } from './utils';

const modes = [
    {
        label: 'Work',
        duration: 30,
        key: 'work',
    },
    {
        label: 'Short Break',
        duration: 5,
        key: 'short_break',
    },
    {
        label: 'Long Break',
        duration: 15,
        key: 'long_break',
    },
];

function App() {
    const [currentModeIndex, setCurrentModeIndex] = useState(0);
    const currentMode = modes[currentModeIndex];
    const [remainingSeconds, setRemainingSeconds] = useState(
        currentMode.duration * 60
    );
    const [timerState, setTimerState] = useState<
        'started' | 'paused' | 'stopped'
    >('stopped');
    const timerIntervalRef = useRef<number | null>(null);

    const clearTimeInterval = () => {
        if (timerIntervalRef.current) {
            clearInterval(timerIntervalRef.current);
            timerIntervalRef.current = null;
        }
    };

    // Reset the timer when the mode changes
    useEffect(() => {
        clearTimeInterval();
        setTimerState('stopped');
        setRemainingSeconds(currentMode.duration * 60);
    }, [currentMode]);

    // Toggle between starting and pausing the timer
    const toggleTimer = () => {
        if (timerState !== 'started') {
            timerIntervalRef.current = setInterval(() => {
                setRemainingSeconds(previous => {
                    if (previous < 1) {
                        clearTimeInterval();
                        setTimerState('stopped');
                        return currentMode.duration * 60;
                    }
                    document.title = `Pomodoro - ${formatTime(previous - 1)}`;
                    return previous - 1;
                });
            }, 1000);
            setTimerState('started');
        } else {
            clearTimeInterval();
            setTimerState('paused');
        }
    };

    const resetTimer = () => {
        clearTimeInterval();
        setTimerState('stopped');
        setRemainingSeconds(currentMode.duration * 60);
        document.title = `Pomodoro - ${formatTime(currentMode.duration * 60)}`;
    };

    const goToPreviousMode = () => {
        if (currentModeIndex > 0 && timerState !== 'started') {
            setCurrentModeIndex(currentModeIndex - 1);
            document.title = `Pomodoro - ${formatTime(modes[currentModeIndex - 1].duration * 60)}`;
        }
    };

    const goToNextMode = () => {
        if (currentModeIndex < modes.length - 1 && timerState !== 'started') {
            setCurrentModeIndex(currentModeIndex + 1);
            document.title = `Pomodoro - ${formatTime(modes[currentModeIndex + 1].duration * 60)}`;
        }
    };

    return (
        <main>
            <div className="card">
                {/** Timer display */}
                <TimerProgress
                    remainingSeconds={remainingSeconds}
                    totalSeconds={currentMode.duration * 60}
                    timerMode={timerState}
                />
                {/**Controls */}
                <div className="group center my-4" style={{ width: '80%' }}>
                    <button
                        className="btn-ghost"
                        onClick={goToPreviousMode}
                        disabled={
                            currentModeIndex === 0 || timerState === 'started'
                        }
                    >
                        <FaChevronLeft />
                    </button>
                    <span className="session-label">{currentMode.label}</span>
                    <button
                        className="btn-ghost"
                        onClick={goToNextMode}
                        disabled={
                            currentModeIndex === modes.length - 1 ||
                            timerState === 'started'
                        }
                    >
                        <FaChevronRight />
                    </button>
                </div>
                <div className="group mt-6">
                    <button className="btn primary" onClick={toggleTimer}>
                        {timerState === 'paused'
                            ? 'Resume'
                            : timerState === 'started'
                              ? 'Pause'
                              : 'Start'}
                    </button>
                    <button
                        className="btn"
                        onClick={resetTimer}
                        disabled={timerState === 'stopped'}
                    >
                        Reset
                    </button>
                </div>
            </div>
            <div className="fixed-items">
                <a
                    href="https://github.com/correa-coder/pomodoro"
                    target="_blank"
                    className="btn-link"
                >
                    <FaGithub />
                </a>
            </div>
        </main>
    );
}

export default App;
