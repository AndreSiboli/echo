import styles from '@/styles/components/links/SocialMedia.module.scss';
import Link from 'next/link';

import { FaXTwitter, FaInstagram, FaP } from 'react-icons/fa6';

interface PropsType {
  orientation?: 'column';
}

export default function SocialMedia(props: PropsType) {
  const { orientation = '' } = props;
  const socials = [
    {
      icon: <FaXTwitter />,
      href: 'https://www.x.com',
      label: 'X (Twitter)',
    },
    {
      icon: <FaInstagram />,
      href: 'https://www.instagram.com',
      label: 'Instagram',
    },
    {
      icon: <FaP />,
      href: 'https://portfolio-andresiboli-project.vercel.app/',
      label: 'Portfolio',
    },
  ];

  return (
    <nav className={`${styles.social} ${styles[orientation]}`}>
      {socials.map((social) => (
        <div className={styles.social_link} key={social.label}>
          <Link href={social.href} target="_blank" aria-label={social.label}>
            {social.icon}
          </Link>
        </div>
      ))}
    </nav>
  );
}
