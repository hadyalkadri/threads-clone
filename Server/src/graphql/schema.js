export default `
    scalar Date

    type User {
        _id: ID!
        username: String!
        name: String!
        verified: Boolean
        photo: String
        bio: String
        link: String
        followers: [User]
    }
    type Reply {
        _id: ID!
        author: User
        content: String
        likes: Int
    }
    type Thread {
        _id: ID!
        author: User!
        content: String
        image: String
        replies: [Reply]
        repliesCount: Int
        likesCount: Int
        mention: Boolean
        mentionUser: User
        createdAt: String
    }

    type Deleted {
        message: String!
    }
    type Query {
        getThread(_id: ID!): Thread 
        getThreads: [Thread]
    }

    type Mutation {
        createThread(_id: String, content: String!): Thread
        updateThread(_id: ID!, content: String): Thread 
        removeThread(_id: ID!): Deleted
        signUp(username: String!, name: String!, verified: Boolean, bio: String): User
    }

    schema {
        query: Query
        mutation: Mutation
    }
`