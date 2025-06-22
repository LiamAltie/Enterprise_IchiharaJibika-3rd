/**
 * 日付操作に関するユーティリティ関数
 */

/**
 * 日付文字列をYYYY.MM.DD形式にフォーマット
 */
export const formatDate = (dateString: string): string => {
  const date = new Date(dateString);
  return `${date.getFullYear()}.${String(date.getMonth() + 1).padStart(2, '0')}.${String(date.getDate()).padStart(2, '0')}`;
};

/**
 * 現在の月から指定した月数後の日付を取得
 */
export const getMonthOffset = (offset: number): Date => {
  const today = new Date();
  return new Date(today.getFullYear(), today.getMonth() + offset, 1);
};

/**
 * 日付が現在の月かどうかを判定
 */
export const isCurrentMonth = (date: Date): boolean => {
  const today = new Date();
  return date.getMonth() === today.getMonth() && date.getFullYear() === today.getFullYear();
};