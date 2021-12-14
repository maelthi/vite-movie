type SvgIconProps = {
  name: string
  className?: string
  onClick: () => void
}

const SvgIcon = ({ name, className, onClick }: SvgIconProps) => (
  <img
    src={`src/assets/icons/${name}.svg`}
    className={`${className ? className : ""} icon`}
    onClick={() => onClick()}
  />
)

export default SvgIcon
