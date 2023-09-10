document.addEventListener('DOMContentLoaded', () => {
    const currentDayElement = document.querySelector('[data-testid="currentDayOfTheWeek"]');
    const currentUTCTimeElement = document.querySelector('[data-testid="currentUTCTime"]');

    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const today = new Date();
    const dayOfWeek = daysOfWeek[today.getUTCDay()];
    const utcTime = today.toISOString().split('T')[1].split('.')[0];

    currentDayElement.textContent = `Current Day: ${dayOfWeek}`;
    currentUTCTimeElement.textContent = `Current UTC Time: ${utcTime}`;
});
