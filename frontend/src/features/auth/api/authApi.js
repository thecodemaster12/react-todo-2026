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