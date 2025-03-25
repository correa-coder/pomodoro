import React from 'react';
import { calculateTimerProgress, formatTime } from '../utils';

interface ProgressProps {
    remainingSeconds: number;
    totalSeconds: number;
    timerMode: 'started' | 'paused' | 'stopped';
}

export default function TimerProgress({
    remainingSeconds,
    totalSeconds,
    timerMode,
}: ProgressProps) {
    const progressValue = calculateTimerProgress(
        remainingSeconds,
        totalSeconds
    );

    const timerLabels = {
        started: 'Active',
        paused: 'Paused',
        stopped: 'Get ready!',
    };

    return (
        <div
            className="circular-progress"
            style={
                {
                    '--progress-deg': `${progressValue * 3.6}deg`,
                } as React.CSSProperties
            }
        >
            <div className="timer-content">
                <span className="timer-display">
                    {formatTime(remainingSeconds)}
                </span>
                <span className="timer-label">
                    <span className="emoji">⏰</span> {timerLabels[timerMode]}
                </span>
            </div>
        </div>
    );
}
