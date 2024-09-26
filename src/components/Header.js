import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Logo from "@/images/logo.png";

export default function Header() {
  return (
    <header>
      <h1
        {...{
          className: cn(`py-4`, `px-6`),
        }}
      >
        <Image
          {...{
            alt: "Logo",
            src: Logo,
            width: 96,
          }}
        />
      </h1>
      <Separator />
    </header>
  );
}
