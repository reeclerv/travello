import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import TableBooking from "./TableBooking";
import { getMyBooking } from "./getMyBooking";


const MyBookingPage = async () => {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/");
  }

  const booking = await getMyBooking(session?.user.id);

  return (
    <main className="max-w-5xl mx-auto">
      <div className="flex flex-col mt-11">
        <h1 className="text-2xl font-bold text-muted-foreground">My Booking</h1>
        <div className="flex flex-col gap-1 mt-5">
          <div className="relative overflow-x-auto">
            <TableBooking booking={booking} />
          </div>
        </div>
      </div>
    </main>
  );
};

export default MyBookingPage;
