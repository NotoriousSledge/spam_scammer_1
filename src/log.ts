const logData = new Map();

export function pingLog() {
  return new Promise<void>((resolve) => {
    logData.set(Date.now(), 'ping');
    resolve();
  });
}

export function logSize() {
  return logData.size;
}
