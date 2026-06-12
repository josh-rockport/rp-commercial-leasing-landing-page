/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_RESEND_API_KEY: string
  readonly VITE_WEB3FORMS_ACCESS_KEY: string
  readonly VITE_GA4_MEASUREMENT_ID: string
  readonly VITE_GTM_CONTAINER_ID?: string
  readonly VITE_GOOGLE_ADS_CONVERSION_ID?: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
