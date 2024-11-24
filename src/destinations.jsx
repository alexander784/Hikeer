import chakamt from './assets/Chakamt.jpeg';
import Ruwenzori2 from './assets/Ruwenzori2.avif';
import slider1 from './assets/slider1.avif';
import slider2 from './assets/slider2.avif';
import slider3 from './assets/slider3.avif';
import Birds from "./pages/Chaka";
import Hells from "./pages/Hells";
import KenyaDestination from './pages/Kenya';
import Longonot from "./pages/Longonot";


const DESTINATIONS = [
    {
      id: 1,
      image: chakamt,
      title: 'Biking Hells Gate',
      description: 'Description for destination 1.',
      Component: Hells,
    },
    {
      id: 2,
      image: Ruwenzori2,
      title: 'Mt Kenya',
      description: 'Description for destination 2.',
      Component: KenyaDestination,
    },
    {
      id: 3,
      image: slider1,
      title: 'Mt Longonot',
      description: 'Description for destination 3.',
      Component: Longonot,
    },
    {
      id: 4,
      image: slider2,
      title: 'Destination 4',
      description: 'Description for destination 4.'
    },
    {
      id: 5,
      image: slider3,
      title: 'Chaka Ranch',
      description: 'Description for destination 5.',
      Component: Birds,
    },
  ];

export default DESTINATIONS
