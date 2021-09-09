import { useState } from "react"

const useForm = (initialValues = {}) => {
  const [values, setValues] = useState(initialValues)

  const handleInputChange = ({ target }) => {
    setValues({
      ...values,
      [target.name]: target.value,
    })
  }

  return [values, handleInputChange]
}

export default useForm