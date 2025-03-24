import { calculateProgress, formatTime } from "../utils";

interface ProgressProps {
    seconds: number;
}

export default function TimerProgress({ seconds }: ProgressProps) {
    const progressValue = calculateProgress(seconds, 30 * 60);

    return (<div className="circular-progress" style={{background: `conic-gradient(tomato ${progressValue * 3.6}deg, #ededed 0deg)`}}>
        <div style={{display: 'flex', flexDirection: 'column', gap: 4, position: 'relative', textAlign: 'center'}}>
            <span className="timer-display" style={{position: 'relative'}}>{formatTime(seconds)}</span>
            <span className="timer-label"><span className="emoji">⏰</span> Focus</span>
            {/* <span className="progress-value">{progressValue}%</span> */}
        </div>
    </div>)
}