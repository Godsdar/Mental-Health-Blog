import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import DeleteUserForm from './Partials/DeleteUserForm';
import UpdatePasswordForm from './Partials/UpdatePasswordForm';
import UpdateProfileInformationForm from './Partials/UpdateProfileInformationForm';
import styled from 'styled-components';
import { colorsPallete } from '@/global-styles';
import { Container, Row, Col } from 'react-bootstrap';

const SectionCard = styled.div`
    background-color: ${colorsPallete.purple};
    border-radius: 12px;
    padding: 24px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.18);
    margin-bottom: 20px;
`;

export default function Edit({ mustVerifyEmail, status }) {
    return (
        <AuthenticatedLayout
            title="Profile settings"
            subtitle="Manage your account information, password, and sessions."
        >
            <Container fluid style={{ padding: 0 }}>
                <Row>
                    <Col xxl={8}>
                        <SectionCard>
                            <UpdateProfileInformationForm
                                mustVerifyEmail={mustVerifyEmail}
                                status={status}
                            />
                        </SectionCard>

                        <SectionCard>
                            <UpdatePasswordForm />
                        </SectionCard>

                        <SectionCard>
                            <DeleteUserForm />
                        </SectionCard>
                    </Col>
                </Row>
            </Container>
        </AuthenticatedLayout>
    );
}
