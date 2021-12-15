import { cleanPictureName, sliceText } from "@helpers/helpers"

import SvgIcon from "@molecules/SvgIcon/SvgIcon"

import "./SemiCard.scss"

type SemiCardProps = {
  title: string
  content: string
  iconName: string
  picture: string
}

const SemiCard = ({
  title,
  content,
  iconName = "read-more",
  picture,
}: SemiCardProps) => {
  return (
    <div className="semi-card">
      <div
        className={`semi-card__illustration ${cleanPictureName(picture)}`}
      ></div>
      <div className="semi-card__content">
        <h4 className="semi-card__title">{title}</h4>
        <p className="semi-card__text">{sliceText(content)}</p>
        <div className="semi-card__link">
          <p className="semi-card__read-more">Lire plus</p>
          {iconName && <SvgIcon name={iconName} />}
        </div>
      </div>
    </div>
  )
}

export default SemiCard
