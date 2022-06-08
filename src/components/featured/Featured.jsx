import useFetch from "../../hooks/useFetch";
import "./featured.css";

const Featured = () => {
  const { data, loading, error } = useFetch(
    "/hotels/countByCity?cities=chennai,madurai,salem"
  );

  return (
    <div className="featured">
      {loading ? (
        "Loading please wait"
      ) : (
        <>
          <div className="featuredItem">
            <img
              src="https://images.hindustantimes.com/img/2022/01/10/550x309/PTI01-09-2022-000105B-0_1641829388604_1641829441003.jpg"
              alt=""
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>Chennai</h1>
              <h2>{data[0]} properties</h2>
            </div>
          </div>

          <div className="featuredItem">
            <img
              src="https://lp-cms-production.imgix.net/2020-09/shutterstock_1760532416drone%20shot%20aerial%20view%20ancient%20hindu%20temple%20tamilnadu%20india%20cloudy%20beautiful%20cityscape%20ancient.jpg"
              alt=""
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>Madurai</h1>
              <h2>{data[1]} properties</h2>
            </div>
          </div>
          <div className="featuredItem">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/9/92/Salem_city_from_Hills.jpg"
              alt=""
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>Salem</h1>
              <h2>{data[2]} properties</h2>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Featured;
