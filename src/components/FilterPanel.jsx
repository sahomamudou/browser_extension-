import TabMenu from "./TabMenu";

function FilterPanel({ activeTab, setActiveTab, themeMode }) {
  return (
    <section className="space-y-4 mt-6 mb-4 w-full">
      <TabMenu
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        themeMode={themeMode}
      />
    </section>
  );
}

export default FilterPanel;
