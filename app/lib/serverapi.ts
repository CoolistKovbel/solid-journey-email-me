"use server";

import { sendMail } from "./mail";
import { createClient, sql } from "@vercel/postgres";

// Contact email function
export async function ContactEmail(
  prevState: string | object | undefined,
  formData: FormData
) {
  const data = Object.fromEntries(formData.entries());

  try {
    await sendMail({
      to: process.env.SMTP_EMAIL as string,
      name: crypto.randomUUID(),
      subject: "new person",
      content: `user email ${data.email as string}`,
    });

    return {
      message: `${data.email} your message has been sent, join email list if you havent already`,
    };
  } catch (error) {
    console.log(error);
    return { message: "I am sorry but the request failed.... you got denied" };
  }
}

// Join email list
export async function joinEmailList() {
  try {
    return {
      status: "success",
      payload: "",
    };
  } catch (error) {
    return {
      status: "error",
      payload: error,
    };
  }
}

// Create email list db
export async function createDatabase(DATABASEName: string) {
  try {
    console.log("creating");
    const client = createClient();
    await client.connect();

    await client.sql`CREATE DATABASE ${DATABASEName}`;
    // const newDB = await sql`CREATE DATABASE ${DATABASEName}`

    console.log(client);

    return {
      status: "success",
      payload: client,
    };
  } catch (error) {
    console.log("error", error);
  }
}
