import { IMG_CDN_URL } from "../config";

const RestaurantCard = ({
  cloudinaryImageId,
  name,
  cuisines,
  avgRating,
  slaString,
  costForTwoString,
}) => {
  return (
    <div className="card">
      <img src={IMG_CDN_URL + cloudinaryImageId} />
      <h2 className="restaurant-name">{name}</h2>
      <h4 className="restaurant-cuisines">{cuisines.join(",")}</h4>
      <ul>
        <li>
          <h4 className="restaurant-distance">{avgRating} *</h4>
        </li>
        <li>
          <h4 className="restaurant-distance">{slaString}</h4>
        </li>
        <li>
          <h4 className="restaurant-distance">{costForTwoString}</h4>
        </li>
      </ul>
    </div>
  );
};

export default RestaurantCard;
