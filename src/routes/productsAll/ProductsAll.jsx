import Filter from '../../components/filter/Filter'
import Footer from '../../components/footer/Footer'
import GraphicModule from '../../components/graphicModule/GraphicModule'
import ModulDisplay from '../../components/modulDisplay/ModulDisplay'
import Navbar from '../../components/navbar/Navbar'
import './productsAll.scss'
import products from '../../productData';
import React, { useState, useEffect } from 'react'

export default function ProductsAll() {
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [sections, setSections] = useState([]);

  const handleFilterChange = (type, feature) => {

    console.log('Filter change:', type, feature);
    const filtered = products.filter(product =>
      (type === '' || product.type === type) &&
      (feature === '' || product.feature === feature)
    );

    console.log('Filtered products:', filtered);
    setFilteredProducts(filtered);
    
  };

  useEffect(() => {
    const sectionSize = 6;
    const numSections = Math.ceil(filteredProducts.length / sectionSize);
    const newSections = Array.from({ length: numSections }, (_, index) => 
      filteredProducts.slice(index * sectionSize, (index + 1) * sectionSize)
    );

    setSections(newSections);
    console.log('Updated sections:', newSections);
  }, [filteredProducts]);

  useEffect(() => {
    console.log('Updated filteredProducts:', filteredProducts);
  }, [filteredProducts]);

  return (
    <div className='productsall'>
      <Navbar />
      <Filter onFilterChange={handleFilterChange} />
      {sections.map((section, index) => {
        console.log('Rendering ModulDisplay with section:', section);
        return (
          <React.Fragment key={index}>
            <ModulDisplay products={section} />
            {index < sections.length && <GraphicModule />}
          </React.Fragment>
        );
      })}
      <Footer />
    </div>
  )
}
