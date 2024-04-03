import { useRouter } from "next/router";
import { SmileySad } from "phosphor-react";

export default function Error404() {
  const router = useRouter();

  setTimeout(() => {
    router.push("/");
  }, 2500);

  return (
    <div className="flex flex-col justify-center items-center gap-2 py-4 h-">
      <h1 className="text-xl font-bold">Página não encontrada.</h1>
      <h3 className="text-lg font-semibold">
        Redirecionando para a página inicial...
      </h3>
      <SmileySad size={150} />
    </div>
  );
}
