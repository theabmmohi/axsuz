import type { Migration } from "kysely/migration"
import type { Database } from "./database.ts"
import type { Kysely } from "kysely"

import { PostgresAdapter, sql } from "kysely"
import { Migrator } from "kysely/migration"

const migrations: Record<string, Migration> = {
  "0001_init": {
    async up(database: Kysely<any>): Promise<void> {},
    async down(database: Kysely<any>): Promise<void> {}
  }
}

export const migrate = async (database: Kysely<Database>): Promise<void> => {
  const migrator = new Migrator({
    db: database,
    migrationTableName: "axsuz_migration",
    migrationLockTableName: "axsuz_migration_lock",
    provider: { getMigrations: async () => migrations }
  })
  const { error } = await migrator.migrateToLatest()
  if (error) throw error
}
