import { gql } from '@apollo/client';

export const Login_User = gql`
  mutation login($email:String!,$password:String!){
    login(data:{
            email:$email,
            password:$password
          }){
      token
      user {
        userId
        name
        email
        username
      }
    }
  }
`;

export const Register_User = gql`
mutation registerUser($name:String!,$email:String!,$password:String!,$username:String!){
  registerUser(data:{
    name:$name,
    email:$email,
    password:$password,
    username:$username
  }){
    name
    email
    username
  }
}
`
export const userProfile = gql`
query {
  usersProfile{
    username
    userId
    password
    name
    email
    contactNo
    IsEnable
    createdAt
  }
}
`