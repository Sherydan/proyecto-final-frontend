import React from "react";
import axios from "axios";

export const ChartContext = React.createContext({});

const ChartProvider = (props) => {
    const [sales, setSales] = React.useState([]);
    const [charts, setCharts] = React.useState([]);
    const [totalSales, setTotalSales] = React.useState(0);
    const [totalProductsSold, setTotalProductsSold] = React.useState(0);
    const [averageSalesPrice, setAverageSalesPrice] = React.useState(0);
    const [top3Products, setTop3Products] = React.useState([]);
    React.useEffect(() => {
        const getAllData = async () => {
            try {
                const token = localStorage.getItem("tk");
                const endpoint =
                    "https://backend-proyecto-final-production-0311.up.railway.app/sales";
                const r = await axios.get(endpoint, {
                    headers: { Authorization: token },
                });
                setSales(r.data);
            } catch (e) {
                console.log(e);
            }
        };
        getAllData();
    }, []);

    const formatChartData = (data) => {
        const salesByDate = {};
        data.forEach((sale) => {
            const date = new Date(sale.date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "short",
                day: "numeric",
            });
            // sum sales by date
            if (!salesByDate[date]) {
                salesByDate[date] = {
                    date,
                    totalSales: 0,
                };
            }
            // convert string to number
            sale.total_sales = Number(sale.total_sales);
            salesByDate[date].totalSales += sale.total_sales;
        });

        const dataChart = Object.values(salesByDate);

        return {
            labels: dataChart.map((sale) => sale.date),
            datasets: [
                {
                    label: "Sales",
                    data: dataChart.map((sale) => sale.totalSales),
                    backgroundColor: "rgba(255, 99, 132, 0.5)",
                    borderColor: "rgba(255, 99, 132, 1)",
                    borderWidth: 1,
                },
            ],
        };
    };

    
    const formatChartDataByProduct = (data) => {
        const salesByProduct = {};
        data.forEach((sale) => {
            const { product_id, product_name, total_sales } = sale;
            if (!salesByProduct[product_id]) {
                salesByProduct[product_id] = {
                    product_id,
                    product_name,
                    totalSales: 0,
                };
            }

            salesByProduct[product_id].totalSales += total_sales;
        });
        const dataChart = Object.values(salesByProduct);

        return {
            labels: dataChart.map((sale) => sale.product_name),
            datasets: [
                {
                    label: "Sales",
                    data: dataChart.map((sale) => sale.totalSales),
                    backgroundColor: "rgba(53, 162, 235, 0.5)",
                    borderColor: "rgba(53, 162, 235, 1)",
                    borderWidth: 1,
                },
            ],
        };
    };


    React.useEffect(() => {
        if (sales.length === 0) return;
        const totalSalesData = formatChartData(sales);
        const totalSalesByProductData = formatChartDataByProduct(sales);
        const getTotalSales = sales.reduce((acc, sale) => {
            return acc + sale.total_sales;
        }, 0);
        setTotalSales(getTotalSales);
        const getTotalProductsSold = sales.reduce((acc, sale) => {
            //convert string to number
            sale.sale_quantity = Number(sale.sale_quantity);
            
            return acc + sale.sale_quantity;
        }, 0);
        setTotalProductsSold(getTotalProductsSold);
        // get average total sales by dividing the sum of total_sales by the sum of sale_quantity
        const getAverageTotalSales = sales.reduce((acc, sale) => {
            //convert string to number
            sale.total_sales = Number(sale.total_sales);
            sale.quantity = Number(sale.quantity);


            return acc + sale.total_sales / sale.quantity;
        }, 0);
        setAverageSalesPrice(getAverageTotalSales);

        // get top 3 products
        const top3Products = sales.reduce((acc, sale) => {
            if (!acc[sale.product_id]) {
                acc[sale.product_id] = {
                    product_id: sale.product_id,
                    product_name: sale.product_name,
                    totalSales: 0,
                };
            }
            acc[sale.product_id].totalSales += sale.total_sales;
            return acc;
        }, {});
        const top3ProductsArray = Object.values(top3Products);
        top3ProductsArray.sort((a, b) => b.totalSales - a.totalSales);
        setTop3Products(top3ProductsArray.slice(0, 3));

        setCharts([
            {
                id: 1,
                title: "Total Sales by Date",
                data: totalSalesData,
            },
            {
                id: 2,
                title: "Total Sales by Product",
                data: totalSalesByProductData,
            },
        ]);
    }, [sales]);

   

   




    return (
        <ChartContext.Provider value={{ sales, charts, totalSales, totalProductsSold, top3Products, averageSalesPrice }}>
            {props.children}
        </ChartContext.Provider>
    );
};
export default ChartProvider;
