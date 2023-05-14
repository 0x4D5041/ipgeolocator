import dynamic from "next/dynamic";
import Head from "next/head";

import { Table, Input, Alert } from "@/components";
import { getClientIp, getIpInfo } from "@/utils";

import { useEffect, useState } from "react";

export default function Home({ data }) {
  const Map = dynamic(() => import("../components/Map"), {
    ssr: false,
  });

  const [ipAddress, setIpAddress] = useState("");
  const [showError, setShowError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const [ipInfo, setIpInfo] = useState({
    ip: data.ip,
    latitude: data.latitude,
    longitude: data.longitude,
    country: data.country_name,
    continent: data.continent_name,
    region: data.region_name,
    city: data.city,
    capital: data.capital,
    isp: data.connection.isp,
    asn: data.connection.asn,
    type: data.type,
  });

  useEffect(() => {
    const fetchIpInfo = async () => {
      const data = await getIpInfo(ipAddress);
      setIpInfo({
        ip: data.ip,
        latitude: data.latitude,
        longitude: data.longitude,
        country: data.country_name,
        continent: data.continent_name,
        region: data.region_name,
        city: data.city,
        capital: data.capital_name,
        isp: data.connection.isp,
        asn: data.connection.asn,
        type: data.type,
      });
    };

    if (ipAddress !== "") {
      fetchIpInfo();
    }
  }, [ipAddress]);

  return (
    <>
      <Head>
        <title>IP Geolocator</title>
        <meta
          name="description"
          content="IP Geolocation using Nextjs and TailwindCSS"
        />
      </Head>
      <main className="h-full relative z-0">
        <Map position={[ipInfo.latitude, ipInfo.longitude]} ip={ipInfo.ip} />
        <div className="flex flex-col items-center absolute right-0 mr-5 mt-5">
          <Input
            setIpAddress={setIpAddress}
            setErrorMessage={setErrorMessage}
            setShowError={setShowError}
          />
          {showError && (
            <Alert errorMessage={errorMessage} setShowError={setShowError} />
          )}
          <Table ipInfo={ipInfo} />
        </div>
      </main>
    </>
  );
}

export async function getServerSideProps({ req }) {
  const ip = getClientIp(req);
  const data = await getIpInfo(ip);

  return {
    props: { data },
  };
}
