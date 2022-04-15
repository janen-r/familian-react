import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import TodoShelf from "./TodoShelf";
import {addTodoEntry} from "../../features/todoSlice";
import Result from "./Result";
import ReplayIcon from '@mui/icons-material/Replay';

const Todos = () => {
    const [newTodoEntry, setNewTodoEntry] = useState("");
    const {entries} = useSelector((state) => state.todo);
    const dispatch = useDispatch();

    const [finalRelation, setFinalRelation] = useState("");

    const onFormSubmit = (e) => {
        e.preventDefault();
        console.log(newTodoEntry)
        if (newTodoEntry === "") {
            return;
        }

        dispatch(addTodoEntry(newTodoEntry));
        setNewTodoEntry("");
    };

    // const _refreshPage = () => {
    //     console.log("Clicked");
    //     window.location.reload();
    // }

    // const myThoughts = ["Play Tennis", "Walk 6 KM", "Drink a Glass of Water", "Plant a Tree", "GogShopping"];

    return (
        <>
            <div className="absolute inset-x-0 top-0 flex items-start justify-center flex-col">
            <section className="w-full px-3 antialiased lg:px-6">
            <div className="container py-12 mx-auto text-center sm:px-4">
            <h1 className="text-4xl font-extrabold leading-10 tracking-tight text-white sm:text-5xl sm:leading-none md:text-6xl xl:text-7xl filter transition duration-300 drop-shadow-xl">
            <span className="block">Find your relation !!</span></h1>
            </div>
            <Result entries={entries}/>
                    {/* <TodoShelf entries={entries}/> */}
            </section>
                <section className="w-full px-3 antialiased lg:px-6">
                    <form onSubmit={onFormSubmit}>
                        <div className="mx-auto max-w-7xl">
                            <div className="container py-2 mx-auto text-center sm:px-4">
                                <div className="relative flex items-center max-w-md mx-auto mt-2 overflow-hidden text-center rounded-full">
                                    {/* <input type="text" placeholder={myThoughts[Math.floor(Math.random()*myThoughts.length)]} value={newTodoEntry} className="w-full h-12 px-6 py-2 font-medium text-indigo-800 focus:outline-none" onChange={(e) => {
                                        setNewTodoEntry(e.target.value);
                                    }}/> */}                                  
                                    <select value = {newTodoEntry} onChange={(e) => {
                                        setNewTodoEntry(e.target.value);
                                    }} class="form-select appearance-none
                                        block
                                        w-full
                                        px-3
                                        py-1.5
                                        text-base
                                        font-normal
                                        text-gray-700
                                        bg-white bg-clip-padding bg-no-repeat
                                        border border-solid border-gray-300
                                        rounded
                                        transition
                                        ease-in-out
                                        m-0
                                        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" aria-label="Default select example">
                                            <option value='' selected>Select the relation name</option>
                                            {['father', 'brother'].map((option) => (
                                            <option value={option.toLowerCase()}>{option}</option>
                                            ))}
                                        </select>
                                     <span className="relative top-0 right-0 block">
                <button type="submit" className="inline-flex items-center w-25 h-9 px-8 text-base font-bold leading-6 text-white transition duration-150 ease-in-out bg-indigo-400 border border-transparent hover:bg-indigo-700 focus:outline-none active:bg-indigo-700">
                  Add
                </button>
              </span>
                                </div>
                                <div className="mt-2 text-sm text-indigo-300">Select the relation and press Add Button.</div>
                        <br />
                        <span className="relative top-0 right-0 block">
                            <button type="button" className="inline-flex items-center w-25 h-9 px-8 text-base font-bold leading-6 text-white transition duration-150 ease-in-out bg-red-400 border border-transparent hover:bg-red-700 focus:outline-none active:bg-indigo-700" onClick={() => {
                                console.log('reload')
                                window.location.reload();
                            }}>
                            Reset <ReplayIcon />
                            </button>
                        </span>
                            </div>
                        </div>
                    </form>
                </section>

            </div>
        </>
    );
};

export default Todos;
