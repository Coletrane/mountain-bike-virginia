import { DynamoDB } from "aws-sdk"

const offlineOptions = {
  region: "localhost",
  endpoint: "http://localhost:8000"
}
const prodOptions = {
  apiVersion: "2012-10-08"
}

export default new DynamoDB(
  process.env.IS_OFFLINE ? offlineOptions : prodOptions
)
