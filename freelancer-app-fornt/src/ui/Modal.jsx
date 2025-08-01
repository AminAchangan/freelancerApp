import { useEffect, useRef } from "react"
import { HiOutlineX } from "react-icons/hi"
import useOutsideClick from "../hooks/useOutsideClick"

function Modal({ open, title, onClose, children }) {
    const ref = useOutsideClick(onClose)
    return (
        open && (
            <div className="backdrop-blur-sm fixed top-0 left-0 
                 w-full h-screen bg-secondary-800 bg-opacity-30 z-50">
                <div ref={ref} className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2
            rounded-lg p-4 bg-secondary-0 shadow-lg transition-all duration-500 ease-out
            w-[calc(100vw-2rem)] md:max-w-lg max-h-[calc(100vh-2rem)] overflow-y-auto
            ">
                    <div className="flex items-center justify-between border-b border-b-secondary-300 pb-2 mb-6">
                        <p className="text-secondary-700 font-bold text-base">
                            {title}
                        </p>
                        <button onClick={onClose}>
                            <HiOutlineX className="w-5 h-5 text-secondary-500" />
                        </button>
                    </div>
                    {children}
                </div>
            </div>
        )
    )
}

export default Modal