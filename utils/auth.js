import axios from "axios"
import * as jwt from "jsonwebtoken"
const API_AUTH = "http://localhost:5000/api/v2/auth"

const PUBLIC_KEY = `-----BEGIN PUBLIC KEY-----
MIICIjANBgkqhkiG9w0BAQEFAAOCAg8AMIICCgKCAgEAuSaG+AVy9ZXsIVWutzwb
/2gghMOssNGSaRwSlwHxel5TQGQNr5Dltm7BZyzPmjgXDhCbfGEEShhAEO2W9sxR
UYYdvLu7GfjRJ04O6YRXx6h60QGAmIu2ovJmHeshugiOVjIH+DzkbGq0AV5czcBi
KIyQ5+ZIgqJ/gw0DG6qcVaUnUH/bgMZ71YyVSFG/ui5+zVCHP18oL6XuVu4Vdnat
1d/Qc0IP3C+QjvO4V7Tejb7GRjElwofuCTymgp0d7L8qdomtKTqvEZ7D2J+HD9g0
g0ZJGvyGsv9JClB3toxuELWCqIfBo0NXkJTJ8nZFBBdcAB/arhYMoRd7FxYiBuNe
q6EetVAJJHtUtI3XbaEMj32EANeqShK0P6XMmNANNmjBVoW1qg+PPrX8VuDyEh5+
4SJiU580IXXV85X9bw6clRoilG4HanBET8akh+gSPj9793g+8NxtTuY55Cszg5ZF
GpFVjpgsNOltuc+jdeMhhXVNGHP8G0nwQ4AE9bYXjwieWSik7U3NXV7FZaqAgww4
XwujfkMePraZcsxNNV2PD9PYjthS0LBf4SW7B/SptcthTrOJq3HyOjNWmJIVKkZj
Eo55yIrtBn5asQQLs7W+u3x1Y/YNeJLrrSrN05atvUP7Cc9jPJid1JqHvQgarWL8
3xPBBzqwBuEkQiCTgWRPlT0CAwEAAQ==
-----END PUBLIC KEY-----
`

const verifyToken = async (token) => {
    return await jwt.verify(token, PUBLIC_KEY)
}

export default async function getAuth(token) {

    var config = {
        method: 'get',
        url: API_AUTH,
        headers: { 
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': 'http://localhost:3000/',
            'Authorization': token
        },
        withCredentials: true
    }

    let result = await axios(config)
    console.log(result)
    if(result.data.status === 200) {
        let token = result.data.data.token
        let user = await verifyToken(token)
        return {
            status: 200,
            message: "User login success",
            ...user
        }
    }
    return result.data
}