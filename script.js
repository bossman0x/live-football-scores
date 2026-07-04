fetch('https://www.thesportsdb.com/api/v1/json/123/eventsseason.php?id=4328&s=2025-2026')
  .then(response => response.json())
  .then(data => {
    const matches = data.events;
    const container = document.getElementById('matches');

    matches.forEach(match => {
      const matchDiv = document.createElement('div');
      matchDiv.classList.add('match-card');
      matchDiv.innerHTML = `
        <div class="teams">
          <div class="team">
            <img src="${match.strHomeTeamBadge}" alt="${match.strHomeTeam}">
            <span>${match.strHomeTeam}</span>
          </div>
          <span class="vs">vs</span>
          <div class="team">
            <img src="${match.strAwayTeamBadge}" alt="${match.strAwayTeam}">
            <span>${match.strAwayTeam}</span>
          </div>
        </div>
        <p class="match-info">${match.dateEvent} — ${match.strTime}</p>
        <p class="venue">${match.strVenue}</p>
      `;
      container.appendChild(matchDiv);
    });
  });