import { gql } from '@apollo/client';

export const Login_User = gql`
  mutation login($email:String!,$password:String!){
    login(data:{
            email:$email,
            password:$password,
            role:"User"
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
    IsEnable
    createdAt
  }
}
`

export const editProfile = gql`
mutation editProfile($name: String, $email: String, $password: String, $username: String, $contactNo: String, $image: Upload){
  editProfile(data: {name: $name, email: $email, password: $password, username: $username, contactNo: $contactNo, image: $image})
}{
  username
  userId
  password
  name
  email
  IsEnable
  createdAt
}
`