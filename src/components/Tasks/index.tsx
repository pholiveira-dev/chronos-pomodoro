import styles from "./styles.module.css";

export function Tasks() {
  return (
    <div className={styles.container}>
      <form className={styles.containerForm} action="" method="post">
        task:
      </form>

      <input
        className={styles.boxForm}
        type="text"
        placeholder="Ex.: estudar para a prova"
      />
      <p>
        Nesse ciclo <strong>foque</strong> por <strong>25 min.</strong>
      </p>
    </div>
  );
}
