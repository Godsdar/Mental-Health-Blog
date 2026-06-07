import { Head, Link } from '@inertiajs/react';
import 'bootstrap/dist/css/bootstrap.min.css';
import PostCard from '../Components/post-card';
import { Container, Row, Col } from 'react-bootstrap'
import Header from '../Components/header';
import Sidebar from '../Components/sidebar';
import { GlobalStyles, colorsPallete, Normalized } from '../global-styles';
import meditationImg from '../../images/meditation.svg';
import brainImg from '../../images/brain.svg';
import heartImg from '../../images/heart.svg';
import sunriseImg from '../../images/sunrise.svg';
import growthImg from '../../images/growth.svg';
import journeyImg from '../../images/journey.svg';
import connectionImg from '../../images/connection.svg';
import moonImg from '../../images/moon.svg';
import wavesImg from '../../images/waves.svg';


function Welcome () {
  return (
    <>
      <Normalized></Normalized>
      <GlobalStyles></GlobalStyles>
      <Container>
        <Row>
          <Col>
            <Header></Header>
          </Col>
        </Row>
        <Row className='row'>
          <Col>
            <PostCard
              titleText="The Art of Mindful Meditation"
              subtitleText="Discover simple techniques to quiet the mind, ease stress, and find inner peace through a daily practice."
              imageSrc={meditationImg}
            />
          </Col>
          <Col>
            <PostCard
              titleText="Understanding Your Mind"
              subtitleText="Explore how your brain works and learn practical neuroscience tips to sharpen focus and balance emotions."
              imageSrc={brainImg}
            />
          </Col>
          <Col>
            <PostCard
              titleText="Healing the Heart"
              subtitleText="A gentle guide to processing emotions, building self-compassion, and nurturing your inner well-being."
              imageSrc={heartImg}
            />
          </Col>
        </Row>
        <Row className='row'>
          <Col>
            <PostCard
              titleText="A New Dawn of Hope"
              subtitleText="Start each day with intention. Learn how small morning rituals can transform your mindset and outlook."
              imageSrc={sunriseImg}
            />
          </Col>
          <Col>
            <PostCard
              titleText="Growing Through Change"
              subtitleText="Embrace personal growth with strategies for building resilience and thriving through life's transitions."
              imageSrc={growthImg}
            />
          </Col>
          <Col>
            <PostCard
              titleText="Your Path to Wellness"
              subtitleText="Every step matters. Find guidance for navigating your unique mental health journey with clarity."
              imageSrc={journeyImg}
            />
          </Col>
        </Row>
        <Row className='row'>
          <Col>
            <PostCard
              titleText="The Power of Connection"
              subtitleText="Strong relationships are key to mental wellness. Learn how to build meaningful, supportive bonds."
              imageSrc={connectionImg}
            />
          </Col>
          <Col>
            <PostCard
              titleText="Restful Nights, Restored Mind"
              subtitleText="Quality sleep is the foundation of mental health. Explore tips for deeper, more restorative rest."
              imageSrc={moonImg}
            />
          </Col>
          <Col>
            <PostCard
              titleText="Riding Life's Waves"
              subtitleText="Build emotional resilience and learn to navigate calm waters and stormy seas with grace."
              imageSrc={wavesImg}
            />
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Welcome
