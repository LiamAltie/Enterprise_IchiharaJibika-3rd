/**
 * コラムデータ取得ユーティリティ
 * MicroCMSからコラム一覧を取得する共通関数
 */

// 型定義
export interface ColumnItem {
  id: string;
  title: string;
  content: string;
  month: number;
  year: number;
  publishedAt: string;
  createdAt: string;
  updatedAt: string;
  revisedAt: string;
}

export interface ColumnListResponse {
  contents: ColumnItem[];
  totalCount: number;
  offset: number;
  limit: number;
}

/**
 * MicroCMSからコラム一覧を取得
 */
export async function fetchColumnList(): Promise<ColumnItem[]> {
  try {
    const response = await fetch(
      `${import.meta.env.PUBLIC_MICROCMS_BASE_URL}/column?limit=100&orders=-publishedAt`,
      {
        headers: {
          "X-MICROCMS-API-KEY": import.meta.env.MICROCMS_API_KEY,
        },
      }
    );

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data: ColumnListResponse = await response.json();
    return data.contents || [];
  } catch (error) {
    console.error("Column data fetch error:", error);
    return [];
  }
}

/**
 * 特定のコラムを取得
 */
export async function fetchColumnById(id: string): Promise<ColumnItem | null> {
  try {
    const response = await fetch(
      `${import.meta.env.PUBLIC_MICROCMS_BASE_URL}/column/${id}`,
      {
        headers: {
          "X-MICROCMS-API-KEY": import.meta.env.MICROCMS_API_KEY,
        },
      }
    );

    if (!response.ok) {
      if (response.status === 404) {
        return null;
      }
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error("Column fetch error:", error);
    return null;
  }
}