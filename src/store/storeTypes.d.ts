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

export type store = {
    auth: initialAuthState;
};
