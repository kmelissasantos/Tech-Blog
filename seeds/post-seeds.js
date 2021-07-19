const { Post } = require('../models');

const postData = [
    {//1
        title: "Nellie the corgi is back in town! ",
        post_content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc suscipit eu lacus ac auctor. Mauris et laoreet magna.",
        user_id: 2
    },
    {//2
        title: "5 reasons to stop eating meat.",
        post_content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc suscipit eu lacus ac auctor. Mauris et laoreet magna.",
        user_id: 3
    },
    {//3
        title: "Workout routine tips!",
        post_content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc suscipit eu lacus ac auctor. Mauris et laoreet magna.",
        user_id: 6

    },
    {//4
        title: "Mouse Rat Concert tonight at 9!",
        post_content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc suscipit eu lacus ac auctor. Mauris et laoreet magna.",
        user_id: 5
    },
    {//5
        title: "Yerr",
        post_content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc suscipit eu lacus ac auctor. Mauris et laoreet magna.",
        user_id: 4
    },
    {//6
        title: "Thinking fast and slow.",
        post_content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc suscipit eu lacus ac auctor. Mauris et laoreet magna.",
        user_id: 7
    },
    {//7
        title: "Because Health Matters",
        post_content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc suscipit eu lacus ac auctor. Mauris et laoreet magna.",
        user_id: 1
    },
    {//8
        title: "New restaurent opening up.",
        post_content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc suscipit eu lacus ac auctor. Mauris et laoreet magna.",
        user_id: 8
    },
    {//9
        title: "Movie Night",
        post_content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc suscipit eu lacus ac auctor. Mauris et laoreet magna.",
        user_id: 10
    },
    {//10
        title: "Doll hairs",
        post_content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc suscipit eu lacus ac auctor. Mauris et laoreet magna.",
        user_id: 9
    },

]

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;