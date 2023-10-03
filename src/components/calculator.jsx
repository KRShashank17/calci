import React,{useState} from 'react'

function calculator() {
    const [result, setresult] = useState("");

    const clickHandle = (e)=>{
        setresult(result.concat(e.target.value));
    }

    const clearScreen = ()=>{
        setresult("");
    }

    /* 1. 'eval module' for calulation
       2. toString()  for error handling
    */
    const calculate = ()=>{
        setresult(eval(result).toString());  
    }
  
    return (
    <div className='bg-gray-900 text-white w-screen h-screen flex justify-center items-center '>
        <div className='w-64 h-auto bg-gray-800 rounded-2xl shadow-xl border-4 border-gray-100'>
            
            {/* Screen */}
            <div className='screen p-2'>
                <input type="text" 
                value = {result}
                className='px-1 text-right placeholder-black outline-none rounded-lg bg-gray-200 text-3xl pt-5 w-full text-black'
                placeholder='0'
                />
            </div>

            {/* Keyboard */}
            <div className='Keyboard'>
                {/* rows 
                    1. extra functions for 'C' and '=' using ONCLICK
                    2. imp : value , onClickCapture
                    3. div : flex , justify-between
                */}
                <div className='m-2 flex justify-between text-black font-medium'>
                    <input type="button" onClick={clearScreen} value="C" className='bg-red-400 rounded-lg w-12 h-12 text-center' onClickCapture={clickHandle}/>
                    <input type="button" value="<" className='bg-red-200 rounded-lg w-12 h-12 text-center' onClickCapture={clickHandle}/>
                    <input type="button" value="%" className='bg-blue-200 rounded-lg w-12 h-12 text-center' onClickCapture={clickHandle}/>
                    <input type="button" value="/" className='bg-pink-300 rounded-lg w-12 h-12 text-center' onClickCapture={clickHandle}/>
                </div>

                <div className='m-2 flex justify-between text-black font-medium'>
                    <input type="button" value="7" className='bg-gray-200 rounded-lg w-12 h-12 text-center' onClickCapture={clickHandle}/>
                    <input type="button" value="8" className='bg-gray-200 rounded-lg w-12 h-12 text-center' onClickCapture={clickHandle}/>
                    <input type="button" value="9" className='bg-gray-200 rounded-lg w-12 h-12 text-center' onClickCapture={clickHandle}/>
                    <input type="button" value="*" className='bg-green-300 rounded-lg w-12 h-12 text-center' onClickCapture={clickHandle}/>
                </div>

                <div className='m-2 flex justify-between text-black font-medium'>
                    <input type="button" value="4" className='bg-gray-200 rounded-lg w-12 h-12 text-center' onClickCapture={clickHandle}/>
                    <input type="button" value="5" className='bg-gray-200 rounded-lg w-12 h-12 text-center' onClickCapture={clickHandle}/>
                    <input type="button" value="6" className='bg-gray-200 rounded-lg w-12 h-12 text-center' onClickCapture={clickHandle}/>
                    <input type="button" value="-" className='bg-violet-200 rounded-lg w-12 h-12 text-center' onClickCapture={clickHandle}/>
                </div>

                <div className='m-2 flex justify-between text-black font-medium'>
                    <input type="button" value="1" className='bg-gray-200 rounded-lg w-12 h-12 text-center' onClickCapture={clickHandle}/>
                    <input type="button" value="2" className='bg-gray-200 rounded-lg w-12 h-12 text-center' onClickCapture={clickHandle}/>
                    <input type="button" value="3" className='bg-gray-200 rounded-lg w-12 h-12 text-center' onClickCapture={clickHandle}/>
                    <input type="button" value="+" className='bg-purple-300 rounded-lg w-12 h-12 text-center' onClickCapture={clickHandle}/>
                </div>

                <div className='m-2 flex justify-between text-black font-medium'>
                    <input type="button" value="0" className='bg-gray-200 rounded-lg w-12 h-12 text-center' onClickCapture={clickHandle}/>
                    <input type="button" value="00" className='bg-gray-200 rounded-lg w-12 h-12 text-center' onClickCapture={clickHandle}/>
                    <input type="button" value="." className='bg-gray-200 rounded-lg w-12 h-12 text-center' onClickCapture={clickHandle}/>
                    <input type="button" onClick={calculate} value="=" className='bg-yellow-300 rounded-lg w-12 h-12 text-center'/>
                </div>
            </div>

        </div>
    </div>
  )
}

export default calculator