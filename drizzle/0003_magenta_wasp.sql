ALTER TABLE "user" ADD COLUMN "last_connection" timestamp with time zone DEFAULT now();--> statement-breakpoint
ALTER TABLE "user" DROP COLUMN "deleted_at";