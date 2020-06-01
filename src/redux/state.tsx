export type DialogType = {
    name: string
    id: number
}

export type MessageType = {
    message: string
    id: number
}

export type PostType = {
    message: string
    likesCount: number
    id: number
}

export type ProfilePageType = {
    posts: Array<PostType>
}

export type DialogsPageType = {
    messages: Array<MessageType>
    dialogs: Array<DialogType>
}

export type AppState = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
}

export type ProfilePagePropsType = {
    profilePage: ProfilePageType
}


let state = {
    profilePage: {
        posts: [
            {id: 1, message: "Hi, how are you?", likesCount: 15},
            {id: 2, message: "It's my first post.", likesCount: 20}
        ]
    },
    dialogsPage: {
        messages: [
            {id: 1, message: "Hi!"},
            {id: 2, message: "How is your it-kamasutra?"},
            {id: 3, message: "Good!"}
        ],
        dialogs: [
            {id: 1, name: "Dimych"},
            {id: 2, name: "Vas"},
            {id: 3, name: "Bobs"},
            {id: 4, name: "Alex"},
            {id: 5, name: "Lex"}
        ],
    },
    sidebar: {
        friends: [
            {id: 1, name: "Dimych"},
            {id: 2, name: "Vas"},
            {id: 3, name: "Bobs"}
        ]
    }
};



export default state