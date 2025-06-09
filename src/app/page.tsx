import MainSlider from "@/components/main/main.slider";
import { Container } from "@mui/material";
import { sendRequest } from '@/utils/api';
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

  interface IUSER {
    name: string;
    age: string;

  }

  const chills = await sendRequest<IBackendRes<ITrackTop[]>>({
    url: "http://localhost:8000/api/v1/tracks/top",
    method: "POST",
    body: { category: "CHILL", limit: 10 },
  })

  const workouts = await sendRequest<IBackendRes<ITrackTop[]>>({
    url: "http://localhost:8000/api/v1/tracks/top",
    method: "POST",
    body: { category: "WORKOUT", limit: 10 },
  })
  const party = await sendRequest<IBackendRes<ITrackTop[]>>({
    url: "http://localhost:8000/api/v1/tracks/top",
    method: "POST",
    // body: { category: "CHILL", limit: 1 },
    body: { category: "PARTY", limit: 10 },
  })

  return (
    <Container>
      <MainSlider
        data={chills?.data ?? []}
        title={"TOp chill"}
      />
      <MainSlider
        data={workouts?.data ?? []}
        title={"TOp workouts"}

      />

      <MainSlider
        data={party?.data ?? []}
        title={"TOp party"}

      />

    </Container>
  );
}
