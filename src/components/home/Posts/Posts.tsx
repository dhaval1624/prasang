import React, { useState } from "react";
import { useMutation, useQuery } from "@apollo/client";
import { Spinner } from "react-bootstrap";

import { postt } from "../../../store/storeTypes";
import { homePhotos, likePhoto } from "../../../utils/GqlQueries";
import Post from "./Post/Post";
// import { ppost } from "./PostsTypes";
import PostView from "./PostView/PostView";

interface postsResult {
    photos: [postt];
}

const renderPosts = (
    photos: [postt],
    onPostSelect: (post: postt) => void,
    likePhotoHandler: (photoId: string) => void
) => {
    return photos.map((photo, index) => (
        <Post
            post={photo}
            onPostSelect={onPostSelect}
            key={index}
            likePhotoHandler={likePhotoHandler}
        />
    ));
};

const Posts = () => {
    const { error, loading, data } = useQuery<postsResult>(homePhotos);
    const [selectedPost, setSelectedPost] = useState<postt>();
    const [viewPost, setViewPost] = useState(false);
    const [likePhotoCall] = useMutation<number>(likePhoto);

    const onPostSelect = (post: postt) => {
        setSelectedPost(post);
        setViewPost(true);
    };

    const closePostView = () => {
        setViewPost(false);
    };

    const likePhotoHandler = (photoId: string) => {
        likePhotoCall({
            variables: {
                photoId,
            },
        });
    };

    let viewPostContent: any = "";
    if (viewPost && selectedPost) {
        viewPostContent = (
            <PostView
                onClosePost={closePostView}
                key="postview"
                post={selectedPost}
            />
        );
    }

    let content: any = <Spinner animation="border" />;
    if (!loading && data) {
        content = renderPosts(data.photos, onPostSelect, likePhotoHandler);
    } else {
        content = error ? error : "";
    }

    return (
        <>
            {viewPostContent}
            {content}
        </>
    );
};
export default Posts;
