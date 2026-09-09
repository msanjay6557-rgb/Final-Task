export const CATEGORIES = ['Sedan', 'SUV', 'Sports', 'Electric']
import car1 from "../assets/Aster Meridian.jpg";
import car2 from "../assets/Bayline SUV.jpg";
import car3 from "../assets/Harbor Continental.jpg";
import car4 from "../assets/Marlowe Trailhead.jpg";
import car5 from "../assets/Quill Roadster.jpg";
import car6 from "../assets/Ridge Overlander.jpg";
import car7 from "../assets/Solene GT Coupe.jpg";

export const CARS = [
  {
    id: 'solene-gt',
    name: 'Solene GT Coupe',
    category: 'Sports',
    price: 78500,
    year: 2026,
    horsepower: 512,
    topSpeed: '298 km/h',
    image: car1,
    tagline: 'A coupe built for the long way home.',
    description:
      'The Solene GT pairs a naturally-aspirated V8 with a chassis tuned on real mountain roads, not just a test track. Every panel is shaped to keep the car planted at speed while staying comfortable enough for a weekend away.',
    features: ['Carbon-ceramic brakes', 'Adaptive dampers', 'Launch control', '2+2 seating'],
  },
  {
    id: 'marlowe-suv',
    name: 'Marlowe Trailhead',
    category: 'SUV',
    price: 52900,
    year: 2025,
    horsepower: 320,
    topSpeed: '210 km/h',
    image: car2,
    tagline: 'Room for the whole trip, not just the whole family.',
    description:
      'Trailhead was designed around cargo first: a flat-folding third row, a washable cargo liner, and a chassis that shrugs off gravel roads. It still drives like a car, not a truck.',
    features: ['All-wheel drive', 'Third-row seating', '360° camera', 'Hands-free tailgate'],
  },
  {
    id: 'harbor-sedan',
    name: 'Harbor Continental',
    category: 'Sedan',
    price: 41200,
    year: 2026,
    horsepower: 258,
    topSpeed: '235 km/h',
    image: car3,
    tagline: 'Quiet enough to hear yourself think.',
    description:
      'Harbor is our best-selling sedan for a reason: triple-sealed doors for a near-silent cabin, a ride tuned for long commutes, and a fuel-sipping turbo four that never feels underpowered.',
    features: ['Acoustic glass', 'Adaptive cruise', 'Heated & cooled seats', '10-speaker audio'],
  },
  {
    id: 'volt-current',
    name: 'Current EV Liftback',
    category: 'Electric',
    price: 46800,
    year: 2026,
    horsepower: 402,
    topSpeed: '225 km/h',
    image: car4,
    tagline: 'Charges over lunch. Drives all afternoon.',
    description:
      'Current uses a lightweight structural battery pack to reclaim interior space most EVs give up. A 20-minute fast charge adds 300km of range, and one-pedal driving makes city traffic almost relaxing.',
    features: ['420 km range', '20-min fast charge', 'One-pedal driving', 'Vehicle-to-home power'],
  },
  {
    id: 'aster-sedan',
    name: 'Aster Meridian',
    category: 'Sedan',
    price: 36700,
    year: 2024,
    horsepower: 201,
    topSpeed: '220 km/h',
    image: car5,
    tagline: 'The sensible choice that never feels boring.',
    description:
      'Meridian is proof that practical does not mean plain — a light, direct steering feel and a cabin built from materials that age well, not just look good on delivery day.',
    features: ['Lane centering', 'Wireless CarPlay', 'Sunroof', '8-year warranty'],
  },
  {
    id: 'ridge-suv',
    name: 'Ridge Overlander',
    category: 'SUV',
    price: 61500,
    year: 2025,
    horsepower: 355,
    topSpeed: '198 km/h',
    image: car6,
    tagline: 'Built to leave the pavement behind.',
    description:
      'Overlander adds locking differentials, a raised air intake, and a reinforced skid plate to the Ridge platform — for people whose weekend plans start where the road ends.',
    features: ['Low-range gearing', 'Locking diffs', 'Roof-rack rated to 150kg', 'Off-road cameras'],
  },
  {
    id: 'quill-sports',
    name: 'Quill Roadster',
    category: 'Sports',
    price: 58900,
    year: 2025,
    horsepower: 388,
    topSpeed: '270 km/h',
    image: car5,
    tagline: 'Top down. Volume up. Nowhere to be.',
    description:
      'A featherweight two-seater with a manual gearbox still available for those who want it. Quill trades back-seat practicality for a driving experience most cars have forgotten how to offer.',
    features: ['6-speed manual', 'Limited-slip diff', 'Removable hardtop', '1,180kg curb weight'],
  },
  {
    id: 'nimbus-ev',
    name: 'Nimbus EV Crossover',
    category: 'Electric',
    price: 39900,
    year: 2026,
    horsepower: 282,
    topSpeed: '190 km/h',
    image: car7,
    tagline: 'Electric, without the compromises.',
    description:
      'Nimbus is our entry-level EV crossover, built for buyers who want the running costs of electric without giving up cargo space or all-weather confidence.',
    features: ['355 km range', 'Heat-pump climate', 'AWD available', 'Over-the-air updates'],
  },
  {
    id: 'harbor-suv',
    name: 'Harbor Bayline SUV',
    category: 'SUV',
    price: 47300,
    year: 2024,
    horsepower: 271,
    topSpeed: '205 km/h',
    image: car3,
    tagline: 'The family SUV that still feels like Harbor.',
    description:
      'Bayline brings Harbor\u2019s signature quiet cabin to a mid-size SUV body, with the same attention to seat comfort on long drives and a cargo area sized for actual strollers, not brochure boxes.',
    features: ['7 seats', 'Foot-activated tailgate', 'Panoramic roof', 'Trailer sway control'],
  },
]

export function getCarById(id) {
  return CARS.find((car) => car.id === id)
}

export function getCarsByCategory(category) {
  if (!category) return CARS
  return CARS.filter(
    (car) => car.category.toLowerCase() === category.toLowerCase()
  )
}