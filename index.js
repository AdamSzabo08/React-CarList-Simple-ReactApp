import React from 'react';
import ReactDOM from 'react-dom';

// CarBrand
// YearOfManufacture
// Description

// CSS style 
import './style.css';

const cars = [
{
  id: 1,
  img: 'https://i.pinimg.com/236x/dc/f4/51/dcf4510f581cf6574ecc933ae77fd3d9.jpg',
  title: 'Maserati',
  year: '1984'
},
{
  id: 2,
  img: 'https://i.pinimg.com/236x/d8/98/b1/d898b1f99652f695f07b1a91b8d78bb2.jpg',
  title: 'Ferrari',
  year: '1984'
},
{
  id: 3,
  img: 'https://i.pinimg.com/236x/84/81/d8/8481d80295531eff4e078bdcc75724e8.jpg',
  title: 'Ferrari',
  year: '1984'
},
{
  id: 4,
  img: 'https://i.pinimg.com/236x/25/93/7c/25937c3a05071d530b039b4cad7ddab2.jpg',
  title: 'Citroen',
  year: '1984'
},
{
  id: 5,
  img: 'https://i.pinimg.com/236x/ad/f7/15/adf7152f53d20f2f5e6d37b3b17b8b49.jpg',
  title: 'Maserati',
  year: '1984'
},
{
  id: 6,
  img: 'https://i.pinimg.com/236x/8b/87/a4/8b87a497c1761e85487366329cae3b32.jpg',
  title: 'VW beetle',
  year: '1984'
},
];

const Car = ({img, title, year}) =>{
  const message = () => {
    alert('Hello world');
  };
  return (
  <article className='car'>
    <img src={img} alt=''/>
    <h1>{title}</h1>
    <h4>{year}</h4>
    <button type='button' onClick={message}>Message</button>
    <p> Lorem ipsum dolor sit amet adipisicing elit. Nam eligendi cumque, asolores, facilis nobis saepe ipsa numquam natus nostrum. </p>
  </article>
  );
};

function CarList(){
  return (
  <section className='carlist'>
    {cars.map((car) => {
      return <Car  key={car.id} {...car}></Car>;
    })}
  </section>
  );
};

ReactDOM.render(<CarList/>, document.getElementById('root'));