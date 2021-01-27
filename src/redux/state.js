let state = {
    profilePage: {
        postsData: [
            { id: 1, message: "post1", likesCount: 10 },
            { id: 2, message: "post2", likesCount: 9 },
            { id: 3, message: "post3", likesCount: 10 },
            { id: 4, message: "post4", likesCount: 15 }
        ],
    },
    dialogsPage: {
        dialogsData: [
            { id: 1, name: "user1" },
            { id: 2, name: "user2" },
            { id: 3, name: "user3" },
            { id: 4, name: "user4" }
        ],
        messagesData: [
            { id: 1, message: "message1" },
            { id: 2, message: "message2" },
            { id: 3, message: "message3" },
            { id: 4, message: "message4" }
        ]
    }
}

export default state;