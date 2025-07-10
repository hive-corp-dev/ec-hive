"use client";

import { useState, useEffect } from "react";
import { PLAN_OPTION_DATA, PLAN_DATA } from "@/app/_data/plan";
import styles from "./simulator.module.scss";
import OptionList from "./option-list/option-list";

export default function Simulator() {
  const [activePlan, setActivePlan] = useState("minimal");
  const [paymentOption, setpaymentOption] = useState("monthly");

  const [options, setOptions] = useState(PLAN_OPTION_DATA);
  const [checkedOptions, setCheckedOptions] = useState([]);

  const [optionsCost, setOptionsCost] = useState(0);
  const [optionsCampaignCost, setOptionsCampaignCost] = useState(0);

  const [initialCost, setInitialCost] = useState(
    PLAN_DATA.find((plan) => plan.planId === activePlan).monthlyPrice.toLocaleString()
  );

  useEffect(() => {
    if (paymentOption === "monthly") {
      const optionsCost = checkedOptions.reduce((acc, option) => {
        if (option.availablePlans.includes(activePlan)) {
          return acc + option.price.priceNum * option.quantity;
        }
        return acc;
      }, 0);

      setOptionsCost(optionsCost);
    }
    // モニターキャンペーン値引き
    else if (paymentOption === "yearly") {
      let optionsCost = checkedOptions.reduce((acc, option) => {
        if (option.availablePlans.includes(activePlan)) {
          return acc + option.price.priceNum * option.quantity;
        }
        return acc;
      }, 0);

      let deductedOptionsCost = optionsCost - 30000;

      if (deductedOptionsCost < 0) {
        deductedOptionsCost = 0;
      }

      let optionsDeductAmount = optionsCost * -1;
      optionsDeductAmount < -30000 ? (optionsDeductAmount = -30000) : optionsDeductAmount;

      setOptionsCost(deductedOptionsCost);
      setOptionsCampaignCost(optionsDeductAmount);
    }

    console.log(optionsCost);

    const planCost =
      paymentOption === "monthly"
        ? PLAN_DATA.find((plan) => plan.planId === activePlan).monthlyPrice
        : PLAN_DATA.find((plan) => plan.planId === activePlan).yearlyCampaignPrice;

    const totalCost = optionsCost + planCost;

    setInitialCost(totalCost.toLocaleString());
  }, [activePlan, paymentOption, checkedOptions, optionsCost]);

  const handleCheck = (id) => {
    // もしすでにチェックされているオプションなら、チェックを外す
    if (checkedOptions.find((option) => option.id === id)) {
      setCheckedOptions(checkedOptions.filter((option) => option.id !== id));

      // オリジナルのオブジェクトのisCheckedを更新
      options.find((option) => {
        if (option.id === id) {
          option.isChecked = false;
        }
      });
    } else {
      // チェックされていないオプションなら、チェックを入れる
      const checkedOption = options.find((option) => option.id === id);
      setCheckedOptions([...checkedOptions, checkedOption]);

      setOptions(
        options.map((option) => {
          if (option.id === id) {
            option.isChecked = true;
          }
          return option;
        })
      );
    }
  };

  const handlePlanChange = (plan) => {
    setActivePlan(plan);

    // プランが変わったら、チェックされているオプションの中で選択可能なものだけ残す
    checkedOptions.filter((option) => {
      if (!option.availablePlans.includes(plan)) {
        setCheckedOptions(checkedOptions.filter((checkedOption) => checkedOption.id !== option.id));
      }
    });

    options.map((option) => {
      if (!option.availablePlans.includes(plan)) {
        option.isChecked = false;
      }
    });
  };

  useEffect(() => {
    checkedOptions.filter((option) => {
      if (!option.availablePlans.includes(activePlan)) {
        setCheckedOptions(checkedOptions.filter((checkedOption) => checkedOption.id !== option.id));
      }
    });
  }, [activePlan]);

  return (
    <div className={styles.wrap}>
      <div className={styles.simulator}>
        <p className={styles.title}>STEP 1. 料金プランを選択</p>
        <div
          className={`${styles.planWrap} ${
            activePlan === "minimal"
              ? styles.isMinimal
              : activePlan === "basic"
              ? styles.isBasic
              : activePlan === "cms"
              ? styles.isCms
              : null
          }`}
        >
          <button
            className={`${styles.planBtn} ${activePlan === "minimal" && styles.isActive}`}
            onClick={() => handlePlanChange("minimal")}
          >
            Minimal
          </button>
          <button
            className={`${styles.planBtn} ${activePlan === "basic" && styles.isActive}`}
            onClick={() => handlePlanChange("basic")}
          >
            Basic
          </button>
          <button
            className={`${styles.planBtn} ${activePlan === "cms" && styles.isActive}`}
            onClick={() => handlePlanChange("cms")}
          >
            CMS
          </button>
        </div>

        <div className={styles.paymentGroup}>
          <p className={styles.title}>STEP 2. お支払い方法を選択</p>
          <div className={`${styles.paymentWrap} ${paymentOption === "monthly" ? styles.isMonthly : styles.isYearly}`}>
            <span className={styles.paymentDiscount}>＼キャンペーン中!／</span>
            <button
              className={`${styles.paymentBtn} ${paymentOption === "monthly" && styles.isActive}`}
              onClick={() => setpaymentOption("monthly")}
            >
              月払い
            </button>
            <button
              className={`${styles.paymentBtn} ${paymentOption === "yearly" && styles.isActive}`}
              onClick={() => setpaymentOption("yearly")}
            >
              年払い
            </button>
          </div>
        </div>

        <div className={styles.optionGroup}>
          <p className={styles.title}>STEP 3. 追加オプションを選択</p>
          <div className={styles.optionBlock}>
            <OptionList
              label="無料オプション"
              options={options}
              categoryId="free-option"
              handleCheck={handleCheck}
              activePlan={activePlan}
            />
          </div>

          <div className={styles.optionBlock}>
            <OptionList
              label="有料オプション"
              options={options}
              categoryId="paid-option"
              handleCheck={handleCheck}
              activePlan={activePlan}
            />
          </div>

          <div className={styles.optionBlock}>
            <OptionList
              label="無料アニメーション"
              options={options}
              categoryId="free-animation"
              handleCheck={handleCheck}
              activePlan={activePlan}
            />
          </div>

          <div className={styles.optionBlock}>
            <OptionList
              label="有料アニメーション"
              options={options}
              categoryId="paid-animation"
              handleCheck={handleCheck}
              activePlan={activePlan}
            />
          </div>
        </div>
      </div>
      <div className={styles.resultWrap}>
        <div className={styles.result}>
          <div className={styles.resultList}>
            <div className={styles.resultHead}>
              <div className={styles.resultHeadCol}>項目名</div>
              <div className={styles.resultHeadCol}>数量</div>
              <div className={styles.resultHeadCol}>金額（税込）</div>
            </div>

            <div className={styles.resultPlanRow}>
              <div className={`${styles.resultPlanCol} ${activePlan === "cms" && styles.isCms}`}>
                {activePlan}プラン{paymentOption === "yearly" ? "（年払い / モニターキャンペーン）" : "（月払い）"}
              </div>
              <div className={styles.resultPlanCol}>1</div>
              <div className={styles.resultPlanCol}>
                {paymentOption === "monthly"
                  ? PLAN_DATA.find((plan) => plan.planId === activePlan).monthlyPrice.toLocaleString()
                  : PLAN_DATA.find((plan) => plan.planId === activePlan).yearlyCampaignPrice.toLocaleString()}
                円
              </div>
            </div>

            {checkedOptions.map((option) => {
              const { id, name, quantity, price, countable } = option;

              return (
                <div key={id} className={styles.resultItem}>
                  <div className={styles.resultCol}>{name}</div>
                  <div className={styles.resultCol}>
                    {countable ? (
                      <>
                        <button
                          className={styles.countBtn}
                          onClick={() => {
                            if (quantity > 1) {
                              option.quantity = quantity - 1;
                              setCheckedOptions([...checkedOptions]);
                            } else if (quantity === 1) {
                              setCheckedOptions(checkedOptions.filter((checkedOption) => checkedOption.id !== id));

                              // オリジナルのオブジェクトのisCheckedを更新
                              options.find((option) => {
                                if (option.id === id) {
                                  option.isChecked = false;
                                }
                              });
                            }
                          }}
                        >
                          -
                        </button>
                        {quantity}
                        <button
                          className={styles.countBtn}
                          disabled={quantity >= 10}
                          onClick={() => {
                            if (quantity < 10) {
                              option.quantity = quantity + 1;
                              setCheckedOptions([...checkedOptions]);
                            }
                          }}
                        >
                          +
                        </button>
                      </>
                    ) : (
                      quantity
                    )}
                  </div>
                  <div className={styles.resultCol}>
                    {price.showPrice ? (price.priceNum * quantity).toLocaleString() : "0"}円
                  </div>
                </div>
              );
            })}

            {/* オプション3万円無料枠 */}
            {paymentOption === "yearly" && (
              <div className={styles.resultItem}>
                <div className={styles.resultCol}>オプション料金3万円無料（モニターキャンペーン）</div>
                <div className={styles.resultCol}>1</div>
                <div className={styles.resultCol}>{optionsCampaignCost}円</div>
              </div>
            )}

            {/* {checkedOptions.length === 0 && <li>なし</li>} */}
          </div>

          <div className={styles.resultInitialCost}>
            <p className={styles.resultCostHead}>初回料金（税込）</p>
            <p className={styles.resultCost}>
              <strong>{initialCost}</strong>
              <span>円</span>
            </p>
          </div>

          <div className={styles.resultNextCost}>
            <p className={styles.resultCostHead}>
              {paymentOption === "monthly" ? "2ヶ月目" : "2年目"}以降の料金（税込）
            </p>

            <p className={styles.resultCost}>
              <strong>
                {paymentOption === "monthly"
                  ? PLAN_DATA.find((plan) => plan.planId === activePlan).monthlyPrice.toLocaleString()
                  : PLAN_DATA.find((plan) => plan.planId === activePlan).yearlyPrice.toLocaleString()}
              </strong>
              <span>
                円 / <span>{paymentOption === "monthly" ? "月" : "年"}</span>
              </span>
            </p>
          </div>
        </div>

        <div className={styles.resultSubInfo}>
          <ul>
            <li>シミュレーション結果の料金は目安となります。</li>
            <li>都度見積もりが必要となるオプションは除外しております。</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
