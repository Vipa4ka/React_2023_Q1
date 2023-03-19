import styles from './HeadTitle.module.css';

type Title = {
  children: string;
};

function HeadTitle({ children }: Title) {
  return <h1 className={styles.shop_name}>{children}</h1>;
}

export default HeadTitle;
