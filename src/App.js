import './App.css';
import { data } from './components/constans.js';
import Listing from './components/Listing/Listing.tsx';

export default function App() {
    return <Listing data={data} />;
}
