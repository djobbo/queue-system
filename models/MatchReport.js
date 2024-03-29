const queueDB = require('../main').queueDB;
const { MatchReportStatus } = require('./enums');

const { MatchSchema, MatchReportSchema, TeamSchema } = require('./schemasDefs');

MatchReportSchema.add({
    match: Match,
    team1Score: Number,
    team2Score: Number,
    winner: Team,
    reportStatus: MatchReportStatus
});

module.exports = queueDB.model('MatchReport', MatchReportSchema);