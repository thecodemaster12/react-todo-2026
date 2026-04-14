const BASE_URL = 'http://localhost:3000'

export async function registerUser(data) {
    const res = await fetch( `${BASE_URL}/users`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    })

    if (!res.ok) 
        throw new Error("Fail to register User")
    else
        return res.json()
}

// export async function loginUser({email, password}) {
//     console.log(`${email} - ${password}`);
    
//     const res = await fetch(`${BASE_URL}/users?email=${email.trim()}&password=${password.trim()}`)

//     const data = await res.json();

//     console.log("Res: ", data);
    

//     if (data.length === 0) {
//         throw new Error("Invalid email or password");
//     }

//     return data[0]
// }

export async function loginUser({ email, password }) {
    const res = await fetch(`${BASE_URL}/users?email=${encodeURIComponent(email.trim())}`);

    if (!res.ok) throw new Error("Server error");

    const data = await res.json();

    if (data.length === 0) {
        throw new Error("Invalid email or password");
    }

    const user = data[0];

    // Compare password in JS — avoids json-server type coercion issues
    if (user.password !== password.trim()) {
        throw new Error("Invalid email or password");
    }

    return user;
}