import React from 'react';

export default function Listing({data}) {
    type DataType = {
        MainImage: string;
        url: string;
        title: string;
        currency_code: string;
        price: string;
        quantity: number;
        listing_id: number;
    }

    const dataFilter = data.filter((item) => {
        return item.state === 'active';
    });

    const newData: DataType[] = dataFilter.map((item) => {
        return (
            {
                MainImage: item.MainImage.url_570xN,
                url: item.url,
                title: item.title,
                currency_code: item.currency_code,
                price: item.price,
                quantity: item.quantity,
                listing_id: item.listing_id
            }
        );
    });

    const renderData = newData.map(({ MainImage, url, title, currency_code, price, quantity, listing_id }) => {
            return (
                <div className="item" key={listing_id}>
                    <div className="item-image">
                        <a href={url}>
                            <img src={MainImage} alt={title.toString()} />
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
    )

    return (
        <div className="wrapper">
            <div className="item-list">
                { renderData }
            </div>
        </div>
    );
}

