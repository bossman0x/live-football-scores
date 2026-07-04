fetch('https://www.thesportsdb.com/api/v1/json/123/eventsnextleague.php?id=4328')
  .then(response => response.json())
  .then(data => {
    const matches = data.events;
    const container = document.getElementById('matches');

    matches.forEach(match => {
      const matchDiv = document.createElement('div');
      matchDiv.innerHTML = `
        <h3>${match.strEvent}</h3>
        <p>${match.dateEvent} — ${match.strTime}</p>
        <p>${match.strVenue}</p>
      `;
      container.appendChild(matchDiv);
    });
  });