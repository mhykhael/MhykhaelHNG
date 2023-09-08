document.addEventListener('DOMContentLoaded', () => {
    const currentDayElement = document.querySelector('[data-testid="currentDayOfTheWeek"]');
    const currentUTCTimeElement = document.querySelector('[data-testid="currentUTCTime"]');

    
    function updateTime() {
        const now = new Date();
        const dayOfWeek = now.toLocaleDateString('en-US', { weekday: 'long' });
        const utcTime = now.toISOString().split('T')[1].split('.')[0];

        currentDayElement.textContent = `Today is ${dayOfWeek}`;
        currentUTCTimeElement.textContent = `Current UTC Time: ${utcTime}`;
    }
    updateTime();
    setInterval(updateTime, 1000);
});
