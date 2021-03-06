import { useState, useEffect } from 'react'

export function useForm(callback, validate) {
  const [values, setValues] = useState({})
  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      callback()
    }
  }, [callback, errors, isSubmitting])

  const handleSubmit = event => {
    if (event) event.preventDefault()
    setErrors(validate(values))
    setIsSubmitting(true)
  }

  const handleChange = event => {
    event.persist()
    setValues(val => ({ ...val, [event.target.name]: event.target.value }))
  }

  return {
    handleChange,
    handleSubmit,
    values,
    errors,
  }
}
