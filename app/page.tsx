import axios from "axios";

const page = async()=>{
  // const {data} = await  axios.get(`${process.env.}/api/sample`);
  return(
    <ul>
      <li>Vercel Env: {process.env.VERCEL_ENV}</li>
      <li>Environment Var: {process.env.ENV_VAR}</li>
    </ul>
  )
}

export default page;