import { GraficoBarras } from "@/components/GraficoBarras";
import { GraficoDeitado } from "@/components/GraficoDeitado";
import { Button } from "@/components/ui/button"

export default function Relatorios() {
  return (
    <div>
      <div className="p-6 flex-1 bg-gray-100">
        <h1 className="text-2xl font-bold">Relatórios</h1>
        <p className="mt-2 text-gray-600">Página de relatórios.</p>
        <br/>
        <Button>Click me</Button>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <GraficoBarras />
        </div>
        <div>
          <GraficoDeitado/>
        </div>
      </div>
    </div>
  );
}
