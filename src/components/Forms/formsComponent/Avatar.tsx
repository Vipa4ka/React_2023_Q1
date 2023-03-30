import avatarImg from './avatar.png';
import styles from '../Forms.module.css';
import { FormProps } from '../../../pages/Form';

export default function Avatar({ avatar }: FormProps) {
  return (
    <label>
      <img className={styles.avatar} src={avatarImg} alt="avatarImg" />
      <input
        className={styles.input_avatar}
        type="file"
        name="avatar"
        ref={avatar}
        placeholder="Avarat"
        accept="image/*"
      />
      {/* {avatarInput && <div className={styles.input_err}>{avatarInput}</div>} */}
    </label>
  );
}
