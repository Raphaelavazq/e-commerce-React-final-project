import spiderPlant from '../assets/spider-plant.png';
import monstera from '../assets/monstera.png';
import fiddleLeafFig from '../assets/fiddle-leaf-fig.png';
import snakePlant from '../assets/snake-plant.png';
import aloeVera from '../assets/aloe-vera.png';
import peaceLily from '../assets/peace-lily.png';
import rosemary from '../assets/rosemary.png';
import lavender from '../assets/lavender.png';
import basil from '../assets/basil.png';
import mint from '../assets/mint.png';
import jadePlant from '../assets/jade-plant.png';
import cactus from '../assets/cactus.png';
import plantFertilizer from '../assets/plant-fertilizer.png';
import pruningShears from '../assets/pruning-shears.png';
import wateringCan from '../assets/watering-can.png';
import pottingSoil from '../assets/potting-soil.png';
import plantStand from '../assets/plant-stand.png';
import macramePlantHanger from '../assets/macrame-plant-hanger.png';
import plantLabels from '../assets/plant-labels.png';
import gardenGloves from '../assets/garden-gloves.png';


const products = [
  {
    id: 1,
    name: 'Spider Plant',
    category: 'Indoor',
    price: 25,
    description: 'An easy-to-grow plant that thrives in a variety of conditions.',
    careLevel: 'Easy',
    light: 'Bright Indirect Light',
    water: 'Every 1-2 weeks',
    petFriendly: true,
    image: spiderPlant,
  },
  {
    id: 2,
    name: 'Monstera',
    category: 'Indoor',
    price: 45,
    description: 'A tropical plant with large, split leaves.',
    careLevel: 'Medium',
    light: 'Bright Indirect Light',
    water: 'Every 1-2 weeks',
    petFriendly: false,
    image: monstera,
  },
  {
    id: 3,
    name: 'Fiddle Leaf Fig',
    category: 'Indoor',
    price: 50,
    description: 'A popular houseplant with large, glossy leaves.',
    careLevel: 'Medium',
    light: 'Bright Indirect Light',
    water: 'Every 1-2 weeks',
    petFriendly: false,
    image: fiddleLeafFig,
  },
  {
    id: 4,
    name: 'Snake Plant',
    category: 'Indoor',
    price: 30,
    description: 'A hardy plant that can tolerate low light and infrequent watering.',
    careLevel: 'Easy',
    light: 'Low to Bright Indirect Light',
    water: 'Every 2-3 weeks',
    petFriendly: false,
    image: snakePlant,
  },
  {
    id: 5,
    name: 'Aloe Vera',
    category: 'Indoor',
    price: 20,
    description: 'A succulent plant known for its medicinal properties.',
    careLevel: 'Easy',
    light: 'Bright Indirect Light',
    water: 'Every 3 weeks',
    petFriendly: false,
    image: aloeVera,
  },
  {
    id: 6,
    name: 'Peace Lily',
    category: 'Indoor',
    price: 35,
    description: 'A beautiful flowering plant that can thrive in low light.',
    careLevel: 'Easy',
    light: 'Low to Bright Indirect Light',
    water: 'Every 1-2 weeks',
    petFriendly: false,
    image: peaceLily,
  },
  {
    id: 7,
    name: 'Rosemary',
    category: 'Outdoor',
    price: 15,
    description: 'A fragrant herb that can be used in cooking.',
    careLevel: 'Easy',
    light: 'Full Sun',
    water: 'Every 1-2 weeks',
    petFriendly: true,
    image: rosemary,
  },
  {
    id: 8,
    name: 'Lavender',
    category: 'Outdoor',
    price: 18,
    description: 'A fragrant flowering plant that attracts pollinators.',
    careLevel: 'Easy',
    light: 'Full Sun',
    water: 'Every 1-2 weeks',
    petFriendly: true,
    image: lavender,
  },
  {
    id: 9,
    name: 'Basil',
    category: 'Outdoor',
    price: 12,
    description: 'A popular herb used in cooking.',
    careLevel: 'Easy',
    light: 'Full Sun',
    water: 'Every 1-2 weeks',
    petFriendly: true,
    image: basil,
  },
  {
    id: 10,
    name: 'Mint',
    category: 'Outdoor',
    price: 10,
    description: 'A fast-growing herb with a refreshing scent.',
    careLevel: 'Easy',
    light: 'Full Sun to Partial Shade',
    water: 'Every 1-2 weeks',
    petFriendly: true,
    image: mint,
  },
  {
    id: 11,
    name: 'Jade Plant',
    category: 'Outdoor',
    price: 25,
    description: 'A succulent plant with thick, glossy leaves.',
    careLevel: 'Easy',
    light: 'Full Sun to Partial Shade',
    water: 'Every 2-3 weeks',
    petFriendly: false,
    image: jadePlant,
  },
  {
    id: 12,
    name: 'Cactus',
    category: 'Outdoor',
    price: 22,
    description: 'A low-maintenance plant that thrives in dry conditions.',
    careLevel: 'Easy',
    light: 'Full Sun',
    water: 'Every 3-4 weeks',
    petFriendly: false,
    image: cactus,
  },
  {
    id: 13,
    name: 'Plant Fertilizer',
    category: 'Plant Care',
    price: 15,
    description: 'A balanced fertilizer to promote plant growth.',
    careLevel: 'Easy',
    light: 'N/A',
    water: 'N/A',
    petFriendly: false,
    image: plantFertilizer,
  },
  {
    id: 14,
    name: 'Pruning Shears',
    category: 'Plant Care',
    price: 20,
    description: 'High-quality shears for pruning plants.',
    careLevel: 'Easy',
    light: 'N/A',
    water: 'N/A',
    petFriendly: true,
    image: pruningShears,
  },
  {
    id: 15,
    name: 'Watering Can',
    category: 'Plant Care',
    price: 18,
    description: 'A stylish watering can for indoor and outdoor use.',
    careLevel: 'Easy',
    light: 'N/A',
    water: 'N/A',
    petFriendly: true,
    image: wateringCan,
  },
  {
    id: 16,
    name: 'Potting Soil',
    category: 'Plant Care',
    price: 10,
    description: 'Nutrient-rich soil for potting plants.',
    careLevel: 'Easy',
    light: 'N/A',
    water: 'N/A',
    petFriendly: true,
    image: pottingSoil,
  },
  {
    id: 17,
    name: 'Plant Stand',
    category: 'Accessories',
    price: 35,
    description: 'A decorative stand to display your plants.',
    careLevel: 'Easy',
    light: 'N/A',
    water: 'N/A',
    petFriendly: true,
    image: plantStand,
  },
  {
    id: 18,
    name: 'Macrame Plant Hanger',
    category: 'Accessories',
    price: 25,
    description: 'A stylish macrame hanger for your plants.',
    careLevel: 'Easy',
    light: 'N/A',
    water: 'N/A',
    petFriendly: true,
    image: macramePlantHanger,
  },
  {
    id: 19,
    name: 'Plant Labels',
    category: 'Accessories',
    price: 10,
    description: 'Labels to help you identify your plants.',
    careLevel: 'Easy',
    light: 'N/A',
    water: 'N/A',
    petFriendly: true,
    image: plantLabels,
  },
  {
    id: 20,
    name: 'Garden Gloves',
    category: 'Accessories',
    price: 12,
    description: 'Protective gloves for gardening.',
    careLevel: 'Easy',
    light: 'N/A',
    water: 'N/A',
    petFriendly: true,
    image: gardenGloves,
  }
];

const categories = [
  { name: 'All plants', href: '/shop/all' },
  { name: 'Indoor', href: '/shop/indoor' },
  { name: 'Outdoor', href: '/shop/outdoor' },
  { name: 'Plant care', href: '/shop/plant-care' },
  { name: 'Accessories', href: '/shop/accessories' },
];

export { products, categories };