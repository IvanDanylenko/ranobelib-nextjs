import prisma from "@/lib/prisma"

const Register = async (req, res) => {
  if (req.method === "POST") {
    const data = req.body
    try {
      const user = await prisma.user.findFirst({
        where: {
          email: data.email,
        },
      })
      console.log("User", user)
      if (user) {
        console.log("User register: User exist in database")
        res.status(403).json({ message: "Unable create user" })
      } else {
        console.log("User register: new user will be created")
        const newUser = await prisma.user.create({
          data,
        })
        console.log("User register: New user", newUser)
        res
          .status(201)
          .json({ id: newUser.id, name: newUser.name, email: newUser.email })
      }
    } catch (e) {
      console.log(e)
      res.status(500).json({ message: "Unable create user" })
    } finally {
    }
  } else {
    req.json({ message: "You have to send POST request" })
  }
}
export default Register
