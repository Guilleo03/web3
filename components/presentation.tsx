const Presentation = () => {
  return (
    <>
      <h1 className="md:text-4xl text-3xl font-extrabold leading-tight tracking-tighter mb-4 text-balance">
        Te dire si un producto envasado es{" "}
        <span className="bg-gradient-to-r from-primary to-[#29c233] inline-block text-transparent bg-clip-text dark:from-[#29c233] dark:to-[#29c233]">
          saludable
        </span>
      </h1>
      <p className="mb-8 text-lg text-muted-foreground">
        Sube una imagen o toma una foto de los ingredientes o tabla nutricional
        del producto envasado.
      </p>
    </>
  );
};

export default Presentation;
