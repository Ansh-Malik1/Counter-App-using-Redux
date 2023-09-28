import { useDispatch, useSelector } from "react-redux"
import { decrement, increment } from "../redux/Slices/CounterSlice"



export default function Counter(){
    const count = useSelector((state)=> state.counter.value)
    const dispatch = useDispatch()
    return(
        <div className=" w-full h-full flex justify-center items-center bg-slate-900">
        <div className=" grid grid-cols-3 bg-slate-400 place-items-center py-3 px-4 sm:w-[90%] lg:w-[50%] rounded-lg">
            <button onClick={()=> dispatch(decrement()) } className=" w-[100%] border-r-2 text-center">Decrement</button>
            <div><h1>{count}</h1></div>
            <button onClick={()=> dispatch(increment())} className=" w-[100%] border-l-2 text-center">Increment</button>  
        </div>
        </div>
    )
}