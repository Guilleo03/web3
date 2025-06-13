import {
  Calendar,
  Syringe,
  TestTube,
  Dumbbell,
  Pill,
  Home,
  FileText,
  Menu,
  Settings,
  Plus,
} from "lucide-react";
import Link from "next/link";
import type React from "react";

export default function ClinicalHistoryApp() {
  return (
    <div className="flex h-full flex-col bg-[#111827] text-white">
      {/* Header */}
      <header className="flex items-center justify-between border-b border-gray-800 p-6">
        <h1 className="text-2xl font-semibold">Clinical History</h1>
        <button className="text-white">
          <Plus className="size-6" />
        </button>
      </header>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto p-6 pb-24">
        {/* Overview Section */}
        <section className="mb-8">
          <h2 className="mb-4 text-xl font-semibold">Overview</h2>
          <div className="space-y-4">
            <HistoryItem
              icon={<Calendar className="size-5" />}
              title="Annual Checkup"
              date="12/01/2023"
            />
            <HistoryItem
              icon={<Syringe className="size-5" />}
              title="Flu Shot"
              date="11/15/2023"
            />
            <HistoryItem
              icon={<TestTube className="size-5" />}
              title="Allergy Test"
              date="10/20/2023"
            />
            <HistoryItem
              icon={<Dumbbell className="size-5" />}
              title="Physical Therapy"
              date="09/05/2023"
            />
          </div>
        </section>

        {/* Medications Section */}
        <section>
          <h2 className="mb-4 text-xl font-semibold">Medications</h2>
          <div className="space-y-4">
            <MedicationItem name="Lisinopril" dosage="10mg, once daily" />
            <MedicationItem name="Metformin" dosage="500mg, twice daily" />
            <MedicationItem name="Omeprazole" dosage="20mg, as needed" />
          </div>
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
          icon={<FileText className="size-5" />}
          label="Historial"
          active={true}
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
          active={false}
          href="/settings"
        />
      </nav>
    </div>
  );
}

function HistoryItem({
  icon,
  title,
  date,
}: {
  icon: React.ReactNode;
  title: string;
  date: string;
}) {
  return (
    <div className="flex items-center space-x-4">
      <div className="flex size-12 items-center justify-center rounded-lg bg-[#1e293b]">
        {icon}
      </div>
      <div>
        <h3 className="font-medium">{title}</h3>
        <p className="text-sm text-gray-400">{date}</p>
      </div>
    </div>
  );
}

function MedicationItem({ name, dosage }: { name: string; dosage: string }) {
  return (
    <div className="flex items-center space-x-4">
      <div className="flex size-12 items-center justify-center rounded-lg bg-[#1e293b]">
        <Pill className="size-5" />
      </div>
      <div>
        <h3 className="font-medium">{name}</h3>
        <p className="text-sm text-gray-400">{dosage}</p>
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
