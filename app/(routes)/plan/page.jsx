import styles from "./plan-page.module.scss";
import Container from "@/app/_components/common/container/container";
import SubMv from "@/app/_components/common/sub-mv/sub-mv";
import PlanOverview from "@/app/_components/plan/plan-overview/plan-overview";
import Image from "next/image";
import { FaCheck } from "react-icons/fa6";
import { FaRegCircle } from "react-icons/fa";
import { CgClose } from "react-icons/cg";
import logoGa from "/public/images/common/logo-ga.svg";
import logoSc from "/public/images/common/logo-sc.svg";
import logoGm from "/public/images/common/logo-gm.svg";
import logoGc from "/public/images/common/logo-gc.svg";
import logoSnsTimeline from "/public/images/common/logo-sns-timeline.svg";
import logoFavicon from "/public/images/common/logo-favi.svg";
import logoRevision from "/public/images/common/logo-revision.svg";
import logoAddPage from "/public/images/common/logo-add-page.svg";
import logoAddSection from "/public/images/common/logo-add-section.svg";
import logoCms from "/public/images/common/logo-cms.svg";
import logoCf from "/public/images/common/logo-cf.svg";
import logoAddForm from "/public/images/common/logo-add-form.svg";
import logoSnsApi from "/public/images/common/logo-sns-api.svg";
import logoBtnAnimFree from "/public/images/common/logo-btn-anim-free.svg";
import logoLoading from "/public/images/common/logo-loading.svg";
import logoSimpleSlider from "/public/images/common/logo-simple-slider.svg";
import logoHamburgerMenu from "/public/images/common/logo-hamburger-menu.svg";
import logoAccordion from "/public/images/common/logo-accordion.svg";
import logoFadein from "/public/images/common/logo-fadein.svg";
import logoSliderAdvanced from "/public/images/common/logo-slider-advanced.svg";
import logoBtnAnimAdvanced from "/public/images/common/logo-btn-anim-advanced.svg";
import logoCustomAnimation from "/public/images/common/logo-custom-animation.svg";
import Simulator from "@/app/_components/common/simulator/simulator";
import { PLAN_METADATA } from "@/app/_data/metadata";
import { outputMetadata } from "@/app/_utils/outputMetadata";
import { PLAN_OPTION_DATA } from "@/app/_data/plan";

export const metadata = outputMetadata(PLAN_METADATA.title, PLAN_METADATA.description, PLAN_METADATA.slug);

