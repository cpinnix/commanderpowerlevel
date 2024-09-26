import { Separator } from "@/components/ui/separator";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import Link from "next/link";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Logo from "@/images/logo.png";

export default function Header() {
  return (
    <header>
      <div
        {...{
          className: cn(
            `py-4`,
            `px-6`,
            `flex`,
            `items-center`,
            `justify-between`
          ),
        }}
      >
        <h1>
          <Image
            {...{
              alt: "Logo",
              src: Logo,
              width: 96,
            }}
          />
        </h1>
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <Link href="/" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Levels
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/weight" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Weigh
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
      <Separator />
    </header>
  );
}
