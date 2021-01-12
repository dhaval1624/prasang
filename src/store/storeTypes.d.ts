export interface user {
    userId: string;
    name: string;
    email: string;
    username: string;
    contactNo?: string;
    image?: string;
    participations: [participation];
    photos: [photo];
}
export interface photo {
    photoId: string;
    imageUrl: string;
    likes: number;
    isLiked: boolean;
    winner: boolean;
    user: user;
}
export interface participation {
    participationId: string;
    user: user;
    photo: photo;
    event: !event;
}
export interface event {
    eventId: string;
    title: string;
    description: string;
    startDate: string;
    endDate: string;
    priceAmount: number;
    fees: number;
    imageUrl: string;
    slug: string;
    category: eventCategory;
    lastRegistraionDate: string;
    participations: ![!participation];
}
export interface eventCategory {
    categoryId: string;
    name: string;
    imagePath: string;
    description: string;
}
export interface comment {
    commentId: string;
    text: string;
    photo: photo;
    user: user;
    createdAt: string;
}

export interface post {
    photoId: string;
    imageUrl: string;
    likes: number;
    isLiked: boolean;
    winner: boolean;
    comments: {
        commentId: string;
        name: string;
        text: string;
    }[];
    user: {
        name: string;
        image: string;
    };
}

export interface postt {
    photoId: string;
    imageUrl: string;
    likes: number;
    isLiked: boolean;
    winner: boolean;
    comments: [comment];
    user: {
        name: string;
        image: string;
    };
    createdAt: string;
    updatedAt: string;
}

export type initialAuthState = {
    userList?: [user];
    user?: user;
    token?: string;
    error?: string;
};
export type initialPostsState = {
    posts?: [post];
    selectedPost?: post;
    comments?: [comment];
};

export enum EventStatusEnum {
    Ongoing = "Ongoing",
    Ended = "Ended",
    Upcoming = "Upcoming",
    All = "All",
}

export interface category {
    categoryId: string;
    name: string;
    imagePath: string;
}

export type initialCategoryState = {
    catList?: [category];
    category?: category;
    error?: string;
};

export interface event {
    eventId: ID;
    title: String;
    description: String;
    startDate: String;
    endDate: String;
    priceAmount: Int;
    fees: Int;
    imageUrl: String;
    slug: String;
    lastRegistraionDate: String;
    category: EventCategory;
    createdAt: String;
    updatedAt: String;
    deletedAt: String;
}

export type initialEventState = {
    eventList?: [event];
    event?: event;
    error?: string;
};

export interface participation {
    participationId: !string;
    user: user;
    event: event;
    photo: string;
    participationDate: string;
    photoAdded: Boolean;
}

export type initialParticipationState = {
    participationList?: [participation];
    myParticipationList?: [participation];
    participation?: participation;
    error?: string;
};

export interface photo {
    photoId: String;
    imageUrl: String;
    likes: Int;
    isLiked: Boolean;
    winner: Boolean;
    // comments: [Comments]
    user: user;
    participant: participation;
    createdAt: String;
    updatedAt: String;
    deletedAt: String;
}

export type initialPhotoState = {
    photoList?: [photo];
    photo?: photo;
    error?: string;
};

export type store = {
    auth: initialAuthState;
    category: initialCategoryState;
    event: initialEventState;
    participation: initialParticipationState;
    photo: initialPhotoState;
};
