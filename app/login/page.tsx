"use client";

import Link from "next/link";
import { useState } from "react";

export default function LoginPage() {
  const [wallets, setWallets] = useState(false);

  return (
    <div className="flex h-full flex-col bg-[#111827] text-white">
      <div className="flex h-full flex-col justify-between p-6">
        {/* Main Content */}
        <div className="flex flex-1 flex-col items-center justify-center text-center">
          <h1 className="mb-4 text-4xl font-bold leading-tight">
            Toma el control de tus datos de salud
          </h1>
          <p className="mb-8 max-w-md text-gray-300">
            Gestiona de forma segura tus historiales médicos con una plataforma
            descentralizada y centrada en el paciente.
          </p>
        </div>

        {!wallets && (
          <>
            <div className="mx-auto w-full max-w-md space-y-4">
              <p className="mb-4 text-center">
                Conectá tu billetera para ingresar
              </p>

              <button
                onClick={() => setWallets(true)}
                className="mb-4 block w-full rounded-full bg-blue-600 p-4 text-white transition-colors hover:bg-blue-700"
              >
                Conectar billetera
              </button>

              <Link href={"/"} className="w-full">
                <button className="mt-4 w-full rounded-full bg-gray-700 p-4 text-white transition-colors hover:bg-gray-600">
                  Login with Polygon ID
                </button>
              </Link>

              <div className="mt-6 text-center text-sm text-gray-400">
                <p>¿Por qué una billetera?</p>
                <p className="mt-1">
                  Tu billetera es tu identificación digital. No almacenamos
                  contraseñas ni datos personales.
                </p>
              </div>
            </div>
          </>
        )}

        {wallets && (
          <>
            <div className="mx-auto w-full max-w-md space-y-4">
              <Link href={"/"} className="mb-4 block w-full">
                <button className="w-full rounded-full bg-blue-600 p-4 text-white transition-colors hover:bg-blue-700">
                  MetaMask
                </button>
              </Link>
              <Link href={"/"} className="mb-4 block w-full">
                <button className="w-full rounded-full bg-blue-600 p-4 text-white transition-colors hover:bg-blue-700">
                  Coinbase
                </button>
              </Link>
              <Link href={"/"} className="block w-full">
                <button className="w-full rounded-full bg-blue-600 p-4 text-white transition-colors hover:bg-blue-700">
                  RainBow
                </button>
              </Link>

              <Link href={"/"} className="w-full">
                <button className="mt-4 w-full rounded-full bg-gray-700 p-4 text-white transition-colors hover:bg-gray-600">
                  Login with Polygon ID
                </button>
              </Link>

              <div className="mt-6 text-center text-sm text-gray-400">
                <p>¿Por qué una billetera?</p>
                <p className="mt-1">
                  Tu billetera es tu identificación digital. No almacenamos
                  contraseñas ni datos personales.
                </p>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
