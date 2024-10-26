function showMonths(season) {
    const monthsDiv = document.getElementById('months');
    monthsDiv.innerHTML = '';

    let imageUrl=""
    let months = [];
    let color = '';

    switch(season) {
        case 'winter':
            imageUrl = 'url("images/winter.webp")';
            months = ['December', 'January', 'February'];
            color = '#3498db';
            break;
        case 'spring':
            imageUrl = 'url("images/spring.webp")';
            months = ['March', 'April', 'May'];
            color = '#2ecc71';
            break;
        case 'summer':
            imageUrl = 'url("images/summer.webp")';
            months = ['June', 'July', 'August'];
            color = '#f1c40f';
            break;
        case 'autumn':
            imageUrl = 'url("images/autumn.webp")';
            months = ['September', 'October', 'November'];
            color = '#e67e22';
            break;
    }
    document.body.style.backgroundImage = imageUrl;
    console.log(imageUrl)
    months.forEach(month => {
        const monthBtn = document.createElement('button');
        monthBtn.classList.add('month-btn');
        monthBtn.style.backgroundColor = color;
        monthBtn.innerText = month;
        monthsDiv.appendChild(monthBtn);
    });
}