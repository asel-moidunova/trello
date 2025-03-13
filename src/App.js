import React from 'react'
import Login from './presentation/pages/Login'

const App = () => {
  return (
    <div>
      <Login/>
    </div>
  )
}

export default App













































































// export default function App() {
//   return (
//     <div className="flex items-center justify-center min-h-screen bg-gray-100">
//       <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md text-center">
//         <h1 className="text-2xl font-bold mb-4">Trello</h1>
//         <p className="text-gray-600 mb-4">Войдите, чтобы продолжить</p>
//         <input
//           type="email"
//           placeholder="Введите адрес электронной почты"
//           className="w-full border p-2 rounded mb-4"
//         />
//         <button className="w-full bg-blue-600 text-white p-2 rounded mb-4 hover:bg-blue-700">
//           Продолжить
//         </button>
//         <p className="text-gray-500 mb-2">Или продолжить с помощью:</p>
//         <div className="flex flex-col gap-2">
//           <button className="w-full bg-red-500 text-white p-2 rounded hover:bg-red-600">Google</button>
//           <button className="w-full bg-green-600 text-white p-2 rounded hover:bg-green-700">Microsoft</button>
//           <button className="w-full bg-black text-white p-2 rounded hover:bg-gray-800">Apple</button>
//           <button className="w-full bg-gray-500 text-white p-2 rounded hover:bg-gray-600">Slack</button>
//         </div>
//         <p className="text-blue-500 mt-4 cursor-pointer">Не удается войти в систему?</p>
//         <p className="text-blue-500 mt-2 cursor-pointer">Создать аккаунт</p>
//         <p className="text-gray-400 mt-4 text-sm">© Atlassian</p>
//       </div>
//     </div>
//   );
// };