import React from 'react';
import Sidebar from '../Sidebar/Sidebar';
import '../App.css';
import CardLayout from './CardLayout';

function Main() {

  const arrowOfObjects =[
    {
      name: 'Spyderco',
      image: 'https://cdn.27.ua/sc--media--prod/default/c2/35/12/c23512e8-60c8-41e8-b6c0-c81bd4e73262.jpg',
      description: 'the best knife'
  },
  {
      name: 'Gerber',
      image: 'https://images.prom.ua/3356747223_w700_h500_turisticheskij-skladnoj-nozh.jpg',
      description: 'good knife'
  },
  {
      name: 'Opinel',
      image: 'https://cf.gorgany.com/catalog/product/cache/5f3efa0a8fec5fde77fda58c9d0d06d0/o/p/opinel_8_vrn_2042e632e29_16_bvt826broc8de5su.jpg',
      description: 'good price'
  },
];


  return (
    <div className='Sidebar-block'>
        <Sidebar />
        <div className='ms-5 mt-3 d-flex flex-wrap'>
          {arrowOfObjects.map( prop => {
            return <CardLayout name={prop.name} image={prop.image} description={prop.description} />
            })}
        </div>
        
    </div>
  )
}

export default Main