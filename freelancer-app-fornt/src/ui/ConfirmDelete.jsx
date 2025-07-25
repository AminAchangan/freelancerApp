import React from 'react'

function ConfirmDelete({ resourseName, onClose, disabled ,onConfirm}) {
    return (
        <div>
            <h2 className='font-bold text-16 mb-8'>
                آیا از حذف کردن {resourseName} مطمین هستید؟
            </h2>
            <div
                className="flex justify-between items-center gap-x-16"
            >
                <button
                    onClick={onClose}
                    disabled={disabled}
                    className='btn btn--primary flex-1'>
                    لغو
                </button>
                <button
                    onClick={onConfirm}
                    disabled={disabled}
                    className=' btn btn--danger flex-1 py-3'>تایید</button>
            </div>
        </div>
    )
}

export default ConfirmDelete