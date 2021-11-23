const Sidebar = () => {
  const tabs = [
    "What is React ?",
    "Why to learn React ?",
    "How to implement React ?",
    "What is JSX ?",
    "What are React components ?",
    "React state",
    "React props",
    "React class component",
    "React functional component",
  ];

  const _sidebarItemIteratorHandler = () => {
    return tabs.map((item, index) => {
      return (
        <>
          <div key={index} className="sidebarItems">
            {item}
          </div>
        </>
      );
    });
  };

  return (
    <>
      <div className="sidebar">{_sidebarItemIteratorHandler()}</div>
    </>
  );
};

export default Sidebar;
