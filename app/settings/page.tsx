import {
  ArrowLeft,
  Moon,
  Bell,
  Globe,
  Lock,
  HelpCircle,
  LogOut,
  Home,
  FileText,
  Menu,
  Settings,
} from "lucide-react";
import Link from "next/link";
import type React from "react";

export default function ConfiguracionPage() {
  return (
    <div className="flex h-full flex-col bg-[#111827] text-white">
      {/* Header */}
      <header className="flex items-center justify-between border-b border-gray-800 p-6">
        <Link href="/" className="text-white">
          <ArrowLeft className="size-6" />
        </Link>
        <h1 className="text-2xl font-semibold">Configuración</h1>
        <div className="w-6"></div> {/* Empty div for spacing */}
      </header>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto p-6 pb-24">
        <div className="space-y-6">
          <SettingsItem
            icon={<Moon className="size-5" />}
            title="Tema"
            description="Oscuro"
          />
          <SettingsItem
            icon={<Bell className="size-5" />}
            title="Notificaciones"
            description="Activadas"
          />
          <SettingsItem
            icon={<Globe className="size-5" />}
            title="Idioma"
            description="Español"
          />
          <SettingsItem
            icon={<Lock className="size-5" />}
            title="Privacidad"
            description="Configurar"
          />
          <SettingsItem
            icon={<HelpCircle className="size-5" />}
            title="Ayuda"
            description="Soporte"
          />

          <div className="pt-6">
            <button className="flex items-center text-red-500">
              <LogOut className="mr-3 size-5" />
              <span>Cerrar sesión</span>
            </button>
          </div>
        </div>
      </main>
      {/* Navigation Bar */}
      <nav className="fixed inset-x-0 bottom-0 mx-auto grid max-w-md grid-cols-4 border-t border-gray-800 bg-[#0f172a]">
        <NavItem
          icon={<Home className="size-5" />}
          label="Home"
          active={false}
          href="/"
        />
        <NavItem
          icon={<FileText className="size-5" />}
          label="Historial"
          active={false}
          href="/histor"
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
          active={true}
          href="/settings"
        />
      </nav>
    </div>
  );
}

function SettingsItem({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="flex items-center justify-between py-2">
      <div className="flex items-center">
        <div className="mr-4 text-gray-400">{icon}</div>
        <div>
          <h3 className="font-medium">{title}</h3>
        </div>
      </div>
      <div className="text-sm text-gray-400">{description}</div>
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
