import Header from "@/components/Header";
import PowerLevelForm from "./PowerLevelForm";
import { cn } from "@/lib/utils";

export default function Home() {
  return (
    <div>
      <Header />
      <div
        {...{
          className: cn(`container`, `mx-auto`, `px-6`),
        }}
      >
        <PowerLevelForm />
      </div>
    </div>
  );
}
