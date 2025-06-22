/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly MICROCMS_API_KEY: string;
  readonly PUBLIC_MICROCMS_BASE_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}