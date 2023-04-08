import styles from './HeadTitle.module.css';
import { Title } from '../../types/index';

function HeadTitle({ children }: Title) {
  return <h1 className={styles.shop_name}>{children}</h1>;
}

export default HeadTitle;
