import axios from 'axios';

export const registerUser=(name,email)=>{
    const registerData={
        name:name,
        email:email,
        "macAddress": "jagadishe"
    }
    return axios
    .post(`http://localhost:8000/user/create`,
      registerData,
      {
        header: {
          contentType: "application/json",
        },
        withCredentials: true,
      }
    )
    .then((response) => {
    //   console.log(response);
    
      return response.data;
    })
    .catch((err) => {
      console.log(err.response.data);
      return err.response.data;
    });
  }



  export const verifyUser=()=>{
    const registerData={
        "macAddress": "jagadishe"
    }
    return axios
    .post(`http://localhost:8000/signin`,
      registerData,
      {
        header: {
          contentType: "application/json",
        },
        withCredentials: true,
      }
    )
    .then((response) => {
    //   console.log(response);
    
      return response.data;
    })
    .catch((err) => {
      console.log(err.response.data);
      return err.response.data;
    });
  }
