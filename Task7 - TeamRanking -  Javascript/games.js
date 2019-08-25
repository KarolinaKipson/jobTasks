const matches = [{
        homeTeam: 'France',
        awayTeam: 'Croatia',
        score: '2:1',
        date: '18.01.2019'
    },
    {
        homeTeam: 'England',
        awayTeam: 'Spain',
        score: '3:1',
        date: '18.01.2019'
    },
    {
        homeTeam: 'Spain',
        awayTeam: 'Croatia',
        score: '0:0',
        date: '12.01.2019'
    },
    {
        homeTeam: 'France',
        awayTeam: 'England',
        score: '0:1',
        date: '12.01.2019'
    },
    {
        homeTeam: 'England',
        awayTeam: 'Croatia',
        score: null,
        date: '03.02.2019'
    },
    {
        homeTeam: 'Spain',
        awayTeam: 'France',
        score: null,
        date: '03.02.2019'
    }
];

function getRankings(games) {
    function getHomeTeamPoints(score) {
        if (score === null) {
            return 0;
        }
        const scores = score.split(":").map(Number);

        const scoreOne = scores[0];
        const scoreTwo = scores[1];

        if (scoreOne > scoreTwo) {
            return 3;
        } else if (scoreOne === scoreTwo) {
            return 1;
        }
        return 0;


    };


    function getAwayTeamPoints(score) {
        // Return 0, otherwise won't work.
        if (score === null) {
            return 0;
        }

        const awayScore = getHomeTeamPoints(score);

        if (awayScore === 0) {
            return 3;
        } else if (awayScore === 3) {
            return 0;
        } else {
            return awayScore;
        }
    }
    const result = [];
    for (i in games) {
        const homeTeamName = games[i].homeTeam;
        const homeTeamPoints = getHomeTeamPoints(games[i].score);
        const awayTeamName = games[i].awayTeam;
        const awayTeamPoints = getAwayTeamPoints(games[i].score);

        const homeTeam = {
            team: homeTeamName,
            points: homeTeamPoints
        };
        const awayTeam = {
            team: awayTeamName,
            points: awayTeamPoints
        };

        const existingHomeTeam = result.find(o => o.team === homeTeamName);
        if (existingHomeTeam === undefined) {
            result.push(homeTeam);
        } else {
            existingHomeTeam.points += homeTeamPoints;
        }

        const existingAwayTeam = result.find(o => o.team === awayTeamName);
        if (existingAwayTeam === undefined) {
            result.push(awayTeam);
        } else {
            existingAwayTeam.points += awayTeamPoints;
        }
    }

    result.sort(function(a, b) {
        return b.points - a.points || a.team.localeCompare(b.team);
    });
	
	return result;
}

const footbalRankings = getRankings(matches);
console.log(footbalRankings);
