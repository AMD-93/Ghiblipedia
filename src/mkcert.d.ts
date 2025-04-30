declare module 'mkcert' {
  export interface CreateCAOptions {
    organization: string
    countryCode: string
    state?: string
    locality?: string
    validityDays?: number
  }

  export interface CreateCertOptions {
    domains: string[]
    validityDays?: number
    caKey: string
    caCert: string
  }

  export function createCA(options: CreateCAOptions): Promise<{ key: string; cert: string }>
  export function createCert(options: CreateCertOptions): Promise<{ key: string; cert: string }>
}
