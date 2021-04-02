import prisma from "@/lib/prisma"

const Auth = async (req, res) => {
  if (req.method === "POST") {
    const { email, password } = req.body
    const user = await prisma.users.findFirst({
      where: {
        email,
        password,
      },
    })
    if (user) {
      res.status(200).json({ ok: true })
    } else {
      res.status(200).json({ ok: false })
    }
  } else {
    req.json({ message: "You have to send POST request" })
  }
}
export default Auth
