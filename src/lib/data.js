

export async function getUser( id ) {

    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
    if (!res.ok){
        throw new Error('Failed to fetch user');
    }

    return res.json();

}


export async function getUserPosts( userId) {

    const res = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);
     if (!res.ok){
        throw new Error('Failed to fetch user posts');
    }

    return res.json();

}

export async function getUsers () {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    if (!res.ok){
        throw new Error('Failed to fetch users');
    }

    return res.json();
}

export async function getPosts (){
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    if (!res.ok){
        throw new Error('Failed to fetch posts');
    }

    return res.json();
}