import React, { useEffect, useState } from "react";

function ExtensionList({ searchQuery, activeTab, themeMode }) {
  const [extensions, setExtensions] = useState([]);
  const isLight = themeMode === "light";

  useEffect(() => {
    const fetchExtensions = async () => {
      try {
        const response = await fetch("/data.json");
        const data = await response.json();
        setExtensions(data);
      } catch (error) {
        console.error("Failed to fetch extensions:", error);
      }
    };
    fetchExtensions();
  }, []);

  const handleToggle = (name) => {
    setExtensions((prev) =>
      prev.map((ext) =>
        ext.name === name ? { ...ext, isActive: !ext.isActive } : ext
      )
    );
  };

  const handleRemove = (name) => {
    setExtensions((prev) => prev.filter((ext) => ext.name !== name));
  };

  const filtered = extensions.filter(
    (ext) =>
      ext.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
      (activeTab === "All" ||
        (activeTab === "Active" && ext.isActive) ||
        (activeTab === "Inactive" && !ext.isActive))
  );

  return (
    <div className="flex justify-center">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 w-full max-w-md sm:max-w-full">
        {filtered.map((ext) => {
          const cardBg = isLight ? "bg-neutral-0" : "bg-neutral-700";
          const nameColor = isLight ? "text-neutral-900" : "text-neutral-0";
          const descriptionColor = isLight
            ? "text-neutral-600"
            : "text-neutral-300";
          const toggleBg = ext.isActive
            ? isLight
              ? "bg-red-700"
              : "bg-red-400"
            : isLight
            ? "bg-neutral-300"
            : "bg-neutral-700";
          const removeBtnBg = isLight
            ? "bg-neutral-0 text-neutral-900"
            : "bg-neutral-700 text-neutral-0";

          return (
            <div
              key={ext.name}
              className={`rounded-lg p-4 flex flex-col justify-between ${cardBg}`}
            >
              <div className="flex items-center gap-3 mb-12 w-full h-16">
                <div className="flex items-center justify-center shrink-0">
                  <img
                    src={ext.logo}
                    alt={`${ext.name} logo`}
                    className="h-10 w-10 object-contain"
                  />
                </div>
                <div className="flex flex-col justify-center mt-2">
                  <h3
                    className={`text-sm font-medium leading-snug ${nameColor}`}
                  >
                    {ext.name}
                  </h3>
                  <p className={`text-xs mt-0.5 ${descriptionColor}`}>
                    {ext.description}
                  </p>
                </div>
              </div>

              <div className="flex justify-between items-center mt-auto">
                <button
                  onClick={() => handleRemove(ext.name)}
                  className={`px-4 py-2 rounded-3xl text-xs font-medium transition-colors hover:bg-red-400 border border-neutral-300 hover:text-neutral-0 ${removeBtnBg}`}
                >
                  Remove
                </button>

                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={ext.isActive}
                    onChange={() => handleToggle(ext.name)}
                    className="sr-only"
                  />
                  <div
                    className={`w-10 h-5 rounded-full transition-colors ${toggleBg}`}
                  ></div>
                  <span
                    className={`absolute left-0 top-0 w-5 h-5 bg-neutral-0 rounded-full transform transition ${
                      ext.isActive ? "translate-x-full" : ""
                    }`}
                  ></span>
                </label>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ExtensionList;
