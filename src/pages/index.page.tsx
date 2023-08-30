import Header from '@/components/header';

export default function Home() {
  return (
    <main>
      <Header />
      <div className="landing">
        <div id="stars" />
        <div id="stars2" />
        <div id="stars3" />

        <div className="landing__intro">
          <h3 className="landing__words">Meet your</h3>
          <h1 className="landing__hero">transaction hero</h1>
          <h3 className="landing__words">Saving the day, one transaction at a time, with epic gas fee refunds!</h3>
        </div>
      </div>
    </main>
  );
}
