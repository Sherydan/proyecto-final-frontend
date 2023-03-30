import React from "react";
import { ChartContext } from "../../context/ChartContext";
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { useNavigate } from "react-router-dom";

export default function CardCharts() {
    const { charts } = React.useContext(ChartContext)
    console.log(charts)
    ChartJS.register(
      CategoryScale,
      LinearScale,
      BarElement,
      Title,
      Tooltip,
      Legend
    );
    const navigate = useNavigate();
    return (
      <>
      
        <div className="col align-items-center text-center bg-secondary">
          <div className="row row-cols-1 row-cols-md-2 g-4">
            {charts[0]?.data?.labels?.length !== 0 ? charts.map((chart) => (
          <div className="col">
          <div className="card mb-3 border-dark my-2 text-bg-dark " key={chart.id}>
            <div className="bg-white m-4 rounded">
                        <Bar  className="card-img"  data={chart.data}/>
            </div>

       
            <div className="card-body g-1">
              <h5 className="card-title"> {chart.title}</h5>
              <div className="btn-group" role="group">
                    <button type="button" className="btn btn-sm btn-outline-warning" onClick={() => {
                       navigate(`/dashboard/${chart.id}`)}}>
                        View
                     </button>
                 
              </div>
          
            </div>
          </div>
        </div>
      
          )) 
          : <h1>Loading...</h1>}
        </div>
        </div>
        </>
    )
}