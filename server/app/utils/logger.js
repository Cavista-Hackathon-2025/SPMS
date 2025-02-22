import pino from 'pino'
const logger = pino(
  {
    base: null,
    timestamp: () => `,"time": "${new Date().toLocaleString()}"`
  }
)

export default logger;