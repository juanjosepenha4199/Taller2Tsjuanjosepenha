(function() {
    document.addEventListener('DOMContentLoaded', () => {
      const seriesTable = document.getElementById('series-table');
      const detailsContainer = document.getElementById('details-container');
  
      series.forEach(serie => {
        const row = seriesTable.insertRow();
        const nameCell = row.insertCell();
        const channelCell = row.insertCell();
        const seasonsCell = row.insertCell();
  
        nameCell.textContent = serie.name;
        channelCell.textContent = serie.channel;
        seasonsCell.textContent = serie.seasons.toString();
  
        row.addEventListener('click', () => showDetails(serie));
      });
  
      const averageSeasons = series.reduce((sum, serie) => sum + serie.seasons, 0) / series.length;
      document.getElementById('average-row').textContent = `Seasons Average: ${averageSeasons.toFixed(2)}`;
    });
  
    function showDetails(serie) {
      const detailsContainer = document.getElementById('details-container');
      detailsContainer.innerHTML = `
        <div class="card">
          <img src="${serie.imageUrl}" class="card-img-top" alt="${serie.name}">
          <div class="card-body">
            <h5 class="card-title">${serie.name}</h5>
            <p class="card-text">${serie.description}</p>
          </div>
        </div>
      `;
    }
  })();
  