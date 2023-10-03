/* 1.install tailwind css : npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p

2. configure template path : tailwind.config.js 

3. add tailwind directoreis to CSS : <src->index.css

4. create src->component->calculate.jsx 
*/

import React from 'react';
import Calculator from './components/calculator';

function App() {
  return (
    <div>
      <Calculator/>
    </div>
  )
}

export default App