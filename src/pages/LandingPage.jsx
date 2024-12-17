import "../scss/pages/landing-page.scss";

function LandingPage() {
  return (
    <div className="landing-page">
      <div className="landing-page__left">
        <h1 className="landing-page__title">Welcome to Green Whispers</h1>
        <p className="landing-page__subtitle">Where Every Leaf Tells a Story</p>
        <button>Get Started</button>
      </div>
      <p className="landing-page__right landing-page__text">
        At Green Whispers, we believe every plant tells a story. We connect
        people with the extraordinary green life around them, helping both
        seasoned gardeners and first-time plant parents discover the joy of
        nurturing nature. From tiny succulents to majestic indoor trees, find
        your next botanical companion with us.
      </p>
    </div>
  );
}

export default LandingPage;
