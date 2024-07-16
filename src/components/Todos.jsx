import React from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux';
import { removeTodo } from '../features/todo/todoSlice';


const Todos = () => {

    const dispatch = useDispatch();
    const todos = useSelector((state) => state.todos);
    // console.log(todos); 
    return (
        <>
            <div className="w-[206px] flex mr-[140px] mt-3 flex-col space-y-3">
                {todos.map((todo) => (
                    <div className="w-full ">
                        <div key={todo.id} className="bg-slate-800 p-2 text-white rounded-lg">
                            {todo.text}
                            <button
                                onClick={() => dispatch(removeTodo(todo.id))}
                                className='text-black font-semibold ml-20 border p-1 rounded-lg
                                bg-red-500 hover:bg-black
                                hover:text-red-500 
                                hover:border-red-500'
                            >
                                delete
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}

export default Todos
