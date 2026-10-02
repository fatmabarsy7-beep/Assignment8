import * as logsRepository from "../repository/logs.repository.js";

export async function createLog(logData) {
  return await logsRepository.createLog(logData);
}

export async function getAllLogs() {
  return await logsRepository.getAllLogs();
}

export async function joinLogsWithBooks() {
  return await logsRepository.joinLogsWithBooks();
}