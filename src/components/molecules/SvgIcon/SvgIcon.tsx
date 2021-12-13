type SvgIconProps = {
  name: string
  className?: string
}

const SvgIcon = ({ name, className }: SvgIconProps) => (
  <img
    src={`src/assets/icons/${name}.svg`}
    className={`${className ? className : ""} icon`}
  />
)

export default SvgIcon
