import axios from "axios";





//single user
export async function getUserData(id) {
  try {
    const token = await JSON.parse(localStorage.getItem("token"));
    const info = await axios.get(`user/${id}`, {
      headers: { Authorization: token }
    });
    
    return info.data;
  } catch (error) {
    return error.message;
    // console.log('ee' + error.message)
  }
}
export async function allUsers() {
  try {
    
    const users = await axios.get('/api/v1/users');
    
    return users.data.info;
  } catch (error) {
    return error.message;
    // console.log('ee' + error.message)
  }
}
export async function allNgUsers() {
  try {
    
    const users = await axios.get('/api/v1/ng/users');
    
    return users.data.info;
  } catch (error) {
    return error.message;
    // console.log('ee' + error.message)
  }
}
export async function allMaleUsers() {
  try {
    
    const users = await axios.get('/api/v1/m/users');
    
    return users.data.info;
  } catch (error) {
    return error.message;
    // console.log('ee' + error.message)
  }
}

export async function allFemaleUsers() {
  try {
    
    const users = await axios.get('/api/v1/f/users');
    
    return users.data.info;
  } catch (error) {
    return error.message;
    // console.log('ee' + error.message)
  }
}


//get user profile
export async function userProfile(id) {
  try {
    const token = await JSON.parse(localStorage.getItem("token"));
    const profile = await axios.get(`/api/v1/user/${id}`, {
      headers: { Authorization: token }
    });
    
    return profile.data
  } catch (error) {
    return error.message
  }
}

//get admin
export async function AdminData(id) {
  try {
    //  const token = await JSON.parse(localStorage.getItem("admintoken")); headers: { Authorization: token }
    const admin = await axios.get(`/api/v1/admin/${id}`);
      
    return admin.data.info
  } catch (error) {
    return error.message
  }
}


 // get departemet
export async function getDepartmentCat(department) {
  try {
    const appcashout = await axios.get(`/department/${department}`);

    return appcashout.data.info;
    

  } catch (error) {
    return error.message;
  }
}
// search with department and topic
export async function searchWithDepartment(query) {
  try {
    const info = await axios.get(`/search${query}`)
    return info.data
  } catch (e) {
    return e.message
  }
}



export async function getDistinctDepartment() {
  // /distinct/departments
  try {
    const diffdepartment = await axios.get(`/distinct/departments`)

    return diffdepartment.data.department;


  } catch (error) {
    return error.message;
  }
}


// blog apis
// ------All post
export async function adminGetAllBlogPost() {
  try {
    const allpost = await axios.get("/api/v1/blog/posts");

    return allpost.data.info;

  } catch (error) {
    return error.message;
  }
}

// -----Get all Conatct
export async function adminGetAllContactus() {
  try {
    const allcontact = await axios.get("/api/v1/contactus");

    return allcontact.data.info;

  } catch (error) {
    return error.message;
  }
}
// single

 export async function adminGetSingleContactus(id) {
  try {
    const singlecontact = await axios.get(`/api/v1/contactus/${id}`);

    return singlecontact.data.info;

  } catch (error) {
    return error.message;
  }
}






// ---single post
export async function adminGetSingleBlogPost(id) {
  try {
    const singlepost = await axios.get(`/api/v1/blog/post/${id}`);

    return singlepost.data.info;

  } catch (error) {
    return error.message;
  }
}
// --delete post
export async function adminDeleteBlogPost(id) {
  try {
    const singlepost = await axios.delete(`/api/v1/blog/post/delete/${id}`);

    return singlepost.data.message;

  } catch (error) {
    return error.message;
  }
}
export async function adminDeleteMsg(id) {
  try {
    const token = JSON.parse(localStorage.getItem("admintoken"));
    const deleteuser = await axios.delete(`/api/v1/contactus/${id}`, {
    headers:{
      'x-access-token':token

      }
    }
    );


    return deleteuser.data.message;

  } catch (error) {
    return error.message;
  }
}




export async function adminDeleteUser(id) {
  try {
    const token = JSON.parse(localStorage.getItem("admintoken"));
    const deleteuser = await axios.delete(`/user/delete/${id}`, {
    headers:{
      'x-access-token':token

      }
    }
    );


    return deleteuser.data.message;

  } catch (error) {
    return error.message;
  }
}

export async function getConfirmMail(email,token) {
  try {
   

    const confirmail = await axios.get(`/confirmation/${email}/${token}`);

   
    return confirmail.data;
  } catch (error) {
    return error.message;
  }
}
