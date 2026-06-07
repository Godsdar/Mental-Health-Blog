import { GlobalStyles, Normalized, colorsPallete } from "@/global-styles";
import Header from "@/Components/header";
import { Container } from "react-bootstrap";
import styled from "styled-components";
import { usePage } from "@inertiajs/react";

const PageWrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  padding: 16px 0;
`;

const HeaderSlot = styled.header`
  width: 100%;
`;

const ContentArea = styled.main`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 40px 16px;
`;

const FormCard = styled.div`
  width: 100%;
  max-width: 420px;
  margin: 0 auto;
  padding: 32px;
  background-color: ${colorsPallete.purple};
  border-radius: 12px;
  box-shadow: 0 4px 18px rgba(0, 0, 0, 0.25);
`;

const FormTitle = styled.h1`
  margin: 0 0 8px 0;
  font-size: 1.75rem;
  font-weight: 600;
  color: ${colorsPallete.white};
`;

const FormSubtitle = styled.p`
  margin: 0 0 24px 0;
  color: ${colorsPallete.font};
  font-size: 0.95rem;
  line-height: 1.4;
`;

export default function GuestLayout({ children, title, subtitle }) {
    const user = usePage().props.auth?.user ?? null;

    return (
        <>
            <GlobalStyles />
            <Normalized />
            <Container>
                <PageWrapper>
                    <HeaderSlot>
                        <Header user={user} />
                    </HeaderSlot>
                    <ContentArea>
                        <FormCard>
                            {title && <FormTitle>{title}</FormTitle>}
                            {subtitle && <FormSubtitle>{subtitle}</FormSubtitle>}
                            {children}
                        </FormCard>
                    </ContentArea>
                </PageWrapper>
            </Container>
        </>
    );
}
