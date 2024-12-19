import Navbar from "../components/Navbar";
import ProductCard from "../components/ProductCard";
import "../scss/pages/product-page.scss";
import "../scss/components/Product-card.scss";

function ProductPage() {
  const plantCollections = {
    //Ensure new collections are written in camelcase
    airPurifyingPlants: [
      {
        id: 1,
        name: "Lyrata Branched",
        src: "https://plnts.com/_next/image?url=https%3A%2F%2Fwebshop.plnts.com%2Fmedia%2Fcatalog%2Fproduct%2Fcache%2Faa5d334f459227518b6c3cf7ea9d29ed%2Fp%2Fl%2Fpl.xxl.001-1-0406.jpg&w=640&q=80",
        alt: "Image of Lyrata Branched",
      },
      {
        id: 2,
        name: "Bird of Paradise",
        src: "https://plnts.com/_next/image?url=https%3A%2F%2Fwebshop.plnts.com%2Fmedia%2Fcatalog%2Fproduct%2Fcache%2Faa5d334f459227518b6c3cf7ea9d29ed%2Fp%2Fl%2Fpl.xl.005-1-0106.jpg&w=640&q=80",
        alt: "Image of Bird of Paradise plant",
      },
      {
        id: 3,
        name: "White Joy",
        src: "https://plnts.com/_next/image?url=https%3A%2F%2Fwebshop.plnts.com%2Fmedia%2Fcatalog%2Fproduct%2Fcache%2Faa5d334f459227518b6c3cf7ea9d29ed%2Fp%2Fl%2Fpl.m.137-1-0106.jpg&w=520&q=80",
        alt: "Image of White Joy plant",
      },
      {
        id: 4,
        name: "Snake Plant",
        src: "https://plnts.com/_next/image?url=https%3A%2F%2Fwebshop.plnts.com%2Fmedia%2Fcatalog%2Fproduct%2Fcache%2Faa5d334f459227518b6c3cf7ea9d29ed%2Fp%2Fl%2Fpl.l.005-1-0106.jpg&w=520&q=80",
        alt: "Image of snake plant",
      },
      {
        id: 5,
        name: "Oxalis Tuber",
        src: "https://plnts.com/_next/image?url=https%3A%2F%2Fwebshop.plnts.com%2Fmedia%2Fcatalog%2Fproduct%2Fcache%2Faa5d334f459227518b6c3cf7ea9d29ed%2Fp%2Fl%2Fpl.s.m.081-6.jpg&w=520&q=80",
        alt: "Image of Oxalis Tuber",
      },
      {
        id: 6,
        name: "Insigne",
        src: "https://plnts.com/_next/image?url=https%3A%2F%2Fwebshop.plnts.com%2Fmedia%2Fcatalog%2Fproduct%2Fcache%2Faa5d334f459227518b6c3cf7ea9d29ed%2Fp%2Fl%2Fpl.l.031-1-0106.jpg&w=520&q=80",
        alt: "Image of Insigne plant",
      },
    ],
    easyHouseplants: [
      {
        id: 7,
        name: "Lyrata Branched",
        src: "https://plnts.com/_next/image?url=https%3A%2F%2Fwebshop.plnts.com%2Fmedia%2Fcatalog%2Fproduct%2Fcache%2Faa5d334f459227518b6c3cf7ea9d29ed%2Fp%2Fl%2Fpl.xxl.001-1-0406.jpg&w=640&q=80",
        alt: "Image of Lyrata Branched",
      },
      {
        id: 8,
        name: "Bird of Paradise",
        src: "https://plnts.com/_next/image?url=https%3A%2F%2Fwebshop.plnts.com%2Fmedia%2Fcatalog%2Fproduct%2Fcache%2Faa5d334f459227518b6c3cf7ea9d29ed%2Fp%2Fl%2Fpl.xl.005-1-0106.jpg&w=640&q=80",
        alt: "Image of Bird of Paradise plant",
      },
      {
        id: 9,
        name: "Snake Plant",
        src: "https://plnts.com/_next/image?url=https%3A%2F%2Fwebshop.plnts.com%2Fmedia%2Fcatalog%2Fproduct%2Fcache%2Faa5d334f459227518b6c3cf7ea9d29ed%2Fp%2Fl%2Fpl.l.005-1-0106.jpg&w=520&q=80",
        alt: "Image of snake plant",
      },
    ],
    shadePlants: [
      {
        id: 10,
        name: "Insigne",
        src: "https://plnts.com/_next/image?url=https%3A%2F%2Fwebshop.plnts.com%2Fmedia%2Fcatalog%2Fproduct%2Fcache%2Faa5d334f459227518b6c3cf7ea9d29ed%2Fp%2Fl%2Fpl.l.031-1-0106.jpg&w=520&q=80",
        alt: "Image of Insigne plant",
      },
    ],
  };

  const formatCollectionName = (name) => {
    return name
      .replace(/([A-Z])/g, " $1")
      .replace(/^./, (str) => str.toUpperCase());
  };

  return (
    <>
      <Navbar />
      {Object.entries(plantCollections).map(([collectionName, plants]) => {
        return (
          <section className="product-page__collection" key={collectionName}>
            <h1 className="product-page__collection-title">
              {formatCollectionName(collectionName)}
            </h1>
            <div className="product-card__grid">
              {plants.map((plant) => (
                <ProductCard key={plant.id} plant={plant} />
              ))}
            </div>
          </section>
        );
      })}
    </>
  );
}

export default ProductPage;
