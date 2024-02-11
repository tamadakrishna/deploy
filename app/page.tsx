import axios from "axios";

const page = async()=>{
  const {data} = await  axios.get(`${process.env.API_URL}/api/sample`);
  return(
    <ul>
      <li>Vercel Env: {process.env.VERCEL_ENV}</li>
      <li>Environment Var: {process.env.API_URL}</li>
      <li>Data: {data.message}</li>
    </ul>
  )
}

export default page;