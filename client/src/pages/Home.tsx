import Presentation from "@/components/Presentation";
import { Helmet } from "react-helmet";

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Pakistan's IT & Telecom Sector: From Analog to AI</title>
        <meta name="description" content="An interactive presentation on Pakistan's IT & Telecom sector evolution" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Montserrat:wght@500;600;700&family=Poppins:wght@600;700;800&display=swap" rel="stylesheet" />
        <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" rel="stylesheet" />
      </Helmet>
      <Presentation />
    </>
  );
}
