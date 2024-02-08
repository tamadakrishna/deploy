import axios from "axios";

const page = async()=>{
  const {data} = await  axios.get(`${process.env.API_URL}/api/sample`);
  return <div>axios data: {data.message}</div>
}

export default page;