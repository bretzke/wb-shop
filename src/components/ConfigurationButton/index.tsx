import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import ThemeSwitcher from "../ThemeSwitcher";
import { Gear } from "phosphor-react";

export default function ConfigurationButton() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="link">
          <Gear size={32} />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Configurações</DialogTitle>
        </DialogHeader>
        <div className="flex items-center justify-around">
          <ThemeSwitcher />
        </div>
      </DialogContent>
    </Dialog>
  );
}
