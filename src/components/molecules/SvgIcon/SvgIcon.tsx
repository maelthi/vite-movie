type SvgIconProps = {
  name: string
  className?: string
  onIconClick?: () => void
  color: string
}

const SvgIcon = ({ name, className, onIconClick, color }: SvgIconProps) => (
  <svg
    className={`${className ? className : ""} icon`}
    aria-hidden="true"
    onClick={() => onIconClick && onIconClick()}
  >
    <use href={`#icon-${name}`} fill={color} />
  </svg>
)

export default SvgIcon
