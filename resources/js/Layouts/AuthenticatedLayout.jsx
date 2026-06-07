import { GlobalStyles, Normalized, colorsPallete } from "@/global-styles";
import Header from "@/Components/header";
import Sidebar from "@/Components/sidebar";
import { Container, Row, Col } from "react-bootstrap";
import styled from "styled-components";
import { usePage } from "@inertiajs/react";

const PageWrapper = styled.div`
  min-height: 100vh;
  padding: 24px 0;
`;

const SidebarCol = styled(Col)`
  display: flex;
`;

const ContentCol = styled(Col)`
  padding-top: 8px;
`;

const PageTitle = styled.h1`
  margin: 0 0 20px 0;
  font-size: 1.75rem;
  font-weight: 600;
  color: ${colorsPallete.white};
`;

const Subtitle = styled.p`
  margin: -12px 0 24px 0;
  color: ${colorsPallete.font};
  font-size: 0.95rem;
`;

export default function AuthenticatedLayout({ title, subtitle, children }) {
    const user = usePage().props.auth.user;

    return (
        <>
            <GlobalStyles />
            <Normalized />
            <Container>
                <PageWrapper>
                    <Row>
                        <Col>
                            <Header user={user} />
                        </Col>
                    </Row>
                    <Row>
                        <SidebarCol xxl={2} md={3}>
                            <Sidebar />
                        </SidebarCol>
                        <ContentCol>
                            {title && <PageTitle>{title}</PageTitle>}
                            {subtitle && <Subtitle>{subtitle}</Subtitle>}
                            {children}
                        </ContentCol>
                    </Row>
                </PageWrapper>
            </Container>
        </>
    );
}
