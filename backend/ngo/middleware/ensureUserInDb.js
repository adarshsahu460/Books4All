const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function ensureUserInDb(req, res, next) {
  const token = req.kauth.grant.access_token.content;
  const keycloakId = token.sub;
  const email = token.email;
  const username = token.preferred_username;

  let user = await prisma.userInfo.findUnique({ where: { keycloakId } });
  if (!user) {
    // You may want to collect name/address/phone from frontend on first login
    user = await prisma.userInfo.create({
      data: {
        keycloakId,
        name: username || '',
        address: '',
        email: email || '',
        phone: '',
        type: 'ngo' // or set dynamically based on your logic
      }
    });
  }
  req.userInfo = user;
  next();
}

module.exports = ensureUserInDb; 