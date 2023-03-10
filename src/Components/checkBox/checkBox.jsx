import clsx from 'clsx';
import React from 'react';

function checkBox({
  field, // { name, value, onChange, onBlur }
  form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
  meta,
  label,
  className,
  ...props
}) {
  return (
    <div className="flex items-center">
      <input
        {...field}
        {...props}
        type="checkbox"
        className={clsx(
          'h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500',
          {
            [className]: !!className,
          },
        )}
      />
      <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
        {label}
      </label>
    </div>
  );
}

export default checkBox;
