import SvgIcon from "@molecules/SvgIcon/SvgIcon"

import "./FullCard.scss"

type FullCardProps = {
  title: string
  legend?: string
  backgroundUrl: string
  iconName?: string
}

const FullCard = ({
  title,
  legend,
  backgroundUrl,
  iconName,
}: FullCardProps) => {
  return (
    <div
      className="full-card"
      style={{
        backgroundImage: `linear-gradient(rgba(236, 234, 236, 0.1), rgba(49, 32, 55, 0.8)), url(${backgroundUrl})`,
      }}
    >
      <div className="full-card__content">
        <h4 className="full-card__title">{title}</h4>
        {legend && <p className="full-card__legend">{legend}</p>}
        <div className="full-card__link">
          <p>Découvrir</p>
          {iconName && <SvgIcon name={iconName} />}
        </div>
      </div>
    </div>
  )
}

export default FullCard
