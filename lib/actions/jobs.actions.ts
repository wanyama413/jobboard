"use server";

import { connectToDatabase } from "../mongoose";

export async function createJob(params: any) {
  try {
    connectToDatabase();
  } catch (err) {
    console.log(err);
  }
}
