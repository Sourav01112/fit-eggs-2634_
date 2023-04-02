
import React, { useState } from 'react';
import { Box, Flex, Button, Select } from '@chakra-ui/react';
import Product from './Product';

const ProductList = ({ products }) => {
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage, setProductsPerPage] = useState(5);
  const [priceFilter, setPriceFilter] = useState('All');
  const [popularityFilter, setPopularityFilter] = useState('All');

  // Pagination logic
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // Filtering logic
  const filterByPrice = (e) => {
    const price = e.target.value;
    setPriceFilter(price);
    if (price === 'All') {
      setFilteredProducts(products);
    } else {
      const filtered = products.filter((product) => product.price === price);
      setFilteredProducts(filtered);
    }
  };

  const filterByPopularity = (e) => {
    const popularity = e.target.value;
    setPopularityFilter(popularity);
    if (popularity === 'All') {
      setFilteredProducts(products);
    } else {
      const filtered = products.filter(
        (product) => product.popularity === popularity
      );
      setFilteredProducts(filtered);
    }
  };

  const resetFilters = () => {
    setPriceFilter('All');
    setPopularityFilter('All');
    setFilteredProducts(products);
    setCurrentPage(1);
  };

  return (
    <Box>
      <Flex justifyContent='space-between'>
        <Select w='auto' value={priceFilter} onChange={filterByPrice}>
          <option value='All'>All Prices</option>
          <option value='low'>Low Prices</option>
          <option value='medium'>Medium Prices</option>
          <option value='high'>High Prices</option>
        </Select>
        <Select
          w='auto'
          value={popularityFilter}
          onChange={filterByPopularity}
        >
          <option value='All'>All Popularities</option>
          <option value='low'>Low Popularity</option>
          <option value='medium'>Medium Popularity</option>
          <option value='high'>High Popularity</option>
        </Select>
        <Button onClick={resetFilters}>Reset Filters</Button>
      </Flex>
      {currentProducts.map((product) => (
        <Product key={product.id} {...product} />
      ))}
     
    </Box>
  );
};

export default ProductList;



