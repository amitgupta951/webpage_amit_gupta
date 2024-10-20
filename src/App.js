import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_HOMEPAGE_DATA } from './graphql/queries';
import Banner from './components/Banner';
import AboutSection from './components/AboutSection';
import TopNav from './components/TopNav';
import Footer from './components/Footer';

const App = () => {
  const { loading, error, data } = useQuery(GET_HOMEPAGE_DATA);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const homepageData = data.pages.nodes[0].homepage;

  return (
    <div className="App">
            <div>
      <TopNav/>
      <div style={{ paddingRight: '16px' }}>
      </div>
      <Banner banners={homepageData.banners} />

      {/* About Section */}
      <AboutSection about={homepageData} />
      <Footer />
    </div>
      
    </div>
  );
};

export default App;
