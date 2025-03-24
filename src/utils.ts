/**
 * Converts seconds to a string in the format MM:SS
 * @param seconds Value in seconds to be converted
 */
export function formatTime(seconds: number): string {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.floor(seconds % 60);
    return `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
}

export function calculateProgress(currentValue: number, totalValue: number) {
    return (currentValue / totalValue) * 100;
}
