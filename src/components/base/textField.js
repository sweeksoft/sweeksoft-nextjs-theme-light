import TextField from '@mui/material/TextField'

export default function BaseTextField({
  value,
  name,
  label,
  helperText,
  textarea,
  required,
  disabled,
  errorText,
  touched,
  onChange,
  onBlur,
  sx,
  ...restProps
}) {
  return (
    <TextField
      variant="filled"
      label={label}
      size="small"
      name={name}
      value={value}
      onChange={onChange}
      onBlur={onBlur}
      required={required ? required : false}
      error={errorText && touched ? true : false}
      fullWidth
      disabled={disabled}
      multiline={textarea ? true : false}
      maxRows={textarea ? 3 : 1}
      sx={{
        '.MuiInputBase-root:before': {
          borderBottom: 'none !important',
        },
        '.MuiInputBase-root': {
          borderRadius: 50,
        },
        '.MuiInputBase-root:after': {
          borderBottom: 'none !important',
        },
        ...sx,
      }}
      helperText={errorText && touched ? errorText : helperText}
      {...restProps}
    />
  )
}
