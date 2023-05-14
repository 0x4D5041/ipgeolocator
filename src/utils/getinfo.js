export async function getIpInfo(ip) {
  const API_KEY = process.env.NEXT_PUBLIC_API_KEY;
  const requestOptions = {
    redirect: "follow",
    headers: { apikey: API_KEY },
  };

  const response = await fetch(
    `https://api.apilayer.com/ip_to_location/${ip}`,
    requestOptions
  );

  const data = await response.json();

  return data;
}
