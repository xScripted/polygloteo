ALTER TABLE "user" ADD COLUMN "streak" integer DEFAULT 0;--> statement-breakpoint
ALTER TABLE "user" ADD COLUMN "chapters" jsonb DEFAULT '[]'::jsonb;--> statement-breakpoint
ALTER TABLE "user" ADD COLUMN "phrases" jsonb DEFAULT '[]'::jsonb;