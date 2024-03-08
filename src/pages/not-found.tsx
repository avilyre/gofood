import { Bot } from "lucide-react";
import { NavLink } from "react-router-dom";

export function NotFound() {
  return (
    <div className="flex h-screen flex-col items-center justify-center gap-8">
      <Bot className="w-32 h-32 text-muted-foreground" />
      <h1 className="text-4xl font-bold">Página não encontrada</h1>
      <p className="text-accent-foreground">
        Voltar para o{" "}
        <NavLink to="/" className="text-sky-500 dark:text-sky-400">
          Dashboard
        </NavLink>
      </p>
    </div>
  );
}
