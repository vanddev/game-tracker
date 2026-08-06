interface GameImgProps {
    imageId: string;
    altText: string;
}

const isLocalPath = (path: string): boolean => {
    return path.startsWith('/') || path.startsWith('./') || path.startsWith('../');
}

const isRemoteUrl = (url: string): boolean => {
    return url.startsWith('http://') || url.startsWith('https://');
}

const loadImage = (imageId: string): string => {
    const isIGDBImageId = !isRemoteUrl(imageId) && !isLocalPath(imageId);

    if (isIGDBImageId) {
        return `https://images.igdb.com/igdb/image/upload/t_cover_big/${imageId}.jpg`;
    }

    return imageId;
}

const GameImg = ({ imageId, altText } : GameImgProps) => {

    const imgSrc = loadImage(imageId);

    return (
        <img
            src={imgSrc}
            alt={altText}
        />
    )
}

export default GameImg