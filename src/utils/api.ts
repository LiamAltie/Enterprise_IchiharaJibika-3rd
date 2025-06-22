/**
 * MicroCMS API呼び出しの共通ユーティリティ
 */

import type { NewsListResponse, ColumnListResponse, HolidayListResponse } from '../types/cms';

class CMSApiClient {
  private baseUrl: string;
  private apiKey: string;

  constructor() {
    this.baseUrl = import.meta.env.PUBLIC_MICROCMS_BASE_URL;
    this.apiKey = import.meta.env.MICROCMS_API_KEY;
  }

  private async fetchFromCMS<T>(endpoint: string, options: RequestInit = {}): Promise<T> {
    const response = await fetch(`${this.baseUrl}${endpoint}`, {
      headers: {
        'X-MICROCMS-API-KEY': this.apiKey,
        ...options.headers,
      },
      ...options,
    });

    if (!response.ok) {
      throw new Error(`CMS API Error: ${response.status} ${response.statusText}`);
    }

    return response.json();
  }

  /**
   * ニュース一覧を取得
   */
  async fetchNews(limit: number = 10): Promise<NewsListResponse> {
    try {
      return await this.fetchFromCMS<NewsListResponse>(`/news?limit=${limit}&orders=-publishedAt`);
    } catch (error) {
      console.error('News fetch error:', error);
      return { contents: [], totalCount: 0, offset: 0, limit };
    }
  }

  /**
   * 個別ニュースを取得
   */
  async fetchNewsById(id: string) {
    try {
      return await this.fetchFromCMS(`/news/${id}`);
    } catch (error) {
      console.error('News fetch error:', error);
      return null;
    }
  }

  /**
   * コラム一覧を取得
   */
  async fetchColumns(limit: number = 100): Promise<ColumnListResponse> {
    try {
      return await this.fetchFromCMS<ColumnListResponse>(`/column?limit=${limit}&orders=-publishedAt`);
    } catch (error) {
      console.error('Column fetch error:', error);
      return { contents: [], totalCount: 0, offset: 0, limit };
    }
  }

  /**
   * 休診日・休日当番医データを取得
   */
  async fetchHolidays(limit?: number): Promise<HolidayListResponse> {
    const limitParam = limit || new Date().getMonth() + 62;
    try {
      return await this.fetchFromCMS<HolidayListResponse>(`/holiday?limit=${limitParam}`);
    } catch (error) {
      console.error('Holiday fetch error:', error);
      return { contents: [], totalCount: 0, offset: 0, limit: limitParam };
    }
  }
}

// シングルトンインスタンス
export const cmsApi = new CMSApiClient();