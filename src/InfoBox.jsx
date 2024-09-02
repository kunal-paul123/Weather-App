import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import "./InfoBox.css";

export default function InfoBox({ info }) {
  let init_url =
    "https://images.pexels.com/photos/4273765/pexels-photo-4273765.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";

  let COLD_URL =
    "https://images.pexels.com/photos/813872/pexels-photo-813872.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";

  let HOT_URL =
    "https://images.pexels.com/photos/1019472/watching-fire-hot-warm-1019472.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";

  let RAIN_URL =
    "https://images.pexels.com/photos/2559961/pexels-photo-2559961.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";

  return (
    <div className="InfoBox">
      <br />
      <div className="cardContainer">
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            sx={{ height: 140 }}
            image={
              info.humidity > 80
                ? RAIN_URL
                : info.temp > 25
                ? HOT_URL
                : COLD_URL
            }
            title="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {info.city}
            </Typography>
            <Typography
              variant="body2"
              sx={{ color: "text.secondary" }}
              component={"span"}>
              <p>Temparature: {info.temp}&deg;C</p>
              <p>Humidity: {info.humidity}</p>
              <p>Min temp: {info.tempMin}</p>
              <p>Max temp: {info.tempMax}</p>
              <p>
                The Weather can be described as {info.weather} and feels like{" "}
                {info.feelsLike}&deg;C
              </p>
            </Typography>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
