import styles from "./contact-form.module.scss";
import { useEffect, useRef, useState } from "react";

export default function ContactForm() {
  const contentRef = useRef(null);
  const [selectedValue, setSelectedValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    e.target.submit();
  };

  return (
    <div className={styles.form} ref={contentRef}>
      <form
        action="https://hyperform.jp/api/SSXRJsPR"
        method="post"
        onSubmit={handleSubmit}
      >
        <label className={styles.form_row}>
          <div className={styles.form_head}>
            <span className={styles.label}>お名前</span>
            <span className={styles.form_required}>*</span>
          </div>
          <div className={styles.form_body}>
            <input
              type="text"
              name="お名前"
              placeholder="お名前"
              required="required"
              className={styles.form_input}
            />
          </div>
        </label>

        <label className={styles.form_row}>
          <div className={styles.form_head}>
            <span className={styles.label}>法人名</span>
          </div>
          <div className={styles.form_body}>
            <input
              type="text"
              name="法人名"
              placeholder="株式会社ECHive"
              className={styles.form_input}
            />
          </div>
        </label>

        <label className={styles.form_row}>
          <div className={styles.form_head}>
            <span className={styles.label}>電話番号</span>
          </div>
          <div className={styles.form_body}>
            <input
              type="tel"
              name="電話番号"
              placeholder="000-0000-0000"
              className={styles.form_input}
            />
          </div>
        </label>

        <label className={styles.form_row}>
          <div className={styles.form_head}>
            <span className={styles.label}>メールアドレス</span>
            <span className={styles.form_required}>*</span>
          </div>
          <div className={styles.form_body}>
            <input
              type="email"
              name="メールアドレス"
              placeholder="example@mail.com"
              required="required"
              className={styles.form_input}
            />
          </div>
        </label>

        <label className={styles.form_row}>
          <div className={styles.form_head}>
            <span className={styles.label}>お問い合わせ内容</span>
            <span className={styles.form_required}>*</span>
          </div>
          <div className={styles.form_body}>
            <select
              name="お問い合わせ内容"
              required="required"
              value={selectedValue}
              onChange={(e) => setSelectedValue(e.target.value)}
              className={`${styles.form_select} ${selectedValue === "" ? styles.placeholder : ""}`}
            >
              <option value="">選択してください</option>
              <option value="ECサイト制作について相談したい">
                ECサイト制作について相談したい
              </option>
              <option value="Shopify導入・カスタマイズ相談">
                Shopify導入・カスタマイズ相談
              </option>
              <option value="その他のお問い合わせ">その他のお問い合わせ</option>
            </select>
          </div>
        </label>

        <label className={styles.form_row}>
          <div className={styles.form_head}>
            <span className={styles.label}>お問い合わせ詳細</span>
            <span className={styles.form_required}>*</span>
          </div>
          <div className={styles.form_body}>
            <textarea
              name="お問い合わせ詳細"
              cols="30"
              rows="10"
              placeholder="詳細を入力してください"
              required="required"
              className={styles.form_textarea}
            ></textarea>
          </div>
        </label>

        <div className={styles.form_row}>
          <div className={styles.form_btn}>
            <button type="submit" className={styles.form_btnItem}>
              送信する
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
