import * as logsService from "../service/logs.service.js";

export async function createLog(req, res, next) {
  try {
    const log = await logsService.createLog(req.body);

    res.status(201).json({
      message: "log created successfully",
      log
    });
  } catch (error) {
    next(error);
  }
}


// 19
export async function joinLogsWithBooks(req, res, next) {
  try {
    const result = await logsService.joinLogsWithBooks();

    res.json(result);
  } catch (error) {
    next(error);
  }
}