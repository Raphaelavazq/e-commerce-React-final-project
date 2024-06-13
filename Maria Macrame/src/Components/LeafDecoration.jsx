import leaf1 from '../assets/leaf1.png';
import leaf2 from '../assets/leaf2.png';

const LeafDecoration = () => {
  return (
    <div className="relative">
      <div
        className="absolute z-20 transform -translate-x-1/2 -translate-y-1/2"
        style={{ top: '60%', left: '10%' }}
      >
        <img
          src={leaf1}
          alt="Leaf Decoration 1"
          className="w-32 h-32 md:w-60 md:h-80"
        />
      </div>
      <div
        className="absolute z-20 transform translate-x-1/2 -translate-y-1/2"
        style={{ top: '40%', right: '10%' }}
      >
        <img
          src={leaf2}
          alt="Leaf Decoration 2"
          className="w-32 h-32 md:w-60 md:h-80"
        />
      </div>
    </div>
  );
};

export default LeafDecoration;