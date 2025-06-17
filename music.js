export default async function handler(req, res) {
  const tokenRes = await fetch(`${process.env.VERCEL_URL ? 'https://' + process.env.VERCEL_URL : 'http://localhost:3000'}/api/token`);
  const { access_token } = await tokenRes.json();

  const response = await fetch('https://api.spotify.com/v1/browse/new-releases', {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  });

  const data = await response.json();
  res.status(200).json(data);
}
