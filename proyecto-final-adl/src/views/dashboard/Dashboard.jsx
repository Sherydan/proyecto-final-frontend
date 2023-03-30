import React from "react";
import TableData from "../../components/TableData";
import Chart from "../../components/dashboard/Chart";
import { useParams, useNavigate } from "react-router-dom";
import { ChartContext } from "../../context/ChartContext";

export default function Dashboard() {
  const { chartId } = useParams();
  const navigate = useNavigate();
  const idChart = parseInt(chartId);
  const { sales, charts } = React.useContext(ChartContext);
  if (sales.length === 0) return;
  if (charts.length === 0) return;
  const chart = charts.find((chart) => chart.id === idChart);

  // logica para los datos de la tabla segun parametro, esto es netamente para mostrar unos datos en la tabla segun params
  // para que espere a que se carguen los datos
  let tableData = [];
  let dataKeys = [];
  if (idChart === 1) {
    const salesByDate = {};
    sales?.forEach((sale) => {
      const date = new Date(sale.date).toLocaleDateString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric",
      });

      if (!salesByDate[date]) {
        salesByDate[date] = {
          date,
          totalSales: 0,
        };
      }
      // convert string to number
      sale.sales_total = Number(sale.total_sales);
      salesByDate[date].totalSales += sale.total_sales;
    });
    for (const key in salesByDate) {
      salesByDate[key].totalSales = salesByDate[key].totalSales.toLocaleString('en-US', {style: 'currency', currency: 'USD', minimumFractionDigits: 0, maximumFractionDigits: 0});
    }
    tableData = Object.values(salesByDate);
    dataKeys = Object.keys(tableData[0]);
  } else if (idChart === 2) {
    const salesByProduct = {};
    sales?.forEach((sale) => {
      const { product_id, product_name, sales_total } = sale;
      if (!salesByProduct[product_id]) {
        salesByProduct[product_id] = {
          product_id,
          product_name,
          totalSales: 0,
        };
      }
      salesByProduct[product_id].totalSales += sales_total;
    });
    for (const key in salesByProduct) {
      salesByProduct[key].totalSales = salesByProduct[key].totalSales.toLocaleString('en-US', {style: 'currency', currency: 'USD', minimumFractionDigits: 0, maximumFractionDigits: 0});
    }
    tableData = Object.values(salesByProduct);
    dataKeys = Object.keys(tableData[0]);
  }

  return (
    
          <main className="container-fluid px-5 col ">
              <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                  <h1 className="h2">{chart.title}</h1>
                  <div className="btn-toolbar mb-2 mb-md-0">
                      <div className="btn-group me-2">
                          <button type="button" className="btn btn-sm btn-outline-primary" onClick={() => {
                          navigate(`/summary`)}}>Back to Summary</button>
                          </div>
                          <button type="button" className="btn btn-sm btn-outline-secondary">Share</button>
                          <button type="button" className="btn btn-sm btn-outline-secondary">Export</button>
                      <button type="button" className="btn btn-sm btn-outline-secondary dropdown-toggle">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-calendar align-text-bottom" aria-hidden="true"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
                          This week
                      </button>
                  </div>
              </div>
              <div className="bg-white">
                 <Chart chart={chart}/>
              </div>
             
              <h2>Table details</h2>
              {console.log(tableData)}
              <TableData tableData={tableData} dataKeys={dataKeys} />
          </main>
      
  );
}
