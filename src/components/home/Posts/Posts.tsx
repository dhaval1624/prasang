import React, { useState, useEffect, useCallback } from "react";
import { useLazyQuery, useMutation, useQuery } from "@apollo/client";
import { Alert, Spinner } from "react-bootstrap";

import { postt } from "../../../store/storeTypes";
import { homeFeed, likePhoto } from "../../../utils/GqlQueries";
import Post from "./Post/Post";
// import { ppost } from "./PostsTypes";
import PostView from "./PostView/PostView";
import { useBottomScrollListener } from "react-bottom-scroll-listener";
import ContentLoader from "./ContentLoader";

interface postsResult {
    feed: [postt];
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
    const { refetch, error, loading, data } = useQuery<postsResult>(homeFeed);
    const [selectedPost, setSelectedPost] = useState<postt>();
    const [viewPost, setViewPost] = useState(false);
    const [likePhotoCall] = useMutation<number>(likePhoto);
    const [posts, setPosts] = useState<[postt]>();
    const [fetchMore, setFetchMore] = useState(true);

    const callback = async () => {
        if (!loading && fetchMore) {
            refetch();
            updateFeedState();
        }
    };

    useBottomScrollListener(callback);

    // console.log(error?.message, loading, data, posts, fetchMore);

    const updateFeedState = async () => {
        if (data) {
            if (posts && posts?.length > 0) {
                let newPosts: any = [...posts];
                newPosts = newPosts.concat([...data.feed]);
                setPosts(newPosts);
            } else {
                setPosts(data.feed);
            }
        }
    };

    useEffect(() => {
        if (!loading && !error && data && !posts) {
            updateFeedState();
        } else if (!loading && error && fetchMore) {
            setFetchMore(false);
        }
    }, [updateFeedState, loading, error, data, setFetchMore, fetchMore]);

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
    if (!loading && posts && !error) {
        content = renderPosts(posts, onPostSelect, likePhotoHandler);
    } else {
        content = error ? (
            <Alert variant="primary" style={{ maxHeight: "150px" }}>
                No more photos left for feed! Please Try again later.
            </Alert>
        ) : (
            ""
        );
    }

    return (
        <>
            <div className="posts-section">
                {viewPostContent}
                {content}

                {/* Loading */}
                {fetchMore && <ContentLoader />}
            </div>
        </>
    );
};
export default Posts;
