import React from "react";
import {useDispatch} from "react-redux";
import {removeEntry, toggleEntryDone} from "../../features/todoSlice";

import Button from "@material-tailwind/react/Button";
import Icon from "@material-tailwind/react/Icon";

const TodoCard = ({children, id}) => {
    const dispatch = useDispatch();

    return (
        <span className="flex items-center justify-center py-1">
          <div className="flex flex-col items-center lg:flex-row">
            <div className="w-full lg:w-1/2">
              <blockquote className="flex items-center justify-between w-full col-span-1 p-1 bg-white rounded-lg filter transition duration-300 hover:drop-shadow-xl">
                <div className="flex flex-col">
                  <div className="relative">
 <p className="text-lg text-gray-600 sm:text-base lg:text-sm xl:text-base inline-flex"><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 float-left mt-1 mr-0.5" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clip-rule="evenodd"/>
              </svg> {`${children}'s`} <span class="ml-2"> <Button className="bg-red-500" onClick={() => dispatch(removeEntry(id))} buttonType="filled" size="sm" rounded={false} block={false} iconOnly={false} ripple="light">
                    Remove
                  </Button></span></p>
                  </div>
                </div>
              </blockquote>
            </div>
          </div>
      </span>
    );
};

export default TodoCard;
