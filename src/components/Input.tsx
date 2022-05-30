const Input = ({ label, onChange, isCheked, id }: any) => {
  return (
    <label htmlFor={id}>
      <input
        type='checkbox'
        onChange={(e) => onChange(e.target.checked)}
        checked={isCheked}
        id={id}
      />
      <span>{label}</span>
    </label>
  )
}

export { Input }
