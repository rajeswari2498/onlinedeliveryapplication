import React, { useState } from 'react';
import restaurants from './restaurants'; // Assuming this is a local JSON file with restaurant data
import './Search.css'; // Custom CSS for styling

const Search = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredItems, setFilteredItems] = useState([]);

  // Handle search input change
  const handleSearchChange = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);

    if (!query) {
      setFilteredItems([]);
      return;
    }

    // Filter restaurants by title only
    const results = restaurants.flatMap((restaurant) =>
      restaurant.products?.flatMap((product) =>
        product.subcategories?.flatMap((subcategory) =>
          subcategory.items?.filter((item) =>
            item.title?.toLowerCase().includes(query)
          )
        )
      )
    );

    setFilteredItems(results);
  };

  return (
    <div className="search-container">
      {/* Search Bar */}
      <input
        type="text"
        className="search-input"
        value={searchQuery}
        onChange={handleSearchChange}
        placeholder="Search for food by title..."
      />

      {/* Search Results */}
      <div className="search-results">
        {filteredItems.length > 0 ? (
          filteredItems.map((item, index) => (
            <div key={index} className="search-item">
              <h3>{item.title}</h3>
            </div>
          ))
        ) : (
          searchQuery && <p>No items found</p>
        )}
      </div>
    </div>
  );
};

export default Search;
