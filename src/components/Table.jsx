import { BiMapPin } from "react-icons/bi";

const Table = ({ ipInfo }) => {
  const {
    ip,
    type,
    latitude,
    longitude,
    country,
    continent,
    region,
    city,
    capital,
    isp,
    asn,
  } = ipInfo;

  return (
    <div className="mt-4">
      <div className="bg-white max-w-sm rounded overflow-hidden shadow-lg p-4 mb-3 ">
        <h5 className="mb-2 text-4xl font-bold tracking-tight text-gray-900 ">
          {ip}
        </h5>
        <span className="text-lg text-gray-500 dark:text-gray-400">{type}</span>
        <div className="flex mt-4 space-x-3 md:mt-6">
          <BiMapPin style={{ color: "#000", fontSize: "2.5em" }} />
          <div className="text-left">
            <div className="-mt-1 font-sans text-xl font-semibold text-gray-900">
              {country}
            </div>
            <div className="mb-1 text-xs text-gray-900">{continent}</div>
          </div>
        </div>
      </div>

      <div className="bg-white max-w-sm rounded overflow-hidden shadow-lg p-4 mb-4">
        <h5 className="mb-4 text-xl font-medium text-gray-500 dark:text-gray-400">
          IP Information
        </h5>
        <ul role="list" className="space-y-5 my-7">
          <li className="flex space-x-3">
            <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">
              Latitude: {latitude}
            </span>
          </li>
          <li className="flex space-x-3">
            <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">
              Longitude: {longitude}
            </span>
          </li>
          <li className="flex space-x-3">
            <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">
              Region: {region}
            </span>
          </li>
          <li className="flex space-x-3">
            <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">
              City: {city}
            </span>
          </li>
          <li className="flex space-x-3">
            <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">
              Capital: {capital}
            </span>
          </li>
        </ul>
      </div>

      <div className="bg-white max-w-sm rounded overflow-hidden shadow-lg p-4 mb-4">
        <h5 className="mb-4 text-xl font-medium text-gray-500 dark:text-gray-400">
          Internet Connection
        </h5>
        <ul role="list" className="space-y-5 my-7">
          <li className="flex space-x-3">
            <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">
              ISP: {isp}
            </span>
          </li>
          <li className="flex space-x-3">
            <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">
              ASN: {asn}
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Table;
