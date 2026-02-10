import React from 'react'

const agradecimiento = () => {
  return (
    <div
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-teal-800 via-teal-700 to-red-800 relative overflow-hidden"
    >
      <div className="pointer-events-none absolute -top-24 -left-24 h-72 w-72 rounded-full bg-white/10 blur-3xl"></div>
      <div className="pointer-events-none absolute -bottom-24 -right-24 h-80 w-80 rounded-full bg-black/10 blur-3xl"></div>
      <div className="relative mx-4 w-full max-w-xl rounded-2xl border border-white/20 bg-white/80 p-8 text-center shadow-2xl backdrop-blur-md">
        <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-teal-800 to-red-800 shadow-lg">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-9 w-9 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </div>
        <h1 className="mb-2 text-3xl font-extrabold tracking-tight text-teal-800">¡Gracias!</h1>
        <p className="mb-6 text-base text-neutral-700">
          Tu respuesta fue enviada correctamente. En breve nos pondremos en contacto.
        </p>
        <a
          href="https://avanzar-juntos.netlify.app/"
          className="inline-flex items-center justify-center rounded-xl bg-teal-800 px-6 py-3 text-sm font-semibold text-white shadow-lg transition hover:-translate-y-0.5 hover:shadow-xl"
        >
          Volver al inicio
        </a>
        <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-white/30"></div>
      </div>
    </div>
  )
}

export default agradecimiento