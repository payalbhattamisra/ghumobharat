import React from 'react';
import shopsData from './shopRanking.json'; // Import the JSON file
import './shopRanking.css';
function ShopList() {
  const sortedShops = shopsData.shops.sort((a, b) => b.rating - a.rating);

  return (
    <div className='rankdata'>
      <h2 id='tabletitle'>Shops Ranked By online Ratings</h2>
      <table>
        <thead>
          <tr className='tablehead'>
            <th>Rank</th>
            <th>Name</th>
            <th>Ratings</th>
          </tr>
        </thead>
        <tbody className='tablebody'>
          {sortedShops.map((shop, index) => (
            <tr key={index} className='tablerow'>
              <td >{index + 1}</td>
              <td ><a href="/">{shop.name}</a></td>
              <td >{shop.rating}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ShopList;
