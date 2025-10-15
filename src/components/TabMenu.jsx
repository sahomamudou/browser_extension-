const categories = ["All", "Active", "Inactive"];

function TabMenu({ activeTab, setActiveTab, themeMode }) {
  const isLight = themeMode === "light";

  return (
    <div className="flex flex-wrap justify-center gap-2 mt-4 w-full">
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => setActiveTab(cat)}
          className={`px-4 py-2 text-sm rounded-3xl transition font-medium border ${
            isLight
              ? activeTab === cat
                ? "bg-red-700 text-neutral-0 border-red-700 hover:bg-red-600 shadow-sm"
                : "bg-neutral-0 text-neutral-900 border-neutral-300 hover:bg-neutral-300"
              : activeTab === cat
              ? "bg-red-400 text-neutral-900 border-red-400 hover:bg-red-300 shadow-sm"
              : "bg-neutral-700 text-neutral-0 border-neutral-600 hover:bg-neutral-600"
          }`}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}

export default TabMenu;
