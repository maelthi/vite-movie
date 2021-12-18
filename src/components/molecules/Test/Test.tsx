export default function Test({
  name,
  prefix = "icon",
  color = "#333",
  ...props
}) {
  const symbolId = `#${prefix}-${name}`

  return (
    <svg {...props} aria-hidden="true">
      <use href={symbolId} fill={color} />
    </svg>
  )
}
