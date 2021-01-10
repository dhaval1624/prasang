import { gql } from "@apollo/client";

export const Login_User = gql`
    mutation login($email: String!, $password: String!) {
        login(data: { email: $email, password: $password }) {
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

export const user_participate = gql`
    mutation participate($eventId: ID!) {
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
export const homeFeed = gql`
    query {
        feed(limit: 5) {
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

export const editProfile = gql`
    mutation editProfile(
        $name: String
        $email: String
        $password: String
        $username: String
        $contactNo: String
        $image: Upload
    ) {
        editProfile(
            data: {
                name: $name
                email: $email
                password: $password
                username: $username
                contactNo: $contactNo
                image: $image
            }
        ) {
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
`;

export const Change_Password = gql`
    mutation changePassword($oldPassword: String!, $password: String!) {
        changePassword(
            data: { oldPassword: $oldPassword, password: $password }
        ) {
            name
            email
        }
    }
`;

export const FetchCategory = gql`
    query {
        eventCategories {
            categoryId
            name
            imagePath
        }
    }
`;

export const FetchEvent = gql`
    query events($categoryId: ID, $status: EventStatus) {
        events(where: { categoryId: $categoryId, status: $status }) {
            description
            endDate
            fees
            imageUrl
            startDate
            title
            priceAmount
            eventId
            lastRegistraionDate
            category {
                categoryId
                imagePath
                name
            }
        }
    }
`;

export const SINGLE_Event = gql`
    query event($eventId: ID!) {
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
            category {
                categoryId
                name
                imagePath
            }
        }
    }
`;

export const My_Participent_Event = gql`
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
                category {
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
`;

export const My_Participent_Event_Check = gql`
    mutation participateCheck($eventId: ID!) {
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
    }
`;

export const Fetch_Photos = gql`
    query {
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
`;

export const Fetch_My_Photos = gql`
    query {
        myPhotos {
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
`;

export const userParticipations = gql`
    query getParticipations($photoAdded: Boolean) {
        participations(photoAdded: $photoAdded) {
            participationId
            event {
                eventId
                title
            }
        }
    }
`;

export const postPhoto = gql`
    mutation addPhoto($image: Upload!, $eventId: ID!) {
        addPhoto(eventId: $eventId, image: $image) {
            photoId
            imageUrl
        }
    }
`;
