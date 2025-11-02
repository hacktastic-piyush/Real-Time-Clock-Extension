function updateTime() {
    const now = new Date();
    
    // --- 1. DATE FORMATTING ---
    // Gets a locale-aware, full date string (e.g., "Sunday, November 2, 2025")
    const dateOptions = { 
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
    };
    const formattedDate = now.toLocaleDateString('en-US', dateOptions);

    // --- 2. TIME FORMATTING (12-hour clock) ---
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    const ampm = hours >= 12 ? 'PM' : 'AM';

    // Convert 24-hour time to 12-hour time and handle midnight/noon
    hours = hours % 12;
    hours = hours ? hours : 12; // The hour '0' (midnight) should be '12'

    // Pad single-digit minutes and seconds with a leading zero (e.g., 9 -> 09)
    minutes = String(minutes).padStart(2, '0');
    seconds = String(seconds).padStart(2, '0');

    const timeString = `${hours}:${minutes}:${seconds} ${ampm}`;
    
    // --- 3. DISPLAY THE RESULT ---
    const clockElement = document.getElementById('liveClock');
    
    // Use innerHTML to combine the time and the date (styled as a separate line)
    clockElement.innerHTML = `
        ${timeString}
        <span class="date-text">${formattedDate}</span>
    `;
}

// Start the clock
// Call the function immediately to display the time on page load
updateTime();

// Set an interval to call the function every 1000 milliseconds (1 second)
setInterval(updateTime, 1000);