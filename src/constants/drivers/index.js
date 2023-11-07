export const updateOperation = "update-operation";
export const getDrivers = "drivers";
export const availableDrivers = "available-drivers";
export const driver = "driver";
export const drivers = "drivers";
export const api = "api";
export const getPresent = "available";
export const getAll = "all";

export const getDriversEndPoint = (cluster_id) =>
  `api/${drivers}?cluster_id=${cluster_id}`;
export const getAvailableDriversEndPoint = `api/${availableDrivers}`;
export const updateOperationsEndPoint = `api/${updateOperation}`;

// OPERATIONS CONSTANTS

export const operation = "operation";
export const operations = "operations";
export const createOperations = "create-operation";

export const createOperationsEndPoint = `api/${createOperations}`;
export const getOperationsEndPoint = `api/${operations}`;
