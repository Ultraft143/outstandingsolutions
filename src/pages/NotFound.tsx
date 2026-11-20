import { Link } from "react-router-dom";
import { Seo } from "@/components/Seo";

const NotFound = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-muted px-4">
      <Seo
        path="/404/"
        title="Página não encontrada | Outstanding Solutions"
        description="A página que procura não existe ou foi removida. Volte à página principal da Outstanding Solutions."
        noindex
      />
      <div className="text-center">
        <h1 className="mb-4 font-display text-5xl font-bold text-foreground">404</h1>
        <p className="mb-6 text-xl text-muted-foreground">
          A página que procura não existe.
        </p>
        <Link to="/" className="text-primary underline hover:text-primary/90">
          Voltar à página principal
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
