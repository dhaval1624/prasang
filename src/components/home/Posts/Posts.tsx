import React, { useState, useEffect, useCallback } from "react";
import { useMutation, useQuery } from "@apollo/client";
import { Spinner } from "react-bootstrap";

import { postt } from "../../../store/storeTypes";
import { homeFeed, likePhoto } from "../../../utils/GqlQueries";
import Post from "./Post/Post";
// import { ppost } from "./PostsTypes";
import PostView from "./PostView/PostView";
import { useBottomScrollListener } from "react-bottom-scroll-listener";

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

    const callback = async () => {
        console.log("scrolled to bottom");
        if (!loading) {
            console.log("bottom refetched");
            refetch();
            // updateFeedState();
        }
    };

    useBottomScrollListener(callback, {
        offset: 50,
    });

    console.log(error, loading, data);

    const updateFeedState = useCallback(() => {
        if (data && !loading && !error) {
            if (posts && posts?.length > 0) {
                let newPosts: any = [...posts];
                newPosts = newPosts.concat([...data.feed]);
                setPosts(newPosts);
            } else {
                setPosts(data.feed);
            }
        }
    }, []);

    useEffect(() => {
        if (!loading && !error && data) {
            updateFeedState();
            console.log("useeffect called");
        }
    }, [updateFeedState, loading, error, data]);

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
    if (!loading && posts) {
        content = renderPosts(posts, onPostSelect, likePhotoHandler);
    } else {
        content = error ? error : "";
    }

    return (
        <>
            <div className="posts-section">
                {viewPostContent}
                {content}

                {/* Loading */}
                <div className="process-comm">
                    <div className="spinner">
                        <div className="bounce1" />
                        <div className="bounce2" />
                        <div className="bounce3" />
                    </div>
                </div>
            </div>
        </>
    );
};
export default Posts;
