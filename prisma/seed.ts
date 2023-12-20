import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcryptjs'

const prisma = new PrismaClient()

async function seed() {
  const user = await prisma.user.create({
    data: {
      username: 'taskmaster',
      password: await bcrypt.hash('ratsareus', 10),
    },
  })

  await prisma.todo.create({
    data: {
      userId: user.id,
      text: 'Get some exercise',
      completed: false,
    },
  })
  await prisma.todo.create({
    data: {
      userId: user.id,
      text: 'Watch some tv',
      completed: false,
    },
  })
  await prisma.todo.create({
    data: {
      userId: user.id,
      text: 'Read a book',
      completed: false,
    },
  })
}

seed()
  .catch(async (e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
