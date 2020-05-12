CREATE EXTENSION IF NOT EXISTS pgcrypto;

CREATE TABLE todo(
	id UUID NOT NULL PRIMARY KEY DEFAULT gen_random_uuid(),
	name VARCHAR(100) NOT NULL,
	"isActive" BOOLEAN NOT NULL
);

CREATE TABLE "todoItem"(
	id UUID NOT NULL PRIMARY KEY DEFAULT gen_random_uuid(),
	name VARCHAR(100) NOT NULL,
	description VARCHAR(100),
	deadline DATE DEFAULT NOW(),
	staus SMALLINT DEFAULT 0,
	"createDate" DATE DEFAULT NOW(),
	todo_id UUID REFERENCES todo(id)
	"isActive" BOOLEAN NOT NULL
);

INSERT INTO todo (name,"isActive") VALUES ('TEST',true);
INSERT INTO "todoItem" (name,description,todo_id) values ('item4','desc4','b4c74c76-8a87-4896-9e99-598704edca39');