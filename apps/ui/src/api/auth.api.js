export const register = async (data) => {
    const response = await fetch({
        url: "https:mini-forum1.herokuapp.com/api/posts",
        method: "post",
        body: JSON.stringify(data)
    });
    console.log(response.json());
    return response.json();
};



