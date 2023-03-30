import React from "react";
import axios from "axios";

export const ChartContext = React.createContext({})

const ChartProvider = (props) => {
    const [sales, setSales] = React.useState([]);
    const [charts, setCharts] = React.useState([]);
    React.useEffect(() => {
        const getAllData = async () => {
            try {
                const endpoint = "http://localhost:3000/sales";
                const r = await axios.get(endpoint)
                setSales(r.data)
                
            } catch (e) {
                console.log(e)
            };
        }
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
    }
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
    }
    React.useEffect(() => {
        if(sales.length === 0) return;
        const totalSalesData = formatChartData(sales);
        const totalSalesByProductData = formatChartDataByProduct(sales);
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
            ])
    }, [sales]);
    return (
        <ChartContext.Provider
            value={{ sales, charts }}
        >
            {props.children}
        </ChartContext.Provider>
    )
}
export default ChartProvider;