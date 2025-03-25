import { calculateTimerProgress, formatTime } from '../utils';

interface ProgressProps {
    remainingSeconds: number;
    totalSeconds: number;
    timerMode: 'started' | 'paused' | 'stopped';
}

export default function TimerProgress({ remainingSeconds, totalSeconds, timerMode }: ProgressProps) {
    const progressValue = calculateTimerProgress(remainingSeconds, totalSeconds);

    const timerLabels = {
        started: 'Focus',
        paused: 'Paused',
        stopped: 'Get ready!',
    };

    return (
        <div
            className="circular-progress"
            style={{
                background: `conic-gradient(tomato ${progressValue * 3.6}deg, #ededed 0deg)`,
            }}
        >
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 4,
                    position: 'relative',
                    textAlign: 'center',
                }}
            >
                <span
                    className="timer-display"
                    style={{ position: 'relative' }}
                >
                    {formatTime(remainingSeconds)}
                </span>
                <span className="timer-label">
                    <span className="emoji">⏰</span> {timerLabels[timerMode]}
                </span>
            </div>
        </div>
    );
}
