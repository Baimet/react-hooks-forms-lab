import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import Header from "./Header";
import Filter from "./Filter";
import ItemForm from "./ItemForm";
import itemData from "../data/items";

function App() {
  const [items, setItems] = useState(itemData);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [search, setSearch] = useState("");

  function handleDarkModeClick() {
    setIsDarkMode((isDarkMode) => !isDarkMode);
  }

  function handleSearchChange(event) {
    setSearch(event.target.value);
  }

  function handleItemFormSubmit(newItem) {
    setItems([...items, newItem]);
  }

  const filteredItems = items.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className={"App " + (isDarkMode ? "dark" : "light")}>
      <Header isDarkMode={isDarkMode} onDarkModeClick={handleDarkModeClick} />
      <Filter search={search} onSearchChange={handleSearchChange} />
      <ItemForm onItemFormSubmit={handleItemFormSubmit} />
      <ShoppingList items={filteredItems} />
    </div>
  );
}

export default App;
