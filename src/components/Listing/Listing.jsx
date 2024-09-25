import { data } from '../constans.js';

export default function Listing() {
    const newData = data.filter((item) => {
        return item.MainImage;
    });

    return (
        <div className="wrapper">
            <div className="item-list">
                {newData.map(
                    ({
                        MainImage,
                        url,
                        title,
                        currency_code,
                        price,
                        quantity,
                        listing_id,
                    }) => {
                        return (
                            <div className="item" key={listing_id}>
                                <div className="item-image">
                                    <a href={url}>
                                        <img src={MainImage.url_570xN} />
                                    </a>
                                </div>
                                <div className="item-details">
                                    <p className="item-title">{title}</p>
                                    <p className="item-price">
                                        {currency_code} {price}
                                    </p>
                                    <p className="item-quantity level-medium">
                                        {quantity} left
                                    </p>
                                </div>
                            </div>
                        );
                    },
                )}
            </div>
        </div>
    );
}
