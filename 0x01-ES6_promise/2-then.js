export default function handleResponseFromAPI(promise) {
  return promise.then(() => ({
    status: 200,
    body: 'success',
  })).catch(() => Error()).finally(() => 'Got a response from the API');
}
