export const getPosts = async () => {
    const response = await fetch("https://mini-forum1.herokuapp.com/api/posts");
    // const response = await fetch("localhost:4000/api/posts");
    return await response.json();
};


