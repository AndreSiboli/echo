import styles from '@/styles/components/pages/gallery/GalleryContainer.module.scss';

import Img from '@/components/utils/Img';
import { gallery } from '@/data/galleryImages';

export default function GalleryContainer() {
  //   const allImages = [img5, img1, img7, img2, img6, img15, img14, img12, img11, img3, img13, img9];

  return (
    <div className={styles.images_group}>
      {gallery.map((image) => (
        <div className={styles.image} key={image.id}>
          <Img
            src={image.src}
            alt={image.alt}
            style={{ objectFit: 'contain', width: '100%', height: '100%' }}
            fill={false}
          />
        </div>
      ))}
    </div>
  );
}
