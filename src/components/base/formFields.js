'use client'
import Grid from '@mui/material/Grid'
import dynamic from 'next/dynamic'
import {memo} from 'react'

const BaseTextField = dynamic(() => import('./textField'))

export default memo(function BaseFormFields({
  fields,
  values,
  touched,
  errors,
  onChange,
  onBlur,
  setFieldValue,
}) {
  return (
    <Grid
      container
      spacing={2}
      sx={{pb: 2}}
      justifyContent="center"
    >
      {fields.map((field) => (
        <Grid
          item
          xs={12}
          md={field.column ? field.column : 12}
          key={field.id}
        >
          <>
            {field.type !== 'text' || (
              <BaseTextField
                name={field.id}
                value={values[field.id]}
                label={field.label}
                textarea={field.textarea ? field.textarea : false}
                helperText={field.helperText}
                required={field.required}
                disabled={field.disabled ? true : false}
                touched={touched[field.id]}
                errorText={errors[field.id]}
                onChange={onChange}
                onBlur={onBlur}
                sx={{
                  mr: {md: 2},
                }}
              />
            )}

            {field.type !== 'email' || (
              <BaseTextField
                name={field.id}
                value={values[field.id]}
                label={field.label}
                helperText={field.helperText}
                required={field.required}
                disabled={field.disabled ? true : false}
                touched={touched[field.id]}
                errorText={errors[field.id]}
                onChange={onChange}
                onBlur={onBlur}
              />
            )}
          </>
        </Grid>
      ))}
    </Grid>
  )
})
