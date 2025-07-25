import styles from "./isometric-grid-demo.module.scss";

export default function IsometricGridDemo() {
  return (
    <div className={styles.container}>
      <h2>アイソメトリックグリッド模様のデモ</h2>

      <div className={styles.gridExamples}>
        <div className={styles.example}>
          <h3>基本的なアイソメトリックグリッド</h3>
          <div className={styles.basicGrid}></div>
        </div>

        <div className={styles.example}>
          <h3>六角形パターン</h3>
          <div className={styles.hexGrid}></div>
        </div>

        <div className={styles.example}>
          <h3>ドット状グリッド</h3>
          <div className={styles.dotGrid}></div>
        </div>

        <div className={styles.example}>
          <h3>カスタムカラー（メインカラー使用）</h3>
          <div className={styles.customColorGrid}></div>
        </div>

        <div className={styles.example}>
          <h3>3D効果グリッド</h3>
          <div className={styles.threeDGrid}></div>
        </div>

        <div className={styles.example}>
          <h3>アニメーショングリッド</h3>
          <div className={styles.animatedGrid}></div>
        </div>
      </div>
    </div>
  );
}
