import styles from '@/styles/components/pages/gallery/GalleryContainer.module.scss';

import Img from '@/components/utils/Img';

import img1 from '@/assets/gallery/pexels-afonso-barroso-5271631.jpg';
import img2 from '@/assets/gallery/pexels-cottonbro-studio-4904569.jpg';
import img3 from '@/assets/gallery/pexels-david-leøng-2907248.jpg';
import img5 from '@/assets/gallery/pexels-lucas-brown-16548989.jpg';
import img6 from '@/assets/gallery/pexels-luizclas-1848565.jpg';
import img7 from '@/assets/gallery/pexels-mateo-almendares-2884310.jpg';
import img9 from '@/assets/gallery/pexels-mohamed-hamdi-19806320.jpg';
import img11 from '@/assets/gallery/pexels-roy-reyna-3007759.jpg';
import img12 from '@/assets/gallery/pexels-stephen-audu-11856544.jpg';
import img13 from '@/assets/gallery/pexels-vova-kras-2726161.jpg';
import img14 from '@/assets/gallery/pexels-yuri-manei-2235073.jpg';
import img15 from '@/assets/gallery/pexels-muhammadtaha-ibrahim-11959968.jpg';

export default function GalleryContainer() {
    const allImages = [img5, img1, img7, img2, img6, img15, img14, img12, img11, img3, img13, img9];

    return (
        <div className={styles.images_group}>
            {allImages.map((image) => (
                <div className={styles.image} key={image.src}>
                    <Img src={image} alt="Photograph" />
                </div>
            ))}
        </div>
    );
}
