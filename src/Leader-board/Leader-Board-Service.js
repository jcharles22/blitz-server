const LeaderBoardService = {
    getScores(knex) {
        return knex('leaderboard')
        .select('users', 'score')
        .orderBy('score', 'desc')
        .limit(5)    
    },
    insertScores(knex, newScore) {
        return knex
            .insert(newScore)
            .into('leaderboard')
    }

}

module.exports = LeaderBoardService;