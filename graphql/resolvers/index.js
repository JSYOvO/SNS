const postsResolvers = require('./posts');
const usersReslovers = require('./users');

module.exports = {
    Query : {
        ...postsResolvers.Query
    },
    Mutation: {
        ...usersReslovers.Mutation
    }
}