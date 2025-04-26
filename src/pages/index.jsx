import { render } from '@czechitas/render';
import { BookingSummary } from '../components/BookingSummary/BookingSummary';
import { bookingData } from './data';
import '../global.css';
import './index.css';
import '../components/BookingSummary/BookingSummary.css'

document.querySelector('#root').innerHTML = render(
  <>
    <BookingSummary bookingData={bookingData} />
  </>
);
