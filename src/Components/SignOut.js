import { useNavigate } from "react-router-dom";

export default function SignOut() {
  const navigate = useNavigate();
  return (
    <>
      <button
        onClick={() => {
          navigate("/");
        }}
        className="bg-blue-600 text-white font-bold px-3 py-2 rounded-lg shadow-md hover:bg-blue-700 transition text-sm" // 버튼 크기를 줄이기 위한 클래스 추가
      >
        Sign Out
      </button>
    </>
  );
}
