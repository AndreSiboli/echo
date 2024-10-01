'use client';

import styles from '@/styles/components/bars/Navbar/Menu.module.scss';

import Navigation from '@/components/bars/Navbar/Navigation';

interface PropsType {
  active: boolean;
}

export default function Menu(props: PropsType) {
  const { active } = props;

  return (
    <div className={`${styles.menu} ${active && styles.active}`}>
      <div className={styles.menu_container}>
        <div className={styles.menu_overflow}>
          <div className={styles.menu_wrapper}>
            <Navigation />
          </div>
        </div>
      </div>
    </div>
  );
}
