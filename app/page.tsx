import axios from "axios";

const page = async()=>{
  const {data} = await  axios.get(`${process.env.API_URL}/api/sample`);
  // const address = await  axios.get(`${process.env.API_URL}/api/address`);
  return(
    <ul>
      <li>Vercel Env: {process.env.VERCEL_ENV}</li>
      <li>Environment Var: {process.env.API_URL}</li>
      <li>DB URI: {process.env.DB_URI}</li>
      <li>Data: {data.message}</li>
      {/* <li>Address: {address?.data[0]?.street}</li> */}
    </ul>
  )
}

export default page;