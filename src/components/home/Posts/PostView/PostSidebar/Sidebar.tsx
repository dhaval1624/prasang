import { useEffect } from "react";
import PostViewHeader from "./PostViewHeader";
import PostViewContent from "./PostViewContent";
import PostViewFooter from "./PostViewFooter";
import { comment, postt } from "../../../../../store/storeTypes";
import { useState } from "react";
import { useMutation, useQuery } from "@apollo/client";
import { doComment, fetchPhotoComments } from "../../../../../utils/GqlQueries";

interface SidebarProps {
    post: postt;
}
interface fetchCommentsResult {
    comments: [comment];
}
interface writeCommentResult {
    addComment: comment;
}

const Sidebar = (props: SidebarProps) => {
    const { post } = props;
    const {
        refetch: refetchComments,
        loading: commentLoading,
        data: commentData,
        error: commentError,
    } = useQuery<fetchCommentsResult>(fetchPhotoComments, {
        variables: {
            photoId: post.photoId,
        },
    });
    const [
        comment,
        {
            data: writeCommentData,
            error: writeCommentErr,
            loading: writeCommentLoading,
        },
    ] = useMutation<writeCommentResult>(doComment);

    const [like, setLike] = useState({
        likes: 0,
        isLiked: false,
    });
    const [comments, setComments] = useState<[comment]>();

    useEffect(() => {
        setLike({
            likes: post.likes,
            isLiked: post.isLiked,
        });
        if (!commentError && !commentLoading) {
            setComments(commentData?.comments);
        }
    }, [
        post.likes,
        post.isLiked,
        setLike,
        commentLoading,
        commentData,
        commentError,
    ]);

    const writeComment = async (text: string) => {
        await comment({
            variables: {
                photoId: post.photoId,
                text,
            },
        });
        if (writeCommentData && comments) {
            let newComments = [...comments, writeCommentData.addComment];
            setComments(newComments as [comment]);
        }
        refetchComments();
    };

    return (
        <>
            <PostViewHeader
                name={post.user.name}
                comments={comments ? comments.length : 0}
                userImageUrl={post.user.image}
                key={post.photoId}
                createdAt={+post.createdAt}
            />
            <PostViewContent comments={comments} loading={commentLoading} />
            <PostViewFooter
                submitComment={writeComment}
                loading={writeCommentLoading}
                error={writeCommentErr?.message}
            />
        </>
    );
};

export default Sidebar;
