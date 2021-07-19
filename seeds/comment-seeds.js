const { Comment } = require('../models');

const commentData = [
    {
        user_id: 2,
        post_id: 2,
        comment_text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
        user_id: 1,
        post_id: 1,
        comment_text: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    },
    {
        user_id: 5,
        post_id: 10,
        comment_text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum."
    },
    {
        user_id: 4,
        post_id: 8,
        comment_text: "Sed ut perspiciatis unde omnis iste natus error."
    },
    {
        user_id: 3,
        post_id: 9,
        comment_text: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit."
    },
    {
        user_id: 6,
        post_id: 9,
        comment_text: "Lorem ipsum dolor sit amet."
    },
    {
        user_id: 7,
        post_id: 6,
        comment_text: "sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    {
        user_id: 8,
        post_id: 5,
        comment_text: "Duis aute irure dolor."
    }
]

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;