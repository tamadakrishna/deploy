import axios from "axios";

const page = async()=>{
  const {data} = await  axios.get(`${process.env.API_URL}/api/sample`);
  const address = await  axios.get(`${process.env.API_URL}/api/address`);
  return(
    <ul>
      <li>Vercel Env: {process.env.VERCEL_ENV}</li>
      <li>Environment Var: {process.env.API_URL}</li>
      <li>DB URI: {process.env.DB_URI}</li>
      <li>STRIPE PUBLIC KEY {process.env.STRIPE_PUBLIC_KEY}</li>
      <li>STRIPE_PRIVATE_KEY {process.env.STRIPE_PRIVATE_KEY}</li>
      <li>STRIPE_WEBHOOK_SECRET {process.env.STRIPE_WEBHOOK_SECRET}</li>
      <li>CLOUD_NAME {process.env.CLOUD_NAME}</li>
      <li>CLOUDINARY_API_KEY {process.env.CLOUDINARY_API_KEY}</li>
      <li>CLOUDINARY_API_SECRET {process.env.CLOUDINARY_API_SECRET}</li>
      <li>Data: {data.message}</li>
      <li>Address: {address.data[0]?.street}</li>
    </ul>
  )
}

export default page;