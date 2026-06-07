import Item from '@/Components/DashboardItem';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Container, Row, Col } from 'react-bootstrap';
import styled from 'styled-components';
import { usePage } from '@inertiajs/react';
import meditationImg from '../../images/meditation.svg';
import brainImg from '../../images/brain.svg';
import heartImg from '../../images/heart.svg';
import PostCard from '@/Components/post-card';

const SectionTitle = styled.h2`
    margin: 24px 0 16px 0;
    color: rgba(255, 255, 255, 0.95);
    font-size: 1.25rem;
    font-weight: 600;
`;

const ProfileCard = styled.div`
    display: flex;
    align-items: center;
    gap: 16px;
    padding: 20px;
    background-color: #343080;
    border-radius: 12px;
    margin-bottom: 24px;
`;

const Avatar = styled.div`
    width: 64px;
    height: 64px;
    border-radius: 50%;
    background: linear-gradient(135deg, #7471c9, #42468b);
    display: flex;
    align-items: center;
    justify-content: center;
    color: #ffffff;
    font-size: 1.5rem;
    font-weight: 700;
`;

const ProfileInfo = styled.div`
    display: flex;
    flex-direction: column;
    gap: 4px;
`;

const ProfileName = styled.span`
    color: #ffffff;
    font-size: 1.1rem;
    font-weight: 600;
`;

const ProfileEmail = styled.span`
    color: rgba(255, 255, 255, 0.7);
    font-size: 0.9rem;
`;

const stats = [
    {
        title: 'Posts',
        number: 12,
        description: 'Articles you have published on Serenity.',
    },
    {
        title: 'Comments',
        number: 48,
        description: 'Conversations you have started with the community.',
    },
    {
        title: 'Likes',
        number: 132,
        description: 'Readers who appreciated your contributions.',
    },
];

const recentPosts = [
    {
        title: 'The Art of Mindful Meditation',
        subtitleText: 'Discover simple techniques to quiet the mind, ease stress, and find inner peace through a daily practice.',
        imageSrc: meditationImg,
    },
    {
        title: 'Understanding Your Mind',
        subtitleText: 'Explore how your brain works and learn practical neuroscience tips to sharpen focus and balance emotions.',
        imageSrc: brainImg,
    },
    {
        title: 'Healing the Heart',
        subtitleText: 'A gentle guide to processing emotions, building self-compassion, and nurturing your inner well-being.',
        imageSrc: heartImg,
    },
];

function getInitials(name) {
    if (!name) return '?';
    return name
        .split(' ')
        .map((part) => part[0])
        .slice(0, 2)
        .join('')
        .toUpperCase();
}

export default function Dashboard() {
    const user = usePage().props.auth.user;

    return (
        <AuthenticatedLayout
            title={`Welcome back, ${user?.name ?? 'friend'}`}
            subtitle="Here is a snapshot of your activity and recent reads."
        >
            <ProfileCard>
                <Avatar>{getInitials(user?.name)}</Avatar>
                <ProfileInfo>
                    <ProfileName>{user?.name}</ProfileName>
                    <ProfileEmail>{user?.email}</ProfileEmail>
                </ProfileInfo>
            </ProfileCard>

            <SectionTitle>Your statistics</SectionTitle>
            <Row className="row">
                {stats.map((s) => (
                    <Col key={s.title} xxl={4} md={6} style={{ marginBottom: 16 }}>
                        <Item
                            title={s.title}
                            number={s.number}
                            description={s.description}
                        />
                    </Col>
                ))}
            </Row>

            <SectionTitle>Recommended for you</SectionTitle>
            <Row className="row">
                {recentPosts.map((p) => (
                    <Col key={p.title} xxl={4} md={6} style={{ marginBottom: 16 }}>
                        <PostCard
                            titleText={p.title}
                            subtitleText={p.subtitleText}
                            imageSrc={p.imageSrc}
                        />
                    </Col>
                ))}
            </Row>
        </AuthenticatedLayout>
    );
}
