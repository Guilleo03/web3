import DragAndDrop from "@/components/drag-and-drop"

export default function IndexPage() {
  return (
    <section className="container pb-8 pt-6 md:py-10">
      <div className="flex flex-col md:flex-row items-start gap-x-24">
        <div className="flex-1">
          <h1 className="text-3xl font-extrabold leading-tight tracking-tighter md:text-3xl mb-4">
            Te dire si un producto envasado es saludable
          </h1>
          <p className="mb-4 text-lg text-muted-foreground">
            Sube una imagen o toma una foto de los ingredientes o tabla de
            nutricional del producto envasado y te dire si es saludable
          </p>
          <DragAndDrop />
        </div>
        <div className="flex-1">response</div>
      </div>
    </section>
  )
}
