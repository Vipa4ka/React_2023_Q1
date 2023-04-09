import styles from './Cards.module.css';
import { CardProps } from '../../types/index';

const CardsListItem = ({ cards }: CardProps) => {
  return (
    <ul className={styles.product}>
      {cards &&
        cards.map((card) => {
          return (
            <li className={styles.list_card} key={card.id}>
              <img
                width="280"
                height="222"
                src={card.image}
                alt={card.name}
                className={styles.image_product}
              />
              <h2 className={styles.name_product}>{card.name}</h2>

              <span className={styles.price_product + ' ' + styles.card_price}>
                {card.quantity} kg{' '}
              </span>
              <span className={styles.price_product + ' ' + styles.kg}>{card.price}</span>
              <span>₴</span>

              <button className={styles.card_button + ' ' + styles.active_button}>
                <span className={styles.basket}></span>Вuy
              </button>
            </li>
          );
        })}
    </ul>
  );
};

export default CardsListItem;