export default function PlanPage() {
  const freeOptions = PLAN_OPTION_DATA.filter((option) => option.categoryId === "free-option");

  const paidOptions = PLAN_OPTION_DATA.filter((option) => option.categoryId === "paid-option");

  const freeAnimations = PLAN_OPTION_DATA.filter((option) => option.categoryId === "free-animation");

  const paidAnimations = PLAN_OPTION_DATA.filter((option) => option.categoryId === "paid-animation");

  return (
    <main className={styles.main}>
      <SubMv jpTitle="料金プラン" enTitle="PLANS" breadcrumbPaths={[{ name: "料金プラン" }]} hasBorder />

      <div className={styles.body}>
        <Container>
          <section className={styles.overview}>
            <h2 className={styles.secTitle} data-en="PLAN OVERVIEW">
              料金プラン概要
            </h2>
            <p className={styles.overviewText}>
              ホームページの機能や規模に合わせて、3つのプランからお選びいただけます。
            </p>
            <PlanOverview />
          </section>

          <section className={styles.detail}>
            <h2 className={styles.secTitle} data-en="DETAILS">
              料金プラン詳細
            </h2>

            {/* <p className={styles.detailText}>全プラン共通で、料金に含まれている</p> */}

            <div className={styles.detailList}>
              <div className={styles.detailItem}>
                <h3>制作ページ数</h3>

                <p>
                  プランごとに制作可能なページ数を設定しています。ページ数の追加は有料オプションにて対応可能です。ページ内のコンテンツは、TOPページは6セクションまで、その他のページは3セクションまで制作します。
                  <small>
                    ※ページの追加はBasicプラン、CMSプランのみご利用いただけます。
                    <br />
                    ※セクションとは、見出しとコンテンツから構成される1つのブロックのことです。セクション追加は有料オプションにて全プランで対応可能です。
                  </small>
                </p>
              </div>

              <div className={styles.detailItem}>
                <h3>画像・テキスト修正</h3>

                <p>
                  プランごとに月に何回までの画像・テキスト修正が可能かを設定しています。修正の依頼は公式LINE、もしくは当サイトのお問い合わせフォームからご連絡ください。1回につき約30分程度の作業工数を想定しています。修正回数の上限を超える場合は有料オプションにて対応可能です。
                </p>
              </div>

              <div className={styles.detailItem}>
                <h3>オリジナルデザイン</h3>
                <p>
                  当サービス独自のデザインシステムで、オリジナルデザインを制作します。デザインの王道パターンを取り入れた100種類以上ものパーツを組み合わせて制作しますので、高いユーザービリティを保ったままデザイン性に優れたホームページを制作します。
                </p>
              </div>

              <div className={styles.detailItem}>
                <h3>レスポンシブ対応</h3>
                <p>
                  PCだけでなく、スマートフォンやタブレット端末にも対応したレスポンシブデザインを制作します。どのデバイスからでも快適に閲覧できるため、ユーザーエクスペリエンスが向上し、SEO対策としても有効です。
                </p>
              </div>

              <div className={styles.detailItem}>
                <h3>ドメイン無料</h3>
                <p>
                  ホームページのドメインを無料で取得します。取得後の管理も弊社で行いますので、お客様はドメインの更新や管理について気にする必要がありません。
                  <br />
                  <small>
                    ※.comや.jpなどの、ドメインの年間費用が2,000円以下のものに限ります。それ以上の費用がかかる場合は、差額をお支払いいただきます。
                  </small>
                </p>
              </div>

              <div className={styles.detailItem}>
                <h3>SEO対策</h3>
                <p>
                  ホームページを検索エンジンの上位に表示させるための対策を行います。メタタグやOGPの設定、サイトマップの作成など、基本的なSEO対策を行います。また、適切なHTML構造、タグの使用を徹底し、検索エンジンに最適化されたホームページを制作します。
                </p>
              </div>

              <div className={styles.detailItem}>
                <h3>お問い合わせフォーム</h3>
                <p>
                  製品やサービスなどに関する質問など、ホームページを訪れたお客様からのお問い合わせを受け付けるフォームを設置します。お問い合わせ以外にも、アンケートや資料請求など幅広い用途に利用可能で、ホームページには欠かせない機能です。
                </p>
              </div>

              <div className={styles.detailItem}>
                <h3>高速サーバー / セキュリティ対策</h3>
                <p>
                  当サービスでは、高いセキュリティ性と高速表示が特徴的な、Jamstackという技術構成を採用しています。サーバーの負荷を軽減し、高速表示を実現するとともに、SSL証明書の設定やセキュリティ対策を徹底して行います。
                </p>
              </div>

              <div className={styles.detailItem}>
                <h3>公開後サポート</h3>
                <p>
                  ホームページ公開後も、お客様のご要望に応じて修正や更新を行います。また、ホームページに関するご質問や、CMSの使用方法のサポート等もチャットにて対応しておりますので、お気軽にご連絡ください。
                </p>
              </div>

              <div className={styles.detailItem}>
                <h3>お知らせ / ブログ等の更新機能</h3>
                <p>
                  お知らせやブログなど、お客様自身で更新可能な機能を実装します。これら以外にも「実績紹介」や「製品情報」など、お客様のご要望に合わせた更新機能を作成可能です。
                  <small>※CMSプランでのみご利用いただけます。</small>
                </p>
              </div>
            </div>
          </section>

          <section className={styles.option} id="option">
            <h2 className={styles.secTitle} data-en="OPTIONS">
              追加オプション
            </h2>

            <div className={styles.optionText}>
              <p>
                プランごとに利用できるオプション一覧です。
                <br />
                オプションの追加はホームページ公開後でも可能ですので、お気軽にご相談ください。
              </p>
            </div>

            <div className={styles.tableWrap}>
              <div className={styles.table}>
                <div className={styles.headRow}>
                  <div className={styles.headCell}></div>
                  <div className={styles.headCell}>Minimal</div>
                  <div className={styles.headCell}>Basic</div>
                  <div className={styles.headCell}>CMS</div>
                </div>

                <div className={styles.catRow}>
                  <span>無料オプション</span>
                </div>

                {freeOptions.map((item) => {
                  const { id, name, text, iconPath, price, availablePlans } = item;

                  return (
                    <div className={styles.row} key={id}>
                      <div className={styles.infoCell}>
                        <div className={styles.infoHead}>
                          <div className={styles.optionIcon}>
                            <Image src={iconPath} alt={name} fill />
                          </div>
                          <span className={styles.optionTitle}>{name}</span>
                        </div>

                        {price.showPrice && (
                          <span className={styles.optionPrice}>
                            {typeof price.priceNum === "number" ? (
                              <>
                                <span>{price.priceNum.toLocaleString()}</span>円<small>(税込)</small> / 1
                                {price.countUnit}
                              </>
                            ) : (
                              <span>{priceNum}</span>
                            )}
                          </span>
                        )}
                        <p className={styles.optionExp}>{text}</p>

                        {/* スマホのみ */}
                        <div className={styles.optionSpRow}>
                          <div className={styles.optionCell}>
                            <span>Minimal</span>
                            {availablePlans.includes("minimal") ? <FaCheck /> : <span className={styles.bar}></span>}
                          </div>
                          <div className={styles.optionCell}>
                            <span>Basic</span>
                            {availablePlans.includes("basic") ? <FaCheck /> : <span className={styles.bar}></span>}
                          </div>
                          <div className={styles.optionCell}>
                            <span>CMS</span>
                            {availablePlans.includes("cms") ? <FaCheck /> : <span className={styles.bar}></span>}
                          </div>
                        </div>
                      </div>
                      <div className={styles.cell}>
                        {availablePlans.includes("minimal") ? <FaCheck /> : <span className={styles.bar}></span>}
                      </div>
                      <div className={styles.cell}>
                        {availablePlans.includes("basic") ? <FaCheck /> : <span className={styles.bar}></span>}
                      </div>
                      <div className={styles.cell}>
                        {availablePlans.includes("cms") ? <FaCheck /> : <span className={styles.bar}></span>}
                      </div>
                    </div>
                  );
                })}

                <div className={`${styles.catRow} ${styles.hasMt}`}>
                  <span>有料オプション</span>
                </div>

                {paidOptions.map((item) => {
                  const { id, name, text, iconPath, price, availablePlans } = item;

                  return (
                    <div className={styles.row} key={id}>
                      <div className={styles.infoCell}>
                        <div className={styles.infoHead}>
                          <div className={styles.optionIcon}>
                            <Image src={iconPath} alt={name} fill />
                          </div>
                          <span className={styles.optionTitle}>{name}</span>
                        </div>

                        {price.showPrice && (
                          <span className={styles.optionPrice}>
                            {typeof price.priceNum === "number" ? (
                              <>
                                <span>{price.priceNum.toLocaleString()}</span>円<small>(税込)</small> / 1
                                {price.countUnit}
                              </>
                            ) : (
                              <span>{priceNum}</span>
                            )}
                          </span>
                        )}
                        <p className={styles.optionExp}>{text}</p>
                        {/* スマホのみ */}
                        <div className={styles.optionSpRow}>
                          <div className={styles.optionCell}>
                            <span>Minimal</span>
                            {availablePlans.includes("minimal") ? <FaCheck /> : <span className={styles.bar}></span>}
                          </div>
                          <div className={styles.optionCell}>
                            <span>Basic</span>
                            {availablePlans.includes("basic") ? <FaCheck /> : <span className={styles.bar}></span>}
                          </div>
                          <div className={styles.optionCell}>
                            <span>CMS</span>
                            {availablePlans.includes("cms") ? <FaCheck /> : <span className={styles.bar}></span>}
                          </div>
                        </div>
                      </div>

                      <div className={styles.cell}>
                        {availablePlans.includes("minimal") ? <FaCheck /> : <span className={styles.bar}></span>}
                      </div>
                      <div className={styles.cell}>
                        {availablePlans.includes("basic") ? <FaCheck /> : <span className={styles.bar}></span>}
                      </div>
                      <div className={styles.cell}>
                        {availablePlans.includes("cms") ? <FaCheck /> : <span className={styles.bar}></span>}
                      </div>
                    </div>
                  );
                })}

                <div className={`${styles.catRow} ${styles.hasMt}`}>
                  <span>無料アニメーション</span>
                </div>

                {freeAnimations.map((item) => {
                  const { id, name, text, iconPath, price, availablePlans } = item;

                  return (
                    <div className={styles.row} key={id}>
                      <div className={styles.infoCell}>
                        <div className={styles.infoHead}>
                          <div className={styles.optionIcon}>
                            <Image src={iconPath} alt={name} fill />
                          </div>
                          <span className={styles.optionTitle}>{name}</span>
                        </div>

                        {price.showPrice && (
                          <span className={styles.optionPrice}>
                            {typeof price.priceNum === "number" ? (
                              <>
                                <span>{price.priceNum.toLocaleString()}</span>円<small>(税込)</small> / 1
                                {price.countUnit}
                              </>
                            ) : (
                              <span>{priceNum}</span>
                            )}
                          </span>
                        )}
                        <p className={styles.optionExp}>{text}</p>
                        {/* スマホのみ */}
                        <div className={styles.optionSpRow}>
                          <div className={styles.optionCell}>
                            <span>Minimal</span>
                            {availablePlans.includes("minimal") ? <FaCheck /> : <span className={styles.bar}></span>}
                          </div>
                          <div className={styles.optionCell}>
                            <span>Basic</span>
                            {availablePlans.includes("basic") ? <FaCheck /> : <span className={styles.bar}></span>}
                          </div>
                          <div className={styles.optionCell}>
                            <span>CMS</span>
                            {availablePlans.includes("cms") ? <FaCheck /> : <span className={styles.bar}></span>}
                          </div>
                        </div>
                      </div>
                      <div className={styles.cell}>
                        {availablePlans.includes("minimal") ? <FaCheck /> : <span className={styles.bar}></span>}
                      </div>
                      <div className={styles.cell}>
                        {availablePlans.includes("basic") ? <FaCheck /> : <span className={styles.bar}></span>}
                      </div>
                      <div className={styles.cell}>
                        {availablePlans.includes("cms") ? <FaCheck /> : <span className={styles.bar}></span>}
                      </div>
                    </div>
                  );
                })}

                <div className={`${styles.catRow} ${styles.hasMt}`}>
                  <span>有料アニメーション</span>
                </div>

                {paidAnimations.map((item) => {
                  const { id, name, text, iconPath, price, availablePlans } = item;

                  return (
                    <div className={styles.row} key={id}>
                      <div className={styles.infoCell}>
                        <div className={styles.infoHead}>
                          <div className={styles.optionIcon}>
                            <Image src={iconPath} alt={name} fill />
                          </div>
                          <span className={styles.optionTitle}>{name}</span>
                        </div>

                        {price.showPrice && (
                          <span className={styles.optionPrice}>
                            {typeof price.priceNum === "number" ? (
                              <>
                                <span>{price.priceNum.toLocaleString()}</span>円<small>(税込)</small> / 1
                                {price.countUnit}
                              </>
                            ) : (
                              <span>{price.priceNum}</span>
                            )}
                          </span>
                        )}
                        <p className={styles.optionExp}>{text}</p>
                        {/* スマホのみ */}
                        <div className={styles.optionSpRow}>
                          <div className={styles.optionCell}>
                            <span>Minimal</span>
                            {availablePlans.includes("minimal") ? <FaCheck /> : <span className={styles.bar}></span>}
                          </div>
                          <div className={styles.optionCell}>
                            <span>Basic</span>
                            {availablePlans.includes("basic") ? <FaCheck /> : <span className={styles.bar}></span>}
                          </div>
                          <div className={styles.optionCell}>
                            <span>CMS</span>
                            {availablePlans.includes("cms") ? <FaCheck /> : <span className={styles.bar}></span>}
                          </div>
                        </div>
                      </div>
                      <div className={styles.cell}>
                        {availablePlans.includes("minimal") ? <FaCheck /> : <span className={styles.bar}></span>}
                      </div>
                      <div className={styles.cell}>
                        {availablePlans.includes("basic") ? <FaCheck /> : <span className={styles.bar}></span>}
                      </div>
                      <div className={styles.cell}>
                        {availablePlans.includes("cms") ? <FaCheck /> : <span className={styles.bar}></span>}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>

          <section className={styles.simulator} id="simulator">
            <h2 className={styles.secTitle} data-en="PRICE SIMULATOR">
              料金シミュレーター
            </h2>

            <Simulator />
          </section>
        </Container>
      </div>
    </main>
  );
}
