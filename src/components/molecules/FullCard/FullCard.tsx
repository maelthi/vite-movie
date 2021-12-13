import SvgIcon from "@molecules/SvgIcon/SvgIcon"

import "./FullCard.scss"

type FullCardProps = {
  title: string
  legend?: string
  backgroundUrl: string
  to: string
  iconName?: string
}

const Card = ({
  title,
  legend,
  backgroundUrl,
  to,
  iconName,
}: FullCardProps) => {
  return (
    <div
      className="full-card"
      style={{ backgroundImage: `url(${backgroundUrl})` }}
    >
      <div className="full-card__content">
        <h4 className="full-card__title">{title}</h4>
        {legend && <p>{legend}</p>}
        <a className="full-card__link" href={to}>
          <p>Découvrir</p>
          {iconName && <SvgIcon name={iconName} />}
        </a>
      </div>
    </div>
  )
}

export default Card
