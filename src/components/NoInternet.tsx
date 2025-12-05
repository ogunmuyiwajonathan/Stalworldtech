export default function NoInternet() {
  return (
    <div
      className="min-h-screen w-full flex items-center justify-center bg-black text-white px-5"
      style={{
        backgroundImage: "url('https://i.postimg.cc/7Pj9KtR8/image.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="x bg-black/60 p-10 rounded-2xl shadow-2xl max-w-md text-center">
        <h1 className="text-4xl font-bold mb-4 text-red-500">No Internet</h1>

        <p className="text-gray-300 mb-6">
          Your connection seems offline.<br />
          John Wick is watching… fix your network and try again.
        </p>

        <button
          onClick={() => window.location.reload()}
          className="px-6 py-3 bg-red-600 hover:bg-red-700 rounded-lg font-semibold transition"
        >
          Retry
        </button>
      </div>
    </div>
  );
}