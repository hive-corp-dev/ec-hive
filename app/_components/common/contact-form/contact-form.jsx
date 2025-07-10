"use client";

import { useEffect, useCallback } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";
import { useRouter } from "next/navigation";

import styles from "./contact-form.module.scss";

const schema = yup.object().shape({
  お名前: yup.string().required("※入力必須の項目です"),
  法人名: yup.string(),
  電話番号: yup.string(),
  メールアドレス: yup.string().email("※正しいメールアドレスの形式でご入力ください").required("※入力必須の項目です"),
  お問い合わせ内容: yup
    .string()
    .oneOf(
      ["ホームページ制作を依頼したい", "料金プランについてのご質問", "その他ご質問等"],
      "※いずれかを選択してください"
    )
    .required(),
  お問い合わせ詳細: yup.string().required("※入力必須の項目です"),
});

export default function ContactForm() {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "all",
    defaultValues: {
      お名前: "",
      法人名: "",
      電話番号: "",
      メールアドレス: "",
      お問い合わせ内容: "以下から選択してください",
      お問い合わせ詳細: "",
    },
    resolver: yupResolver(schema),
  });

  const send = (data) => {
    axios
      .post("https://ssgform.com/s/zTmUVTZojUhe", data, {
        headers: {
          "content-type": "multipart/form-data", //axiosでフォーム送信する時に必要なheader情報
          "X-Requested-With": "XMLHttpRequest", //これが無いと400レスポンスが返却される
        },
      })
      .then((response) => {
        router.push("/contact/thanks");
      })
      .catch((error) => {
        console.error("エラー:", error);
        alert("エラー: " + error);
      });
  };

  const { executeRecaptcha } = useGoogleReCaptcha();
  const handleReCaptchaVerify = useCallback(async () => {
    if (!executeRecaptcha) {
      console.log("recaptcha の実行はまだ利用できません。");
      return;
    }
  }, [executeRecaptcha]);

  useEffect(() => {
    handleReCaptchaVerify();
  }, [handleReCaptchaVerify]);

  return (
    <GoogleReCaptchaProvider reCaptchaKey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}>
      <form
        action="https://ssgform.com/s/OgMmt0Oelk7X"
        method="post"
        className={styles.form}
        onSubmit={handleSubmit(send)}
      >
        <div className={styles.inner}>
          <p className={styles.info}>
            <span>*</span>は必須項目です。
          </p>
          <div className={styles.row}>
            <label htmlFor="your-name" className={`${styles.label} ${styles.isRequired}`}>
              お名前
            </label>
            <div className={`${styles.control}`}>
              <input
                type="text"
                id="your-name"
                name="お名前"
                placeholder="お名前"
                className={styles.input}
                {...register("お名前")}
              />
            </div>
            <p className={styles.errorMessage}>{errors.お名前?.message}</p>
          </div>
          <div className={styles.row}>
            <label htmlFor="corp-name" className={styles.label}>
              法人名
            </label>
            <div className={`${styles.control}`}>
              <input
                type="text"
                id="corp-name"
                name="法人名"
                placeholder="株式会社ジャムファクトリー"
                className={styles.input}
                {...register("法人名")}
              />
            </div>
            <p className={styles.errorMessage}>{errors.法人名?.message}</p>
          </div>
          <div className={styles.row}>
            <label htmlFor="tel" className={styles.label}>
              電話番号
            </label>
            <div className={`${styles.control}`}>
              <input
                type="tel"
                name="電話番号"
                placeholder="000-0000-0000"
                className={styles.input}
                {...register("電話番号")}
              />
            </div>
          </div>
          <div className={styles.row}>
            <label htmlFor="email" className={`${styles.label} ${styles.isRequired}`}>
              メールアドレス
            </label>
            <div className={`${styles.control}`}>
              <input
                type="email"
                name="メールアドレス"
                placeholder="example@mail.com"
                className={styles.input}
                {...register("メールアドレス")}
              />
            </div>
            <p className={styles.errorMessage}>{errors.メールアドレス?.message}</p>
          </div>

          <div className={styles.row}>
            <label htmlFor="category" className={`${styles.label} ${styles.isRequired}`}>
              お問い合わせ内容
            </label>
            <div className={`${styles.control} ${styles.isSelect}`}>
              <select name="お問い合わせ内容" id="category" className={styles.select} {...register("お問い合わせ内容")}>
                <option>以下から選択してください</option>
                <option value="ホームページ制作を依頼したい">ホームページ制作を依頼したい</option>
                <option value="料金プランについてのご質問">料金プランについてのご質問</option>
                <option value="その他">その他</option>
              </select>
            </div>
            <p className={styles.errorMessage}>{errors.お問い合わせ内容?.message}</p>
          </div>

          <div className={styles.row}>
            <label htmlFor="detail" className={`${styles.label} ${styles.isRequired}`}>
              お問い合わせ詳細
            </label>
            <div className={`${styles.control}`}>
              <textarea
                name="お問い合わせ詳細"
                id="detail"
                placeholder="詳細を入力してください"
                className={styles.textarea}
                {...register("お問い合わせ詳細")}
              ></textarea>
            </div>
            <p className={styles.errorMessage}>{errors.お問い合わせ詳細?.message}</p>
          </div>
        </div>
        <div className={styles.btnWrap}>
          <button type="submit" className={styles.submitBtn} onClick={handleReCaptchaVerify}>
            送信する
          </button>
        </div>
      </form>
    </GoogleReCaptchaProvider>
  );
}
