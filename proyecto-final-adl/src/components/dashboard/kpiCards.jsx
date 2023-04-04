import React from "react";
import { ChartContext } from "../../context/ChartContext";

const KpiCards = (props) => {
    const { totalSales, totalProductsSold, top3Products } =
        React.useContext(ChartContext);

    const averageTotalSales = totalSales / totalProductsSold;
    const formatedTotalSales = totalSales.toLocaleString("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 })

    return (
        <div className="row bg-dark m-1 p-3 rounded">
            <div className="col-md-3 pt-1">
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">Total Sales:</h5>
                        <p className="card-text">{formatedTotalSales}</p>
                    </div>
                </div>
            </div>

            <div className="col-md-3 pt-1">
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">Total Products Sold:</h5>
                        <p className="card-text">{totalProductsSold}</p>
                    </div>
                </div>
            </div>

            <div className="col-md-3 pt-1">
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">Average Total Sales:</h5>
                        <p className="card-text">
                            {averageTotalSales.toFixed(2)} per day{" "}
                        </p>
                    </div>
                </div>
            </div>

            <div className="col-md-3 pt-1">
                <div className="card ">
                    <div className="card-body">
                        <h5 className="card-title">Top 3 Products:</h5>
                        <p className="card-text">
                            <ul>
                                {top3Products.map((product) => (
                                    <li key={product.product_name}>
                                        {" "}
                                        {product.product_name} - Sales: 
                                        {product.totalSales.toLocaleString("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 })}
                                    </li>
                                ))}
                            </ul>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default KpiCards;
