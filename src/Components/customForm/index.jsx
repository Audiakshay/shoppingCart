import { Field, Formik, Form } from 'formik';
import React from 'react';

function CustomForm({ fields, btnProps, children, ...props }) {
  return (
    <Formik {...props}>
      {({ isValid, dirty, isSubmitting, errors }) => (
        <Form className="mt-8 space-y-6">
          <input type="hidden" name="remember" defaultValue="true" />
          {errors.serverError && <p className='text-center text-lg font-medium text-red-500'>{errors.serverError}</p>}
          <div className="-space-y-px rounded-md shadow-sm">
            {fields.map((x) => (
              <Field key={x.name} {...x} />
            ))}
          </div>
          {children}
          <div>
            <button
              disabled={!(isValid && dirty) || isSubmitting}
              type="submit"
              className="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:bg-slate-400 disabled:cursor-wait"
              {...btnProps}
            />
          </div>
        </Form>
      )}
    </Formik>
  );
}

export default CustomForm;
