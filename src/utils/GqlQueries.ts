import { gql } from "@apollo/client";

export const Login_User = gql`
    mutation login($email: String!, $password: String!) {
        login(data: { email: $email, password: $password, role: "User" }) {
            token
            user {
                username
                userId
                name
                email
                contactNo
                IsEnable
                createdAt
                image
                participations {
                    participationId
                }
                photos {
                    photoId
                }
            }
        }
    }
`;

export const Register_User = gql`
    mutation registerUser(
        $name: String!
        $email: String!
        $password: String!
        $username: String!
    ) {
        registerUser(
            data: {
                name: $name
                email: $email
                password: $password
                username: $username
            }
        ) {
            name
            email
            username
        }
    }
`;
export const userProfile = gql`
    query {
        usersProfile {
            username
            userId
            name
            email
            contactNo
            IsEnable
            createdAt
            image
            participations {
                participationId
            }
            photos {
                photoId
            }
        }
    }
`;
export const homePageEvents = gql`
    query getEvents($status: EventStatus, $categoryId: ID, $paid: Boolean) {
        events(
            where: { status: $status, categoryId: $categoryId, paid: $paid }
        ) {
            eventId
            title
            imageUrl
            category {
                name
            }
        }
    }
`;
export const homePhotos = gql`
    query {
        photos {
            photoId
            imageUrl
            likes
            isLiked
            winner
            comments {
                commentId
            }
            user {
                name
                image
            }
            createdAt
            updatedAt
        }
    }
`;
export const likePhoto = gql`
    mutation likePhoto($photoId: ID!) {
        likePhoto(photoId: $photoId)
    }
`;
export const doComment = gql`
    mutation comment($photoId: ID!, $text: String!) {
        addComment(photoId: $photoId, text: $text) {
            commentId
            text
            user {
                name
                image
            }
            createdAt
        }
    }
`;
export const fetchPhotoComments = gql`
    query fetchPhotoComments($photoId: ID!) {
        comments(photoId: $photoId) {
            commentId
            text
            user {
                name
                image
            }
            createdAt
        }
    }
`;
