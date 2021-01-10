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
        contactNo
      }
    }
  }
`;

export const user_participate = gql`
mutation participate($eventId: ID!){
  participate(eventId: $eventId) {
    participationDate
    photoAdded
    event {
      title
      priceAmount
      eventId
    }
    user {
      userId
    }
  }
}`

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
    image
    IsEnable
    contactNo
    createdAt
  }
}
`

export const editProfile = gql`
mutation editProfile($name: String, $email: String, $password: String, $username: String, $contactNo: String, $image: Upload){
  editProfile(data: {name: $name, email: $email, password: $password, username: $username, contactNo: $contactNo, image: $image})
{
  username
  userId
  password
  name
  email
  contactNo
  IsEnable
  createdAt
  image
}
}
`

export const Change_Password = gql`
  mutation changePassword($oldPassword:String!,$password:String!){
    changePassword(data:{
      oldPassword:$oldPassword
      password:$password
    }){
      name
      email
    }
  }
`;

export const FetchCategory= gql` 
query {
    eventCategories {
        categoryId
        name
        imagePath
    }
}`

export const FetchEvent= gql` 
query events($categoryId:ID,$status:EventStatus){
    events(where:{categoryId: $categoryId,status:$status}) {
        description
        endDate
        fees
        imageUrl
        startDate
        title
        priceAmount
        eventId
        lastRegistraionDate
        category{
          categoryId
          imagePath
          name
          }
      }
}`

export const FetchEvents= gql` 
query {
    events(where:{status:$status}) {
        description
        endDate
        fees
        imageUrl
        startDate
        title
        priceAmount
        eventId
        lastRegistraionDate
        category{
          categoryId
          imagePath
          name
          }
      }
}`

export const SINGLE_Event = gql `
    query event($eventId:ID!){
      event(eventId: $eventId) {
          description
          endDate
          fees
          imageUrl
          startDate
          title
          priceAmount
          eventId
          lastRegistraionDate
          category{
            categoryId
            name
            imagePath
            }
    }
    }
`

export const My_Participent_Event = gql `
    query {
      myParticipations {
        participationDate
        event {
          description
          endDate
          fees
          imageUrl
          startDate
          title
          priceAmount
          eventId
          lastRegistraionDate
          category{
            categoryId
            imagePath
            }
        }
        user {
          username
          userId
          password
          name
          email
          image
          IsEnable
          contactNo
          createdAt
        }
      }
    }
`


export const My_Participent_Event_Check = gql`
mutation participateCheck($eventId: ID!){
  participateCheck(eventId: $eventId) {
    participationDate
    photoAdded
    event {
      title
      priceAmount
      eventId
    }
    user {
      userId
    }
  }
}`


export const Fetch_Photos = gql`
query{
  photos {
    likes
    comments {
      text
    }
    user {
      name
    }
    imageUrl
    participant {
      event {
        title
        priceAmount
        startDate
      }
    }
  }
}
`

export const Fetch_My_Photos = gql`
query {
  myPhotos{
    likes
    comments {
      text
    }
    user {
      name
    }
    imageUrl
    participant {
      event {
        title
        startDate
        priceAmount
      }
    }
  }
}
` 