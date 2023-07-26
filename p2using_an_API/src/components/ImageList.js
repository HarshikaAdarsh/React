import ImageShow from './ImageS  how'
function ImageList({images})
{
    const renderedImage = images.map((image) => {
        return <ImageShow key={image.id} image={image}/>;
    });
    return <div>{ renderedImages}</div>;
}
export default ImageList;