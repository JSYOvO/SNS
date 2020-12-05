const postsResolvers = require('./posts');
const usersReslovers = require('./users');
const commentResolvers = require('./comments');

module.exports = {
    Post: {
        likeCount: (parent) => parent.likes.length,
        commentCount: (parent) => parent.comments.length
    },
    Query : {
        ...postsResolvers.Query
    },
    Mutation: {
        ...usersReslovers.Mutation,
        ...postsResolvers.Mutation,
        ...commentResolvers.Mutation
    },
    Subscription: {
        ...postsResolvers.Subscription
    }
}