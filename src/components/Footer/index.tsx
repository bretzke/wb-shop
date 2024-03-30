import { ROUTES } from "@/utils/constants";
import Link from "next/link";

export default function Footer () {
  return (
    <footer className="bg-secondary text-primary flex items-center justify-center">
      <Link href={ROUTES.linkedin} target="_blank">Willian Bretzke</Link>
    </footer>
  )
}