import * as jwt from "jsonwebtoken"

export default function checkExpireIn(token){
    let user = jwt.decode(token)
    return user
}