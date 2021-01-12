import { post, comment } from "../../../store/storeTypes";

export interface postsResult {
    photos: [post];
}
export interface ppost {
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
}
