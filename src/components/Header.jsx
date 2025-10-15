export default function Header({ themeMode, setThemeMode }) {
  const isLight = themeMode === "light";

  const toggleTheme = () => {
    setThemeMode(isLight ? "dark" : "light");
  };

  return (
    <header
      className={`w-full h-14 flex items-center justify-between px-6 rounded-2xl border-b transition-colors ${
        isLight
          ? "bg-neutral-0 border-neutral-200"
          : "bg-neutral-700 border-neutral-700"
      }`}
    >
      <img
        src={
          isLight ? "/assets/images/logo.svg" : "/assets/images/logo-dark.svg"
        }
        alt="logo"
        className="h-6"
      />

      <button
        onClick={toggleTheme}
        className={`focus:outline-none border h-10 w-10 rounded-lg flex items-center justify-center transition-transform duration-300 hover:scale-110 ${
          isLight
            ? "border-neutral-200 bg-neutral-100"
            : "border-neutral-700 bg-neutral-700"
        }`}
      >
        <img
          src={
            isLight
              ? "/assets/images/icon-moon.svg"
              : "/assets/images/icon-sun.svg"
          }
          alt="Toggle Theme"
          className="w-6 h-6 transition-transform duration-300 hover:scale-110 "
        />
      </button>
    </header>
  );
}
