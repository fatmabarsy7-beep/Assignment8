import { Logs } from "../model/logs.model.js";

export async function createLog(logData) {
  return await Logs.create(logData);
}

export async function getAllLogs() {
  return await Logs.find();
}