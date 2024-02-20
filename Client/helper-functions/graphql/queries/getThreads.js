import { gql } from '@apollo/client';


export default gql`
query {
    getThreads{
      _id
      author {
        _id
        username
        name
        bio
        photo

      }
      content
      likesCount
      replies {
        _id
        content
        likes
        author {
          _id
          photo
        }
      }
      mentionUser {
        _id
      }
      createdAt
    }
  }
`