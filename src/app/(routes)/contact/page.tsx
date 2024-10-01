import styles from '@/styles/pages/Contact.module.scss';

import Link from 'next/link';
import Container from '@/components/layout/Container';
import SidePage from '@/components/layout/SidePages';

import { RiMapPin2Line } from 'react-icons/ri';
import { FiPhone } from 'react-icons/fi';
import { MdOutlineEmail } from 'react-icons/md';
import { FaStar } from 'react-icons/fa6';

export default function Contact() {
  return (
    <SidePage>
      <main className={styles.contact}>
        <Container>
          <div className={styles.contact_container}>
            <div className={styles.contact_info}>
                
              <header className={styles.info_header}>
                <h1>Contact us</h1>
                <p>
                  We&apos;re at your service, ready to assist and provide answers to any questions
                  you may pose. We&apos;re excitedly anticipating your contact!
                </p>
              </header>

              <div className={styles.info_datas}>
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
              <p>
                <FaStar />
                Make your memories for eternity
                <FaStar />
              </p>
            </div>
          </div>
        </Container>
      </main>
    </SidePage>
  );
}
