import styles from '@/styles/pages/Contact.module.scss';

import Navbar from '@/components/bars/Navbar/Index';
import Container from '@/components/layout/Container';
import Footer from '@/components/bars/Footer/Index';
import Link from 'next/link';

import { RiMapPin2Line } from 'react-icons/ri';
import { FiPhone } from 'react-icons/fi';
import { MdOutlineEmail } from 'react-icons/md';
import { FaStar } from 'react-icons/fa6';
import SidePage from '@/components/layout/SidePages';

export default function Contact() {
    return (
        <SidePage>
            <main className={styles.contact}>
                <Container>
                    <div className={styles.contact_container}>
                        <div className={styles.contact_wrapper}>
                            <div className={styles.contact_text}>
                                <h1>Contact us</h1>
                                <p>
                                    We&apos;re at your service, ready to assist and provide answers
                                    to any questions you may pose. We&apos;re excitedly anticipating
                                    your contact!
                                </p>
                            </div>

                            <div className={styles.contact_info}>
                                <div className={styles.info}>
                                    <RiMapPin2Line />
                                    <p>28 Nebula Crescent</p>
                                </div>
                                <div className={styles.info}>
                                    <FiPhone />
                                    <p>555-7890-XYZ</p>
                                </div>
                                <div className={styles.info}>
                                    <MdOutlineEmail />
                                    <Link href="mailto:echo.fictionalmail@outlook.com">
                                        echo.fictionalmail@outlook.com
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className={styles.contact_merchant}>
                            <span>
                                <FaStar />
                                Make your memories for eternity
                                <FaStar />
                            </span>
                        </div>
                    </div>
                </Container>
            </main>
        </SidePage>
    );
}
