import { Handler, Context, Callback } from "aws-lambda"

interface Response {
  statusCode: number
  body: string
}

const weather: Handler = (
  event: unknown,
  context: Context,
  callback: Callback
) => {

}
