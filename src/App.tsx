import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen bg-linear-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold text-center mb-4 bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Vite + React + TypeScript
          </h1>
          <p className="text-center text-gray-600 dark:text-gray-400 text-xl mb-12">
            with Tailwind CSS
          </p>

          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 mb-8">
            <button
              onClick={() => setCount((count) => count + 1)}
              className="w-full px-8 py-4 bg-linear-to-r from-blue-600 to-purple-600 text-white text-lg font-semibold rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-lg"
            >
              Count is {count}
            </button>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-3">
                ⚡ Vite
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Next generation frontend tooling for lightning fast development
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-3">
                ⚛️ React
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                A JavaScript library for building user interfaces
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-3">
                📘 TypeScript
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Typed JavaScript at any scale for better developer experience
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-3">
                🎨 Tailwind CSS
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                A utility-first CSS framework for rapid UI development
              </p>
            </div>
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-500 dark:text-gray-400">
              Edit <code className="px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded text-sm font-mono">src/App.tsx</code> and save to test HMR
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App

