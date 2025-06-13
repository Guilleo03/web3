import Doctor from "../../public/doctor.jpg";
import { X, CheckCircle, UserIcon, User } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function AutorizacionPage() {
  return (
    <div className="flex h-full flex-col bg-[#111827] text-white">
      {/* Header */}
      <header className="flex items-center justify-between p-6">
        <Link href="/" className="text-white">
          <X className="size-6" />
        </Link>
        <h1 className="text-xl font-semibold">Autorización de acceso</h1>
        <div className="w-6"></div> {/* Empty div for spacing */}
      </header>

      {/* Doctor Profile Section */}
      <section className="mb-8 mt-2 flex flex-col items-center">
        <div className="mb-4 size-24 overflow-hidden rounded-full bg-[#f8e3cb]">
          <Image
            src={Doctor}
            alt="Julieta"
            width={96}
            height={96}
            className="object-cover"
          />
        </div>
        <h2 className="text-xl font-semibold">Dr. Ethan Carter</h2>
        <p className="text-gray-400">Cardióloga</p>
        <div className="mt-1 flex items-center text-sm text-gray-400">
          <CheckCircle className="mr-1 size-4 text-green-500" />
          <span>Verificado</span>
        </div>
      </section>

      {/* Main Content */}
      <main className="flex-1 px-6 pb-6">
        <h3 className="mb-4 text-lg font-medium">
          Detalles de la autorización
        </h3>

        <div className="border-t border-gray-700 py-4">
          <p className="mb-1 text-sm text-gray-400">Nombre del médico</p>
          <p>Dr. Ethan Carter</p>
        </div>

        <div className="border-t border-gray-700 py-4">
          <p className="mb-1 text-sm text-gray-400">Duración del acceso</p>
          <select className="inline-block rounded bg-gray-700 px-3 py-1 text-sm">
            <option value="1">1 año</option>
            <option value="2">2 años</option>
            <option value="3">3 años</option>
            <option value="4">4 años</option>
            <option value="5">5 años</option>
          </select>
        </div>

        <div className="border-t border-gray-700 py-4">
          <h3 className="mb-3 text-lg font-medium">Autorización</h3>
          <p className="text-sm text-gray-300">
            Usted autoriza al Dr. Carter a acceder a sus registros médicos
            durante la duración especificada.
          </p>
        </div>

        {/* Confirm Button */}
        <button className="w-full rounded-full bg-blue-600 px-4 py-3 text-white transition-colors hover:bg-blue-700">
          Autorizar acceso
        </button>
      </main>
    </div>
  );
}
