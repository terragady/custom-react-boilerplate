export const API_URL = isLocal() ? 
    "http://localAPI" : isDev() ?
    "https://devAPI" : isStaging() ?
    "https://stagingAPI" : isProd() ?
    "https://prodAPI" :
    ""

export function isLocal() {
  return process.env.REACT_APP_ENVIRONMENT === 'local'
}

function isStage(stage: string) {
  return process.env.REACT_APP_STAGE === stage
}

export function isDev() {
  return isStage("dev")
}

function isStaging() {
  return isStage("staging")
}

export function isProd() {
  return isStage("prod")
}