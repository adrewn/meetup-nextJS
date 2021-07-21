import MeetupList from "../components/meetups/MeetupList";
import Layout from "../components/layout/Layout";
const DUMMY_MEETUPS = [
  {
    id: "m1",
    title: "A first meetup",
    image:
      "https://cdn.pixabay.com/photo/2021/07/15/08/44/town-6467851_960_720.jpg",
    address: "Some Address 5, 12345 Some city",
    description: "This is the first Meetup",
  },
  {
    id: "m2",
    title: "A second meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/2021_Art_and_Feminism_Wikipedia_Edit-a-thon_at_Nnamdi_Azikiwe_Library%2C_University_Of_Nigeria%2C_Nsukka.jpg/640px-2021_Art_and_Feminism_Wikipedia_Edit-a-thon_at_Nnamdi_Azikiwe_Library%2C_University_Of_Nigeria%2C_Nsukka.jpg",
    address: "Some Address 12, 345 Some city",
    description: "This is the second Meetup",
  },
  {
    id: "m3",
    title: "A third meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/CHEWDARA_.jpg/1280px-CHEWDARA_.jpg",
    address: "Some Address 132, 66345 Some city",
    description: "This is the third Meetup",
  },
  {
    id: "m4",
    title: "A fourth meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/c/c7/Atelier_Wikipedia_reuse%2C_projet_Nos_Jardins%2C_2021-06-15.jpg",
    address: "Some Address 13542, 6644345 Some city",
    description: "This is the fourth Meetup",
  },
];
function HomePage() {
  return <MeetupList meetups={DUMMY_MEETUPS}></MeetupList>;
}

export default HomePage;
