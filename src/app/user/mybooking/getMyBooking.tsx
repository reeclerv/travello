import prisma from "@/lib/prisma";


export async function getMyBooking(userId: number) {
    const booking = await prisma.reservation.findMany({
      where: { userId },
      select: {
        id: true,
        name: true,
        email: true,
        mobile: true,
        userId: true,
        tour: {
          select: {
            feauturedImage: true,
            title: true,
          },
        },
      },
    });
    return booking;
  }