DROP TABLE IF EXISTS requests CASCADE;

CREATE TABLE "requests" (
  "id" SERIAL PRIMARY KEY,
  "posted_by" integer REFERENCES users_elders(id) ON DELETE CASCADE NOT NULL,
  "date_of_request" varchar , 
  "task_description" varchar,
  "task_postal_code" varchar,  
  "date_posted" timestamp,
  "fullilled_by_volunter" integer REFERENCES users_volunteers(id) ON DELETE CASCADE,
  "status" varchar
);