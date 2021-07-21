import UserHandler from "./interfaces"
import prisma from "../../../prisma/prismaClient"


const getAll : UserHandler["getAll"] = async (req, res, next) => {
try {
    const users = await prisma.user.findMany()
    res.status(200).json(users)
} catch (error) {
    next(error)
}
}


export default getAll