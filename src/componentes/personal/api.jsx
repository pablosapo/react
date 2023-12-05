export const fetchUsuarios = async() => {

    const URL = 'https://jsonplaceholder.typicode.com/users';
  
    try {
      const response = await fetch(URL);
      const data = await response.json();
      return data;
  
    } catch (error) {
      console.error("Error fetching users", error);
      throw error;
    }
  }
  
  export const fetchUsuarioById = async(id) => {
  
    try {
      const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`) 
      const data = await response.json();
      return data;
  
    } catch (error) {
      console.log("Error fetching user", error);
      throw error;
    }
  }