import { Calendar, Home, FileText, Menu, Settings, Plus } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import type React from "react";

export default function HomePage() {
  return (
    <div className="flex h-full flex-col bg-[#111827] text-white">
      {/* Header */}
      <header className="flex items-center justify-between p-6">
        <div className="w-6"></div> {/* Empty div for spacing */}
        <h1 className="text-2xl font-semibold">Lunari</h1>
        <button className="text-white">
          <Plus className="size-6" />
        </button>
      </header>

      {/* Profile Section */}
      <section className="mb-6 mt-2 flex flex-col items-center">
        <div className="mb-4 size-24 overflow-hidden rounded-full bg-[#f8e3cb]">
          <Image
            src="/placeholder.svg?height=96&width=96"
            alt="Sofía Perez"
            width={96}
            height={96}
            className="object-cover"
          />
        </div>
        <h2 className="text-xl font-semibold">Sofía Perez</h2>
        <p className="text-gray-400">Edad: 35</p>
      </section>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto px-6 pb-24">
        {/* Illness Card */}
        <div className="mb-4 rounded-lg bg-[#1e293b] p-5">
          <h3 className="mb-2 text-lg font-medium">Enfermedad</h3>
          <p className="text-sm text-gray-400">
            Descripción del tratamiento para la enfermedad
          </p>
        </div>

        {/* Emergency Contact Card */}
        <div className="mb-6 rounded-lg bg-[#1e293b] p-5">
          <h3 className="mb-2 text-lg font-medium">Contacto de emergencia</h3>
          <p className="text-sm text-gray-400">Nombre</p>
          <p className="text-sm text-gray-400">Email</p>
          <p className="text-sm text-gray-400">Teléfono</p>
        </div>

        {/* Overview Section */}
        <section>
          <h2 className="mb-4 text-xl font-semibold">Overview</h2>
          <div className="space-y-4">
            <div className="flex items-center space-x-4">
              <div className="flex size-12 items-center justify-center rounded-lg bg-[#1e293b]">
                <Calendar className="size-5" />
              </div>
              <div>
                <h3 className="font-medium">Chequeo anual</h3>
                <p className="text-sm text-gray-400">12/01/2023</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Navigation Bar */}
      <nav className="fixed inset-x-0 bottom-0 mx-auto grid max-w-md grid-cols-4 border-t border-gray-800 bg-[#0f172a]">
        <NavItem
          icon={<Home className="size-5" />}
          label="Home"
          active={true}
          href="/"
        />
        <NavItem
          icon={<FileText className="size-5" />}
          label="Historial"
          active={false}
          href="/history"
        />
        <NavItem
          icon={<Menu className="size-5" />}
          label="Accesos"
          active={false}
          href="/access"
        />
        <NavItem
          icon={<Settings className="size-5" />}
          label="Configuración"
          active={false}
          href="/settings"
        />
      </nav>
    </div>
  );
}

function NavItem({
  icon,
  label,
  active,
  href,
}: {
  icon: React.ReactNode;
  label: string;
  active: boolean;
  href: string;
}) {
  return (
    <Link
      href={href}
      className={`flex flex-col items-center justify-center py-3 ${
        active ? "text-white" : "text-gray-500"
      }`}
    >
      {icon}
      <span className="mt-1 text-xs">{label}</span>
    </Link>
  );
}
