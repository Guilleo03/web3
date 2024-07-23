import Image from "next/image";

interface IPreview {
  imagePath: string;
}

export const Preview = ({ imagePath }: IPreview) => {
  console.log(imagePath);

  return (
    <div>
      <Image
        src={imagePath}
        alt="Imagen del producto envasado"
        width={350}
        height={600}
        style={{
          objectFit: "contain",
          margin: "10px",
        }}
      />
    </div>
  );
};
