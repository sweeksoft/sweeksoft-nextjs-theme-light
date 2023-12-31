'use client'
import BaseForm from '@/components/base/form'

export default function ContactForm({fields, submitBtnTitle}) {
  const sendMessage = (values, actions) => {
    setTimeout(() => {
      alert('Message sent!')
      actions.setSubmitting(false)
      actions.resetForm(false)
    }, 2500)
  }
  return (
    <BaseForm
      fields={fields}
      submitBtnTitle={submitBtnTitle}
      onSubmit={sendMessage}
    />
  )
}
