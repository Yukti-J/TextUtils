import React from 'react';
import Owl from '../images/owl.png';
export default function About() {
  return (
    <div>
      <h1 className='m-4'>About Us</h1>
      <p className='m-5'>In literary theory, a text is any object that can be "read", whether this object is a work of literature, a street sign, an arrangement of buildings on a city block, or styles of clothing. It is a coherent set of signs that transmits some kind of informative message.[1] This set of signs is considered in terms of the informative message's content, rather than in terms of its physical form or the medium in which it is represented.</p>
     <img className="text-center" src={ Owl} alt='owl' width="20px" height="20px" />
    </div>
  )
}
