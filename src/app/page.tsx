import { getClient } from "@ennismore/lib/client";
import { gql } from "@apollo/client";
import Hero from "@ennismore/components/hero";
import Nav from "@ennismore/components/nav";
import HotelCarousel from "@ennismore/components/hotel-carousel";

const query = gql`
  query BooksQuery {
    books {
      title
    }
  }
`;

export default async function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <HotelCarousel />
    </main>
  );
}
