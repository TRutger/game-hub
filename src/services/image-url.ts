import noImage from '../assets/no-image-placeholder-6f3882e0.webp'

const getCroppedImageUrl = (url: string) => {
    if (!url) return noImage;
    const target = 'media/';
    const index = url.indexOf(target) + target.length;
    return url.slice(0, index) + 'resize/600/-/' + url.slice(index);
}

export default getCroppedImageUrl