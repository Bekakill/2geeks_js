function showMonths(season) {
    const monthsDiv = document.getElementById('months');
    monthsDiv.innerHTML = '';

    let months = [];
    let color = '';

    switch(season) {
        case 'winter':
            months = ['December', 'January', 'February'];
            color = '#3498db';
            break;
        case 'spring':
            months = ['March', 'April', 'May'];
            color = '#2ecc71';
            break;
        case 'summer':
            months = ['June', 'July', 'August'];
            color = '#f1c40f';
            break;
        case 'autumn':
            months = ['September', 'October', 'November'];
            color = '#e67e22';
            break;
    }

    months.forEach(month => {
        const monthBtn = document.createElement('button');
        monthBtn.classList.add('month-btn');
        monthBtn.style.backgroundColor = color;
        monthBtn.innerText = month;
        monthsDiv.appendChild(monthBtn);
    });
}