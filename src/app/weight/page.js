import Header from "@/components/Header";
import FormWeight from "../FormWeight";
import { cn } from "@/lib/utils";

export default function WeightPage() {
  return (
    <div>
      <Header />
      <div
        {...{
          className: cn(`px-6`, `py-12`, `flex`, `justify-center`),
        }}
      >
        <FormWeight />
      </div>
    </div>
  );
}
