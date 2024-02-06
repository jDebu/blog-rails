import React, { useState } from 'react'
import { Form, Field } from 'react-final-form'

import PropTypes from 'prop-types'
import { Button, TextField } from '@mui/material'
import MdEditor  from '@uiw/react-md-editor'


export const ArticlesForm = ({ initialValues = {}, onSubmit, create }) => {
  const body = initialValues?.body?.body ?? '';
  const [bodyValue, setBodyValue] = useState(body);

  const handleBodyChange = (value) => {
    setBodyValue(value);
  };

  const handleSubmit = (values) => {
    onSubmit({ ...values, body: bodyValue });
  };
  return (
    <Form onSubmit={handleSubmit} initialValues={initialValues} autoComplete="off">
      {({ handleSubmit, submitError, submitting, pristine }) => (
        <form onSubmit={handleSubmit}>
          <Field
            name="title"
            render={({ input }) => (
              <TextField
                {...input}
                label="Title"
                fullWidth
                required
                margin="normal"
                focused
              />
            )}
          />
          <div className="mt-4">
            <label>Body:</label>
            <MdEditor value={bodyValue} onChange={handleBodyChange} height={300} />
          </div>
          <div>
            <Button disabled={pristine || submitting} variant="contained" type="submit" className="m-auto" fullWidth margin="normal">
              {create ? 'Create Article' : 'Save'}
            </Button>
          </div>
          {submitError && <div className="text-red-700 font-bold text-center">{submitError}</div>}
        </form>
      )}
    </Form>
  )
}
ArticlesForm.propTypes = {
  initialValues: PropTypes.object,
  create: PropTypes.bool,
  onSubmit: PropTypes.func
}
