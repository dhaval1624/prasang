import { Image } from "react-bootstrap";

interface postImageProps {
    imageSrc: string;
}

const PostImage = (props: postImageProps) => {
    return (
        <Image
            src={props.imageSrc}
            fluid
            style={{
                width: "inherit",
                height: "100%",
                maxWidth: "100%",
            }}
        />
    );
};
export default PostImage;
