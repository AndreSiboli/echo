import styles from '@/styles/pages/Gallery.module.scss';

import Navbar from '@/components/bars/Navbar/Index';
import Container from '@/components/layout/Container';
import GalleryContainer from '@/components/pages/gallery/GalleryContainer';
import Footer from '@/components/bars/Footer/Index';
import SidePage from '@/components/layout/SidePages';
import Line from '@/components/animations/Line';

export default function Gallery() {
    return (
        <SidePage>
            <main className={styles.gallery}>
                <Container>
                    <div className={styles.gallery_container}>
                        <div className={styles.gallery_wrapper}>
                            <div className={styles.gallery_text}>
                                <h1>Echo, where your dreams comes true</h1>
                                <p>
                                    Step inside our virtual gallery to experience the magic of Echo,
                                    a photo studio that goes beyond the ordinary, transforming
                                    moments into timeless works of art.
                                </p>
                            </div>
                            <Line timer="cover 30% cover 100%" />
                            <div className={styles.gallery_images}>
                                <GalleryContainer />
                            </div>
                        </div>
                    </div>
                </Container>
            </main>
        </SidePage>
    );
}
