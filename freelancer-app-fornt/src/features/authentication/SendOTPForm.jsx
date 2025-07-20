import TextField from '../../ui/TextField'
import Loading from "../../ui/Loading"

function SendOTPForm({ phoneNumber, onChange, onSubmit, isSendingOtp, register }) {
    console.log(phoneNumber)
    return (
        <div>
            <form className='space-y-10' onSubmit={onSubmit}>
                <TextField
                    name="phoneNumber"
                    label="شماره موبایل "
                    required
                    register={register}
                    value={phoneNumber}
                    onChange={onChange}
                />
                <div>{isSendingOtp ? (
                    <Loading />
                ) : (
                    <button className="btn btn--primary w-full" type='submit'>
                        ارسال کد تایید
                    </button>
                )}
                </div>
            </form>
        </div>
    )
}

export default SendOTPForm