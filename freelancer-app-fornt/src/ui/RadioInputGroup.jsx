import RadioInput from "./RadioInput";

function RadioInputGroup({ register, watch, errors, configs }) {
    const { name, validationSchema = {}, options } = configs;
    return (
        <div>
            <div className="flex flex-wrap items-center justify-center gap-x-8">
                {options.map(({ value, label }) => (
                    <RadioInput
                        key={value}
                        label={label}
                        value={label}
                        id={value}
                        name={name}
                        register={register}
                        validationSchema={validationSchema}
                        watch={watch}
                        errors={errors}
                    />
                ))}
            </div>
            {errors && errors[name] && (
                <span className="text-error block text-sm mt-2 flex-1">
                    {errors[name]?.message}
                </span>
            )}
        </div>
    )
}

export default RadioInputGroup