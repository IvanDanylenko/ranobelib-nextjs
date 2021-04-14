import prisma from "@/lib/prisma"

const Auth = async (req, res) => {
  if (req.method === "POST") {
    const { email, password } = req.body
    const user = await prisma.user.findFirst({
      where: {
        email,
        password,
      },
    })
    if (user) {
      res.status(200).json({ id: user.id, email: user.email })
    } else {
      res.status(404).send("Not found")
    }
  } else {
    req.json({ message: "You have to send POST request" })
  }
}
export default Auth
