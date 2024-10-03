import Link from "next/link";
import { NavbarLinks } from "./NavbarLinks";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { ShoppingBagIcon } from "lucide-react";
import { UserDropdown } from "./UserDropdown";
import { Button } from "@/components/ui/button";
import {
  LoginLink,
  RegisterLink,
} from "@kinde-oss/kinde-auth-nextjs/components";
import { Cart } from "@/app/lib/interfaces";
import { redis } from "@/app/lib/redis";

export async function Navbar() {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  const cart: Cart | null = await redis.get(`cart-${user?.id}`);

  const total = cart?.items.reduce((sum, item) => sum + item.quantity, 0) || 0;

  return (
    <nav className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex items-center justify-between">
      <div className="flex items-center">
        <Link href="/">
          <h1 className="text-black font-bold text-xl lg:text-3xl">
            Shoe<span className="text-primary">Store</span>
          </h1>
        </Link>
        <NavbarLinks />
      </div>

      <div className="flex items-center">
        {user ? (
          <>
            <Link href="/bag" className="group p-2 flex items-center mr-2">
              <ShoppingBagIcon className="h-5 w-5 text-gray-400 group-hover:text-gray-500 sm:h-6 sm:w-6" />
              <span className="ml-1 text-xs font-medium text-gray-700 group-hover:text-gray-800 sm:text-sm">
                {total}
              </span>
            </Link>

            <UserDropdown
              email={user.email as string}
              name={user.given_name as string}
              userImage={
                user.picture ?? `https://avatar.vercel.sh/${user.given_name}`
              }
            />
          </>
        ) : (
          <div className="flex items-center md:flex-1 md:justify-end md:space-x-2">
            <div className="md:hidden">
              <Button variant="ghost" asChild>
                <LoginLink>Sign in</LoginLink>
              </Button>
            </div>
            <div className="hidden md:flex md:flex-1 md:items-center md:justify-end md:space-x-2">
              <Button variant="ghost" asChild>
                <LoginLink>Sign in</LoginLink>
              </Button>
              <span className="h-6 w-px bg-gray-200"></span>
              <Button variant="ghost" asChild>
                <RegisterLink>Create Account</RegisterLink>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
