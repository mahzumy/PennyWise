const DEV_API_URL="http://localhost:3000"
const PROD_API_URL="https://penny-wise-six.vercel.app"
export const API_URL = process.env.NODE_ENV === "development" ? `${DEV_API_URL}/api/v1` : `${PROD_API_URL}/api/v1`;
