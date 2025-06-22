/**
 * MicroCMS関連の型定義
 */

// 共通のMicroCMSレスポンス構造
export interface MicroCMSListResponse<T> {
  contents: T[];
  totalCount: number;
  offset: number;
  limit: number;
}

// 共通のMicroCMSエンティティ
export interface MicroCMSEntity {
  id: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
}

// ニュース・お知らせ
export interface NewsItem extends MicroCMSEntity {
  title: string;
  contents?: string;
}

export type NewsListResponse = MicroCMSListResponse<NewsItem>;

// スタッフコラム
export interface ColumnItem extends MicroCMSEntity {
  title: string;
  content: string;
  month: number;
  year: number;
}

export type ColumnListResponse = MicroCMSListResponse<ColumnItem>;

// 休診日・休日当番医
export interface HolidayItem extends MicroCMSEntity {
  date: string;
  isDoctor: boolean;
}

export type HolidayListResponse = MicroCMSListResponse<HolidayItem>;