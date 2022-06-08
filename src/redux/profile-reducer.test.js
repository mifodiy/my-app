import profileReducer, {addPostActionCreator, deletePost} from "./profile-reducer";

let initials =   {
    posts: [
        {id: '1', message: 'Hello my name is Vova ', likeCount: 32},
        {id: '2', message: 'Hello my name is dima ', likeCount: 11},
    ],
};

it("check length to add post", () => {
    let action = addPostActionCreator("Hello me")
    let newState = profileReducer(initials, action)
    expect(newState.posts.length).toBe(3)
})

it("check value must be correct", () => {
    let action = addPostActionCreator("Hello me")
    let newState = profileReducer(initials, action)
    expect(newState.posts[2].message).toBe("Hello me")
})

it("check the message deleting", () => {
    let action = deletePost(1)
    let newState = profileReducer(initials, action)
    expect(newState.posts.length).toBe(1)
})