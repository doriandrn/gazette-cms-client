import { prisma } from '../generated/prisma-client';

export default async ({ app }, inject) => {
  inject('prisma', prisma)
}
