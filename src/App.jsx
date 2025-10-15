import { useState } from "react";
import Header from "./components/Header";
import FilterPanel from "./components/FilterPanel";
import ExtensionList from "./components/ExtensionList";

function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeTab, setActiveTab] = useState("All");
  const [themeMode, setThemeMode] = useState("light");

  const isLight = themeMode === "light";

  return (
    <main
      className={`font-sans min-h-screen px-4 py-4 sm:px-6 md:px-8 ${
        isLight ? "bg-neutral-200" : "bg-neutral-900"
      }`}
    >
      <div className="max-w-4xl w-full mx-auto space-y-6">
        <Header themeMode={themeMode} setThemeMode={setThemeMode} />

        <div className="flex flex-col items-center sm:flex-row sm:justify-between sm:items-center gap-6 sm:gap-4 text-center sm:text-left">
          <h1
            className={`text-xl sm:text-2xl font-bold whitespace-nowrap ${
              isLight ? "text-neutral-900" : "text-neutral-0"
            }`}
          >
            Extensions List
          </h1>

          <div className="flex flex-col sm:flex-row items-center gap-4">
            <FilterPanel
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
              activeTab={activeTab}
              setActiveTab={setActiveTab}
              themeMode={themeMode}
            />
          </div>
        </div>

        <ExtensionList
          searchQuery={searchQuery}
          activeTab={activeTab}
          themeMode={themeMode}
        />
      </div>
    </main>
  );
}

export default App;
