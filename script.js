(function () {
  const teamState = {
    teamA: { name: 'Team A', runs: 0, wickets: 0, balls: 0 },
    teamB: { name: 'Team B', runs: 0, wickets: 0, balls: 0 },
  };

  function formatOvers(totalBalls) {
    return `${Math.floor(totalBalls / 6)}.${totalBalls % 6}`;
  }

  function updateSummary() {
    const summary = document.getElementById('match-summary');
    const a = teamState.teamA;
    const b = teamState.teamB;

    if (a.runs === b.runs) {
      summary.textContent = `Match is tied at ${a.runs} runs each.`;
      return;
    }

    const leader = a.runs > b.runs ? a : b;
    const diff = Math.abs(a.runs - b.runs);
    summary.textContent = `${leader.name} leads by ${diff} run${diff === 1 ? '' : 's'}.`;
  }

  function renderTeam(teamKey) {
    const team = teamState[teamKey];
    const card = document.querySelector(`[data-team="${teamKey}"]`);
    card.querySelector('h2').textContent = team.name;
    card.querySelector('[data-role="score"]').textContent = `${team.runs}/${team.wickets} (${formatOvers(team.balls)})`;
    updateSummary();
  }

  function renderAll() {
    renderTeam('teamA');
    renderTeam('teamB');
  }

  function incrementBall(team) {
    if (team.wickets < 10) {
      team.balls += 1;
    }
  }

  function wireTeam(teamKey) {
    const card = document.querySelector(`[data-team="${teamKey}"]`);
    const nameInput = card.querySelector('[data-role="name"]');

    nameInput.addEventListener('input', (event) => {
      teamState[teamKey].name = event.target.value.trim() || (teamKey === 'teamA' ? 'Team A' : 'Team B');
      renderTeam(teamKey);
    });

    card.querySelectorAll('[data-role="add-runs"]').forEach((button) => {
      button.addEventListener('click', () => {
        const team = teamState[teamKey];
        if (team.wickets >= 10) {
          return;
        }

        team.runs += Number(button.dataset.runs || 0);
        incrementBall(team);
        renderTeam(teamKey);
      });
    });

    card.querySelector('[data-role="wicket"]').addEventListener('click', () => {
      const team = teamState[teamKey];
      if (team.wickets >= 10) {
        return;
      }

      team.wickets += 1;
      incrementBall(team);
      renderTeam(teamKey);
    });

    card.querySelector('[data-role="reset"]').addEventListener('click', () => {
      const resetName = teamKey === 'teamA' ? 'Team A' : 'Team B';
      teamState[teamKey] = { name: resetName, runs: 0, wickets: 0, balls: 0 };
      nameInput.value = resetName;
      renderTeam(teamKey);
    });
  }

  wireTeam('teamA');
  wireTeam('teamB');
  renderAll();
})();
