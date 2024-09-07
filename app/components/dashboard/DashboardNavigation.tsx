import Link from "next/link";

const links = [
    {
      name: "Dashboard",
      href: "/dashboard",
    },
    {
      name: "Orders",
      href: "/dashboard/orders",
    },
    {
      name: "Products",
      href: "/dashboard/products",
    },
    {
      name: "Banner Picture",
      href: "/dashboard/banner",
    },
  ];

export function DashboardNavigation() {
  return (
    <>
      {links.map((link) => (
        <Link key={link.href} href={link.href}>
          {link.name}
        </Link>
      ))}
    </>
  );
}