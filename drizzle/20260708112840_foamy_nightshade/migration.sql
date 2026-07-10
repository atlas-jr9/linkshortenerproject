ALTER TABLE "links" ADD COLUMN "user_id" text NOT NULL;--> statement-breakpoint
ALTER TABLE "links" ADD COLUMN "clerk_user_id" varchar(255) NOT NULL;--> statement-breakpoint
ALTER TABLE "links" DROP COLUMN "userid";--> statement-breakpoint
ALTER TABLE "links" ALTER COLUMN "created_at" SET DATA TYPE timestamp with time zone USING "created_at"::timestamp with time zone;--> statement-breakpoint
ALTER TABLE "links" ALTER COLUMN "updated_at" SET DATA TYPE timestamp with time zone USING "updated_at"::timestamp with time zone;--> statement-breakpoint
ALTER TABLE "links" ADD CONSTRAINT "links_code_key" UNIQUE("code");