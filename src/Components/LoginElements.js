export default function LogInElements({
  handleSubmit,
  email,
  setEmail,
  password,
  setPassword,
}) {
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="mb-6">
          <label className="block text-sm text-gray-400 mb-2" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="w-full p-4 bg-gray-700 text-white border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
          />
        </div>

        <div className="mb-6">
          <label
            className="block text-sm text-gray-400 mb-2"
            htmlFor="password"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            className="w-full p-4 bg-gray-700 text-white border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
          />
        </div>

        <button className="w-full bg-blue-600 text-white font-bold px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 transition">
          Login
        </button>
      </form>
    </>
  );
}
