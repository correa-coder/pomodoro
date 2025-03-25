import { describe, test, expect} from 'vitest';
import { calculateTimerProgress, formatTime } from './utils';

describe('Time formatting', () => {
    test('formats seconds to MM:SS format', () => {
        expect(formatTime(126)).toBe('02:06');
    });

    test('should work when the seconds is 0', () => {
        expect(formatTime(0)).toBe('00:00');
    })
});

describe('Timer progress', () => {
    test('should return 100% when the timer finishes', () => {
        const currentSeconds = 0;
        const totalSeconds = 60;
        expect(calculateTimerProgress(currentSeconds, totalSeconds)).toBe(100);
    });

    test('should return 0% when the timer has not started', () => {
        const currentSeconds = 60;
        const totalSeconds = 60;
        expect(calculateTimerProgress(currentSeconds, totalSeconds)).toBe(0);
    });
});