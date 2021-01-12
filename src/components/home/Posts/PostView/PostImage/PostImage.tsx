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
                height: "530px", // Changes
                maxWidth: "100%",
            }}
        />
    );
};
export default PostImage;
