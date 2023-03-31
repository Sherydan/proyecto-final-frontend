import axios from "axios";
import { useEffect, useState } from "react";

const UserList = () => {
  const endpoint = "http://localhost:3000/user";
  const token = localStorage.getItem("tk");
  const [teamList, setTeamList] = useState([]);

  useEffect(() => {
    const getTeamList = async () => {
      try {
        if (token) {
          const res = await axios.get(endpoint, {
            headers: { Authorization: token },
          });
          setTeamList(res.data);
          console.log("teamlist toke",teamList);
        }
      } catch (e) {
        console.log(e);
      }
    };
    getTeamList();
  }, []);

  return (
    <>
      <div className="col bg-secondary">
        <div className="row">
          <div className="col-md-12 ">
            <div className="card">
              <div className="card-body">
                <h1 className="card-title text-uppercase mb-0 text-center">
                  Manage Your Team
                </h1>
              </div>
              <hr />
              <div className="table-responsive">
                <table className="table no-wrap user-table mb-0">
                  <thead>
                    <tr>
                      <th
                        scope="col"
                        className="border-0 text-uppercase font-medium pl-4"
                      >
                        #
                      </th>
                      <th
                        scope="col"
                        className="border-0 text-uppercase font-medium"
                      >
                        Name
                      </th>
                      <th
                        scope="col"
                        className="border-0 text-uppercase font-medium"
                      >
                        Email
                      </th>

                      <th
                        scope="col"
                        className="border-0 text-uppercase font-medium"
                      >
                        Category
                      </th>
                      <th
                        scope="col"
                        className="border-0 text-uppercase font-medium"
                      >
                        Manage
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {teamList.length > 0 ? (
                      teamList.map((e, index) => {
                        return (
                          <tr key={index}>
                            <td className="pl-4">{index}</td>
                            <td>
                              <h5 className="font-medium mb-0">
                                {e.first_name} {e.last_name}
                              </h5>
                            </td>
                            <td>
                              <span className="text-muted">{e.email}</span>
                              <br />
                            </td>
                            <td>
                              <span className="text-muted">{e.role}</span>
                              <br />
                            </td>
                            <td>
                              <button
                                type="button"
                                className="btn btn-outline-danger btn-circle btn-lg btn-circle ml-2 me-1"
                              >
                                <i class="fa fa-trash"></i>{" "}
                              </button>
                            </td>
                          </tr>
                        );
                      })
                    ) : (
                      <tr>
                        {" "}
                        <td>Loading...</td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserList;
