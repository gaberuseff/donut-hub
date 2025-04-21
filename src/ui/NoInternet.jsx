function NoInternet() {
  return (
    <div
      className="absolute bg-slate-200/20 text-gray-700 z-50 backdrop-blur-sm top-0 left-0
        w-full h-screen flex items-center justify-center">
      <p className="sm:text-3xl text-xl font-bold font-secondary">
        Your internet connection is offline 😢
      </p>
    </div>
  );
}

export default NoInternet;
