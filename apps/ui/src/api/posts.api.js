export const getPosts = async () => {
    const response = await fetch("https://mini-forum1.herokuapp.com/api/posts");
    // const response = await fetch("localhost:4000/api/posts");
    return await response.json();
};


// --------------------- fake post ----------------
const DateNow = Date.now(); 

export const fpost = [
    {
        content:'** The fake post ** I want sea and a vacation!',
        author: 'Ana Levit',
        likes: '3',
        comments: ["ananakdcndcj", "njcndscj"],
        timeOfUpload: new Date(DateNow).toString().substr(4, 17)
    }
]
