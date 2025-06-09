import MainSlider from "@/components/main/main.slider";
import { Container } from "@mui/material";
import { sendRequestJS } from '@/utils/old.api';
export default async function HomePage() {
  // const res = await fetch("http://localhost:8000/api/v1/tracks/top",
  //   {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({
  //       category: "CHILL",
  //       limit: 20
  //     })
  //   }
  // )
  // console.log("CHecck respon server: ", await res.json())

  const res = await sendRequestJS(
    {
      url: "http://localhost:8000/api/v1/tracks/top",
      method: "POST",
      body: {
        category: "CHILL",
        limit: 1
      }
    }
  );

  console.log(">>>>>check data res: ", res);
  return (
    <Container>
      <MainSlider />
      <MainSlider />
    </Container>
  );
}
