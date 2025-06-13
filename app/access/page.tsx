import {
  ArrowLeft,
  Shield,
  FileText,
  Link as LinkIcon,
  FlaskRoundIcon as Flask,
  Home,
  FileIcon,
  Menu,
  Settings,
  UserCircleIcon as UserCircle,
} from "lucide-react";
import Link from "next/link";
import NextLink from "next/link";
import type React from "react";

export default function AccesosPage() {
  return (
    <div className="flex h-full flex-col bg-[#111827] text-white">
      {/* Header */}
      <header className="flex items-center justify-between border-b border-gray-800 p-6">
        <NextLink href="/" className="text-white">
          <ArrowLeft className="size-6" />
        </NextLink>
        <h1 className="text-2xl font-semibold">Accesos</h1>
        <div className="w-6"></div> {/* Empty div for spacing */}
      </header>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto p-6 pb-24">
        {/* Hoy (Today) Section */}
        <section className="mb-8">
          <Link href="/authorization" className="block">
            <h2 className="mb-4 text-xl font-semibold">Hoy</h2>
            <div className="space-y-4">
              <AccessItem
                icon={
                  <div className="size-12 overflow-hidden rounded-full">
                    <UserCircle size={36} strokeWidth={1} />
                  </div>
                }
                title="Dr. Emily Carter"
                time="10:30 AM"
              />
              <AccessItem
                icon={
                  <div className="flex size-12 items-center justify-center rounded-lg bg-[#1e293b]">
                    <Shield className="size-5" />
                  </div>
                }
                title="Seguro médico"
                time="11:45 AM"
              />
            </div>
          </Link>
        </section>

        {/* Ayer (Yesterday) Section */}
        <section className="mb-8">
          <Link href="/authorization" className="block">
            <h2 className="mb-4 text-xl font-semibold">Ayer</h2>
            <div className="space-y-4">
              <AccessItem
                icon={
                  <div className="flex size-12 items-center justify-center rounded-lg bg-[#1e293b]">
                    <FileText className="size-5" />
                  </div>
                }
                title="Prescripción médica"
                time="2:15 PM"
              />
              <AccessItem
                icon={
                  <div className="flex size-12 items-center justify-center rounded-lg bg-[#1e293b]">
                    <LinkIcon className="size-5" />
                  </div>
                }
                title="Farmacia"
                time="4:50 PM"
              />
            </div>
          </Link>
        </section>

        {/* Semana pasada (Last Week) Section */}
        <section>
          <Link href="/authorization" className="block">
            <h2 className="mb-4 text-xl font-semibold">Semana pasada</h2>
            <div className="space-y-4">
              <AccessItem
                icon={
                  <div className="size-12 overflow-hidden rounded-full">
                    <UserCircle size={36} strokeWidth={1} />
                  </div>
                }
                title="Dr. Michael Chen"
                time="Lunes, 9:00 AM"
              />
              <AccessItem
                icon={
                  <div className="flex size-12 items-center justify-center rounded-lg bg-[#1e293b]">
                    <Flask className="size-5" />
                  </div>
                }
                title="Hospital"
                time="Martes, 1:30 PM"
              />
            </div>
          </Link>
        </section>
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
          icon={<FileIcon className="size-5" />}
          label="Historial"
          active={false}
          href="/history"
        />
        <NavItem
          icon={<Menu className="size-5" />}
          label="Accesos"
          active={true}
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

function AccessItem({
  icon,
  title,
  time,
}: {
  icon: React.ReactNode;
  title: string;
  time: string;
}) {
  return (
    <div className="flex items-center space-x-4">
      {icon}
      <div>
        <h3 className="font-medium">{title}</h3>
        <p className="text-sm text-gray-400">{time}</p>
      </div>
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
    <NextLink
      href={href}
      className={`flex flex-col items-center justify-center py-3 ${
        active ? "text-white" : "text-gray-500"
      }`}
    >
      {icon}
      <span className="mt-1 text-xs">{label}</span>
    </NextLink>
  );
}
