#!/bin/bash

if [ ! -f prisma/migrations/0_init ]; then
	mkdir -p prisma/migrations/0_init
fi


npx prisma migrate diff --from-empty --to-schema-datamodel prisma/schema.prisma --script > prisma/migrations/0_init/migration.sql

npx prisma migrate resolve --applied $NAME