const userData = [
    {
        username: 'mriya20',
        email: 'anamark@gmail.com',
        // thoughts: [""],
        // friends: [""],
        _id: '640a58b6adfc7126a813f7b6'
    },
    {
        username: 'kalush',
        email: 'kalush@mail.com',
        // thoughts: [""],
        // friends: ["", "", ""],
        _id: '61b6c468f27f350a154ebdc2'
    },
    {
        username: 'jerry',
        email: 'jerryme@yahoo.com',
        // thoughts: ["", ""],
        // friends: ["", "", ""],
        _id: '61b6c468f27f350a154ebdf6'
    },
    {
        username: 'greenmile',
        email: 'greenmile@mail.com',
        // thoughts: ["", ""],
        // friends: ["", ""],
        _id: '61b6c468f27f350a154ebdk5'
    },
    {
        username: 'rogerk',
        email: 'rogerk@outlook.com',
        // thoughts: [""],
        // friends: ["", ""],
        _id: '61b6c468f27f350a154ebdk9'
    },
    {
        username: 'maryme',
        email: 'mary@yahoo.com',
        // thoughts: [""],
        // friends: ["", ""],
        _id: '61b6c468f27f350a154ebde3'
    }
]

const thoughtsData = [
    {
        _id: '640a58b6adfc7126a813f7b6',
        thoughtText: "I love summer...",
        username: "mriya20",
        createdAt: "3/10/2023, 5:22:51 PM",
        reactions: [
            {
                reactionBody: "Agree!",
                username: "maryme"
            },
            {
                reactionBody: "Me too!",
                username: "greenmile"
            }
        ]
    },
    {
        _id: '640a58b6adfc7126a813f7c2',
        thoughtText: "I cannot wait to go on vacation!",
        username: "mriya20",
        createdAt: "3/10/2023, 5:30:51 PM",
        reactions: [
            {
                reactionBody: "Let's go together!",
                username: "kalush"
            },
            {
                reactionBody: "Can't wait!",
                username: "rogerk"
            }
        ]
    },
    {
        _id: '61b6c468f27f350a154ebde6',
        thoughtText: "I play tennis every day!",
        username: "rogerk",
        createdAt: "3/9/2023, 3:22:05 PM",
        reactions: [
            {
                reactionBody: "Let's play together!",
                username: "jerry"
            }
        ]
    },
    {
        _id: '61b6c468f27f350a154ebdf4',
        thoughtText: "Studying...",
        username: "jerry",
        createdAt: "3/8/2023, 7:22:51 PM",
        reactions: [
            {
                reactionBody: "I can help you with homework!",
                username: "greenmile"
            },
            {
                reactionBody: "Share your knowledge with the world Jerry!",
                username: "maryme"
            }
        ]
    },
    {
        _id: '61b6c468f27f350a154ebdv4',
        thoughtText: "I want to dance!",
        username: "maryme",
        createdAt: "3/9/2023, 5:22:51 PM",
        reactions: [
            {
                reactionBody: "Yes!",
                username: "jerry"
            },
            {
                reactionBody: "Let's dance!",
                username: "greenmile"
            },
            {
                reactionBody: "Ohlalalalala",
                username: "rogerk"
            },
            {
                reactionBody: "Oh, how fun!",
                username: "kalush"
            }
        ]
    },
    {
        _id: '61b6c468f27f350a154ebdg8',
        thoughtText: "Time takes it all, whether you want it to or not.",
        username: "greenmile",
        createdAt: "3/10/2023, 1:12:10 PM",
        reactions: [
            {
                reactionBody: "Yes, sadly!",
                username: "rogerk"
            },
            {
                reactionBody: "Enjoy every moment!",
                username: "maryme"
            },
            {
                reactionBody: "Life is precious!",
                username: "kalush"
            }
        ]
    },
    {
        _id: '61b6c468f27f350a154ebdl7',
        thoughtText: "Have you been to Ukraine?",
        username: "kalush",
        createdAt: "3/10/2023, 6:22:11 PM",
        reactions: [
            {
                reactionBody: "No, I haven't!",
                username: "rogerk"
            },
            {
                reactionBody: "I went in 2019.",
                username: "greenmile"
            }
        ]
    },
    {
        _id: '61b6c468f27f350a154ebdo6',
        thoughtText: "What's your next destination?",
        username: "jerry",
        createdAt: "3/7/2023, 10:22:11 AM",
        reactions: [
            {
                reactionBody: "Spain!",
                username: "maryme"
            },
            {
                reactionBody: "Bali!",
                username: "rogerk"
            }
        ]
    },
    {
        _id: '61b6c468f27f350a154ebda2',
        thoughtText: "It's my bday!",
        username: "maryme",
        createdAt: "3/9/2023, 2:22:11 PM",
        reactions: [
            {
                reactionBody: "Happy Birthday!",
                username: "jerry"
            },
            {
                reactionBody: "Cannot wait to celebrate you!",
                username: "kalush"
            }
        ]
    },
]

module.exports = { userData, thoughtsData };