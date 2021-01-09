export interface user {
    userId: string,
    name: string,
    email: string,
    username: string,
    contactNo?: string,
    image?: string
}


export type initialAuthState = {
    userList?: [user],
    user?:user,
    token?:string,
    error?:string
}

export interface category {
    categoryId:string,
    name:string
    imagePath:string
}

export type initialCategoryState = {
    catList?: [category],
    category?:category,
    error?:string
}

export interface event {
    eventId: ID
    title: String
    description: String
    startDate: String
    endDate: String
    priceAmount: Int
    fees: Int
    imageUrl: String
    slug: String
    lastRegistraionDate: String
    category: EventCategory
    createdAt: String
    updatedAt: String
    deletedAt: String
}

export type initialEventState = {
    eventList?: [event],
    event?:event,
    error?:string
}

export interface participation {
    participationId: string!
    user: user
    event: event
    photo: string
    participationDate: string
    photoAdded: Boolean
}

export type initialParticipationState = {
    participationList?: [participation],
    myParticipationList?: [participation],
    participation?:participation,
    error?:string
}

export interface photo {
    photoId: String
    imageUrl: String
    likes: Int
    isLiked: Boolean
    winner: Boolean
    // comments: [Comments]
    user: user
    participant: participation
    createdAt: String
    updatedAt: String
    deletedAt: String
}

export type initialPhotoState = {
    photoList?: [photo],
    photo?:photo,
    error?:string
}

export type store = {
    auth: initialAuthState,
    category: initialCategoryState,
    event:initialEventState,
    participation:initialParticipationState,
    photo:initialPhotoState
}

