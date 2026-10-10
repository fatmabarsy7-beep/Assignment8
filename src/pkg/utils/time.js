export function toMs(value, unit) {
    const units = {
        seconds: 1000,
        minutes: 60 * 1000,
        hours: 60 * 60 * 1000,
        days: 24 * 60 * 60 * 1000
    };

    return value * units[unit];
}