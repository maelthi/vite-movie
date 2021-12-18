type SvgIconProps = {
  name: string
  className?: string
  onIconClick?: () => void
}

const SvgIcon = ({ name, className, onIconClick }: SvgIconProps) => (
  <img
    src={`/${name}.svg`}
    className={`${className ? className : ""} icon`}
    onClick={() => onIconClick && onIconClick()}
  />
)

export default SvgIcon
