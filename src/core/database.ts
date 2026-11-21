import type { Dialect, ColumnType } from "kysely"

import { Kysely } from "kysely"

export type Provider = "bkash" | "nagad" | "rocket"
export type PaymentKind = "send_money" | "payment" | "cash_out"
export type PaymentStatus = "pending" | "completed" | "cancelled"

export interface Database {
  axsuz_sms: {
    id: ColumnType<number, never, never>
    provider: ColumnType<Provider, Provider, never>
    kind: ColumnType<PaymentKind, PaymentKind, never>
    txid: ColumnType<string, string, never>
    amount: ColumnType<number, number, never>
    sender: ColumnType<string, string, never>
    received_at: ColumnType<Date, Date | string, never>
    created_at: ColumnType<Date, Date | string | undefined, never>
  }
  axsuz_payment: {
    paykey: ColumnType<string, string, never>
    amount: ColumnType<number, number, never>
    status: ColumnType<PaymentStatus, PaymentStatus | undefined, PaymentStatus>
    sms_id: ColumnType<number | null, undefined, number>
    expires_at: ColumnType<Date, Date | string, never>
    paid_at: ColumnType<Date | null, undefined, Date | string>
    created_at: ColumnType<Date, Date | string | undefined, never>
  }
}

export const createDatabase = (dialect: Dialect): Kysely<Database> => new Kysely<Database>({ dialect })
