import Item from '@/Components/DashboardItem';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Container, Row, Col } from 'react-bootstrap';
import styled from 'styled-components';
import { usePage } from '@inertiajs/react';

const ProfileCard = styled.div`
    display: flex;
    align-items: center;
    gap: 16px;
    padding: 24px;
    background-color: #343080;
    border-radius: 12px;
    margin-bottom: 24px;
`;

const Avatar = styled.div`
    width: 72px;
    height: 72px;
    border-radius: 50%;
    background: linear-gradient(135deg, #7471c9, #42468b);
    display: flex;
    align-items: center;
    justify-content: center;
    color: #ffffff;
    font-size: 1.6rem;
    font-weight: 700;
`;

const ProfileInfo = styled.div`
    display: flex;
    flex-direction: column;
    gap: 4px;
`;

const ProfileName = styled.span`
    color: #ffffff;
    font-size: 1.2rem;
    font-weight: 600;
`;

const ProfileAbout = styled.p`
    margin: 4px 0 0 0;
    color: rgba(255, 255, 255, 0.75);
    font-size: 0.95rem;
    line-height: 1.5;
    max-width: 520px;
`;

const stats = [
    {
        title: 'Posts',
        number: 8,
        description: 'Articles this member has published.',
    },
    {
        title: 'Comments',
        number: 24,
        description: 'Conversations they have joined.',
    },
    {
        title: 'Likes',
        number: 91,
        description: 'Helpful reactions received.',
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

export default function User() {
    const user = usePage().props.auth.user;

    return (
        <AuthenticatedLayout
            title="Your profile"
            subtitle="A quick look at your activity on Serenity."
        >
            <ProfileCard>
                <Avatar>{getInitials(user?.name)}</Avatar>
                <ProfileInfo>
                    <ProfileName>{user?.name}</ProfileName>
                    <ProfileEmail style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.9rem' }}>
                        {user?.email}
                    </ProfileEmail>
                </ProfileInfo>
            </ProfileCard>

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
        </AuthenticatedLayout>
    );
}
