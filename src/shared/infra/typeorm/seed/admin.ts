import { hash } from "bcryptjs"
import { v4 as uuidV4 } from "uuid"
import createConnetion from "../index"

async function create() {
  const connection = await createConnetion("localhost");

  const id = uuidV4();
  const password = await hash("admin", 8)

  await connection.query(
    `INSERT INTO USERS(id,name,email,password,"isAdmin",created_at, drive_license)
    VALUES('${id}', 'admin', 'admin@gmail.com', '${password}', true, 'now()', 'XXXXX')`
  );
  await connection.close;
}

create().then(() => console.log("User admin created"));
