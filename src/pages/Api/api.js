import axios from "axios";

const ApiCall=()=>{
  const login = async(requestBody)=>{
    try{
      const response=await axios.post("https://5hxz4ksy26.execute-api.ap-south-1.amazonaws.com/dev/api/v1/user/login", requestBody);
      if(!response.ok){
        alert("Enter correct username and password");
      }
      return response.data;
     }catch(error){
       throw error;
     }
    };
    return {login};
};
export default ApiCall;