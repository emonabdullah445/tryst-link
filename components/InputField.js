import { Field } from "formik";

function InputField({ label, id, children, ...props }) {
  return (
    <div className="">
      <label
        htmlFor={id}
        className="text-[#5d738d] uppercase font-medium text-sm"
      >
        {label}
      </label>
      {children && children}
      <Field
        className="w-full px-[8px] py-[13px] text-[#526a81] font-medium text-xl  outline-none border border-slate-300 focus:border-blue-500 shadow-inner transition duration-300 rounded"
        id={id}
        {...props}
        required
      />
    </div>
  );
}

export default InputField;
