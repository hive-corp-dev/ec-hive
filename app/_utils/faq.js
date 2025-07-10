import { FAQ_CAT_DATA, FAQ_SUB_CAT_DATA, FAQ_DATA } from "@/app/_data/faq";

const getCategory = (categoryId) => {
  return FAQ_CAT_DATA.find((item) => item.id === categoryId);
};

const getSubCategory = (subCategoryId) => {
  return FAQ_SUB_CAT_DATA.find((item) => item.id === subCategoryId);
};

export const filteredFAQsForTopPage = () => {
  // faq_dataからinTopPageがtrueのものだけを取得
  return FAQ_DATA.filter((faq) => faq.inTopPage);
};

export const groupFAQs = (data) => {
  return data.reduce((acc, faq) => {
    // カテゴリとサブカテゴリをFAQデータのIDから取得
    const category = getCategory(faq.categoryId);
    const subCategory = getSubCategory(faq.subCategoryId);

    // カテゴリまたはサブカテゴリが見つからない場合はそのFAQデータを無視
    if (!category || !subCategory) return acc;

    // カテゴリがまだaccに存在しない場合、初期化
    if (!acc[category.name]) {
      acc[category.name] = {};
    }

    // サブカテゴリがまだそのカテゴリの中に存在しない場合、初期化
    if (!acc[category.name][subCategory.name]) {
      acc[category.name][subCategory.name] = [];
    }

    // FAQデータを適切なカテゴリとサブカテゴリの配列に追加
    acc[category.name][subCategory.name].push(faq);

    // category.idを足す
    // faq.categoryId = category.id;

    // accを返す（次のイテレーションのために）
    return acc;
  }, {});
};
