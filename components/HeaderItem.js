import React from 'react'

const HeaderItem = ({ title, Icon }) => {
    return (
        <div className="flex flex-col items-center cursor-pointer group w-12 sm:w-20 hover:text-white transition duration-200 ease-in transform hover:scale-125 hover:z-50 active:text-red-500">
            <Icon className="h-8 mb-1"/>
            <p className="opacity-0 group-hover:opacity-100 tracking-widest">{title}</p>
        </div>
    )
}

export default HeaderItem
