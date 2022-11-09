import image from "../../icons/NotFound.png";
import styles from "./NotFoundPage.module.scss";

export const NotFoundPage = () => {
  return (
    <div className={styles.container}>
  <img src={image} className={styles.notFound}></img>
  </div>
  )
  
};
