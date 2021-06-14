export const getPosts = async () => {
    const response = await fetch("/api/posts");
    return response.json();
};

const DateNow = Date.now(); 

export const fakePosts = [
    {
        content:'I want vacation and sea!',
        author: 'Ana Levit',
        likes: '3',
        comments: ["ananakdcndcj", "njcndscj"],
        timeOfUpload: new Date(DateNow).toString().substr(4, 17)
    },
    {
        content:'post2',
        author: 'Ana',
        likes: '3',
        comments: ['ananaaff'],
        timeOfUpload: new Date(DateNow).toString().substr(4, 11)
    }
]
