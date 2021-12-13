import SvgIcon from "@molecules/SvgIcon/SvgIcon"

type SemiCardProps = {
  title: string
  content: string
  to: string
  iconName: string
}

const SemiCard = ({ title, content, to, iconName }: SemiCardProps) => {
  return (
    <div className="semi-card">
      <div className="semi-card__ilustration"></div>
      <div className="semi-card__content">
        <h4>{title}</h4>
        <p>{content}</p>
        <a className="full-card__link" href={to}>
          <p>Lire plus</p>
          {iconName && <SvgIcon name={iconName} />}
        </a>
      </div>
    </div>
  )
}

export default SemiCard
