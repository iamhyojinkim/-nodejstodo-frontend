import SignOut from "./SignOut";

export default function Upside({ user }) {
  return (
    <div className="flex flex-col items-center justify-center min-h-32 bg-white p-6 rounded-lg shadow-lg">
      <div className="flex justify-between items-center w-full mb-4">
        <div className="text-center">
          {user && (
            <h1 className="text-3xl font-bold text-gray-800">
              Welcome, <span className="text-green-400">{user.name}!</span>
            </h1>
          )}
        </div>
        <SignOut />
      </div>
    </div>
  );
}
