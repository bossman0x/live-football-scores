fetch('https://www.thesportsdb.com/api/v1/json/123/eventsseason.php?id=4328&s=2024-2025')
  .then(response => response.json())
  .then(data => {
    const matches = data.events;
    const container = document.getElementById('matches');
    container.innerHTML = '';

    matches.forEach(match => {
      const matchDiv = document.createElement('div');
      matchDiv.classList.add('match-card');
      matchDiv.innerHTML = `
        <div class="teams">
          <div class="team">
            <img src="${match.strHomeTeamBadge}" alt="${match.strHomeTeam}">
            <span>${match.strHomeTeam}</span>
        </div>
        <span class="vs">${match.intHomeScore ?? '-'} : ${match.intAwayScore ?? '-'}</span>
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
  })
  .catch(error => {
    document.getElementById('matches').innerHTML = '<p>Could not load matches. Please try again later.</p>';
    console.error('Fetch error:', error);
  });