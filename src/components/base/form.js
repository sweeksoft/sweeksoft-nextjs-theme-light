'use client'
import Button from '@mui/material/Button'
import CircularProgress from '@mui/material/CircularProgress'
import BaseFormFields from './formFields'
import {useFormik} from 'formik'
import {getInitialValuesFromFields, getValidationSchema} from '@/utils/form'
import {memo} from 'react'
import dynamic from 'next/dynamic'

const Typography = dynamic(() => import('@mui/material/Typography'))

export default memo(function BaseForm({
  defaultValues,
  fields,
  onSubmit,
  title,
  submitBtnTitle = 'Submit',
  noFullWidthSubmitBtn = true,
}) {
  const initialValues = defaultValues
    ? defaultValues
    : getInitialValuesFromFields(fields)

  const validationSchema = getValidationSchema(fields)

  const {
    values,
    errors,
    touched,
    isSubmitting,
    handleChange,
    handleBlur,
    handleSubmit,
    setFieldValue,
  } = useFormik({
    initialValues,
    validationSchema,
    onSubmit: onSubmit,
  })

  return (
    <form
      autoComplete="off"
      noValidate
      onSubmit={handleSubmit}
    >
      {title && (
        <Typography
          variant="h5"
          sx={{textAlign: 'center', mb: 3}}
        >
          {title}
        </Typography>
      )}

      <BaseFormFields
        fields={fields}
        values={values}
        touched={touched}
        errors={errors}
        onChange={handleChange}
        onBlur={handleBlur}
        setFieldValue={setFieldValue}
      />

      <Button
        variant="contained"
        type="submit"
        disableElevation
        disabled={isSubmitting}
        fullWidth={noFullWidthSubmitBtn}
        sx={{borderRadius: 50, display: 'flex', mx: 'auto', minWidth: 100}}
      >
        {!isSubmitting ? (
          submitBtnTitle
        ) : (
          <CircularProgress
            size={24}
            sx={{
              color: 'primary',
            }}
          />
        )}
      </Button>
    </form>
  )
})
