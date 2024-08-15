"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { signOut } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import defaultUser from "../../../public/defaultuser.png";

interface DropdownUserProps {
  isAdmin: boolean;
}

const DropdownUser = ({ isAdmin }: DropdownUserProps) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Image
          src={defaultUser}
          alt="Default user"
          className="object-cover cursor-pointer"
          width={40}
          height={40}
        />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuGroup>
          <DropdownMenuItem className="cursor-pointer ">
            <Link href="/user/profile" className="w-56">Profile</Link>
          </DropdownMenuItem>
          <DropdownMenuItem className="cursor-pointer">
            <Link href="/user/mybooking" className="w-56">My Booking</Link>
          </DropdownMenuItem>
          {isAdmin && (
            <DropdownMenuItem className="cursor-pointer ">
              <Link href="/admin/tour/create" className="w-56">Create a tour</Link>
            </DropdownMenuItem>
          )}
        </DropdownMenuGroup>

        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={() => signOut()} className="cursor-pointer">
          Log out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default DropdownUser;
