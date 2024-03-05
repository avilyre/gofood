import {
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
} from "lucide-react";

import { Button } from "../ui/button";
import { PaginationProps } from "./interface";

export function Pagination(props: PaginationProps) {
  const { pageIndex, perPage, totalCount } = props;

  const pages = Math.ceil(totalCount / perPage) || 1;

  return (
    <div className="flex items-center justify-between">
      <span className="text-sm text-muted-foreground">
        Total de {totalCount} items(s)
      </span>

      <div className="flex items-center gap-6 lg:gap-8">
        <div className="flex text-sm font-medium">
          Página {pageIndex + 1} de {pages}
        </div>
        <div className="flex items-center gap-2">
          <Button className="p-2" type="button" variant="outline">
            <ChevronsLeft className="w-4 h-4" />
            <span className="sr-only">Primeira página</span>
          </Button>
          <Button className="p-2" type="button" variant="outline">
            <ChevronLeft className="w-4 h-4" />
            <span className="sr-only">Próxima página</span>
          </Button>
          <Button className="p-2" type="button" variant="outline">
            <ChevronRight className="w-4 h-4" />
            <span className="sr-only">Página anterior</span>
          </Button>
          <Button className="p-2" type="button" variant="outline">
            <ChevronsRight className="w-4 h-4" />
            <span className="sr-only">última página</span>
          </Button>
        </div>
      </div>
    </div>
  );
}
