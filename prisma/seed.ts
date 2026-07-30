import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const roles = [
  'Administrador',
  'CEO',
  'CFO',
  'Head Operações',
  'Head CX Estratégico',
  'Head Projetos',
  'Arquitetura',
  'RH',
];

const permissions = [
  'dashboard.read',
  'contracts.read',
  'contracts.write',
  'users.read',
  'users.write',
  'admin.full',
];

async function main() {
  for (const name of roles) {
    await prisma.role.upsert({
      where: { name },
      update: {},
      create: {
        name,
        description: `Papel ${name} do Centro de Governança Wittel.`,
      },
    });
  }

  for (const code of permissions) {
    await prisma.permission.upsert({
      where: { code },
      update: {},
      create: {
        code,
        description: `Permissão ${code} do Centro de Governança Wittel.`,
      },
    });
  }
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (error) => {
    console.error(error);
    await prisma.$disconnect();
    process.exit(1);
  });
