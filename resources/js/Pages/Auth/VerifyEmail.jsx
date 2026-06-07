import PrimaryButton from '@/Components/PrimaryButton';
import GuestLayout from '@/Layouts/GuestLayout';
import { Head, Link, useForm } from '@inertiajs/react';
import styled from 'styled-components';

const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 16px;
`;

const Description = styled.p`
    margin: 0 0 8px 0;
    color: rgba(255, 255, 255, 0.7);
    font-size: 0.9rem;
    line-height: 1.5;
`;

const Status = styled.div`
    margin-bottom: 8px;
    color: #a5d6a7;
    font-size: 0.9rem;
`;

const Row = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 12px;
    margin-top: 8px;
`;

const InlineLink = styled(Link)`
    color: rgba(255, 255, 255, 0.85);
    font-size: 0.85rem;
    text-decoration: underline;
    &:hover { opacity: 0.85; }
`;

export default function VerifyEmail({ status }) {
    const { post, processing } = useForm({});

    const submit = (e) => {
        e.preventDefault();
        post(route('verification.send'));
    };

    return (
        <GuestLayout
            title="Verify your email"
            subtitle="One more step before you can start exploring Serenity."
        >
            <Head title="Email Verification" />

            <Description>
                Thanks for signing up! Before getting started, could you
                verify your email address by clicking on the link we just
                emailed to you? If you didn't receive the email, we will
                gladly send you another.
            </Description>

            {status === 'verification-link-sent' && (
                <Status>
                    A new verification link has been sent to the email address
                    you provided during registration.
                </Status>
            )}

            <Form onSubmit={submit}>
                <Row>
                    <PrimaryButton disabled={processing}>
                        Resend Verification Email
                    </PrimaryButton>
                    <InlineLink
                        href={route('logout')}
                        method="post"
                        as="button"
                    >
                        Log Out
                    </InlineLink>
                </Row>
            </Form>
        </GuestLayout>
    );
}
