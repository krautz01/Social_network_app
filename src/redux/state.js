let state = {

    profilePage: {
        posts: [
            { id: 1, message: "Hi, wie geht's euch?", likesCount: 12 },
            { id: 2, message: "Das ist meine erste Nachricht", likesCount: 11 },
            { id: 3, message: 'Hallo!', likesCount: 5 },
            { id: 4, message: "Na ja", likesCount: 8 },
        ],
    },
    
    dialogsPage: {
        messages: [
            { id: 1, message: 'Hi!' },
            { id: 2, message: "Wie geht's?" },
            { id: 3, message: 'Es ist so kalt!' },
            { id: 4, message: 'Hi!' },
        ],

        dialogs: [
            { id: 1, name: 'Angela' },
            { id: 2, name: 'Ervin' },
            { id: 3, name: 'Klaus' },
            { id: 4, name: 'Nico' },
        ],
    },

    sidebar: {}
}

export default state;