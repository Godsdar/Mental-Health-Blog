import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { Transition } from '@headlessui/react';
import { Link, useForm, usePage } from '@inertiajs/react';
import styled from 'styled-components';
import { colorsPallete } from '@/global-styles';

const Section = styled.section`
    display: flex;
    flex-direction: column;
    gap: 16px;
`;

const Header = styled.header`
    display: flex;
    flex-direction: column;
    gap: 6px;
`;

const SectionTitle = styled.h2`
    margin: 0;
    color: ${colorsPallete.white};
    font-size: 1.15rem;
    font-weight: 600;
`;

const SectionDescription = styled.p`
    margin: 0;
    color: ${colorsPallete.font};
    font-size: 0.9rem;
    line-height: 1.5;
`;

const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 16px;
`;

const Row = styled.div`
    display: flex;
    align-items: center;
    gap: 16px;
    margin-top: 8px;
`;

const SavedText = styled.p`
    color: ${colorsPallete.font};
    font-size: 0.85rem;
`;

const InlineLink = styled(Link)`
    color: ${colorsPallete.lighterPurple};
    font-size: 0.85rem;
    text-decoration: underline;
    &:hover { opacity: 0.85; }
`;

const VerificationText = styled.p`
    margin: 4px 0 0 0;
    color: ${colorsPallete.font};
    font-size: 0.9rem;
`;

const SuccessText = styled.div`
    margin-top: 4px;
    color: #a5d6a7;
    font-size: 0.9rem;
`;

export default function UpdateProfileInformation({
    mustVerifyEmail,
    status,
    className = '',
}) {
    const user = usePage().props.auth.user;

    const { data, setData, patch, errors, processing, recentlySuccessful } =
        useForm({
            name: user.name,
            email: user.email,
        });

    const submit = (e) => {
        e.preventDefault();
        patch(route('profile.update'));
    };

    return (
        <Section className={className}>
            <Header>
                <SectionTitle>Profile Information</SectionTitle>
                <SectionDescription>
                    Update your account's profile information and email address.
                </SectionDescription>
            </Header>

            <Form onSubmit={submit}>
                <div>
                    <InputLabel htmlFor="name" value="Name" />
                    <TextInput
                        id="name"
                        className="block w-full"
                        value={data.name}
                        onChange={(e) => setData('name', e.target.value)}
                        required
                        isFocused
                        autoComplete="name"
                    />
                    <InputError message={errors.name} />
                </div>

                <div>
                    <InputLabel htmlFor="email" value="Email" />
                    <TextInput
                        id="email"
                        type="email"
                        className="block w-full"
                        value={data.email}
                        onChange={(e) => setData('email', e.target.value)}
                        required
                        autoComplete="username"
                    />
                    <InputError message={errors.email} />
                </div>

                {mustVerifyEmail && user.email_verified_at === null && (
                    <div>
                        <VerificationText>
                            Your email address is unverified.{' '}
                            <InlineLink
                                href={route('verification.send')}
                                method="post"
                                as="button"
                            >
                                Click here to re-send the verification email.
                            </InlineLink>
                        </VerificationText>

                        {status === 'verification-link-sent' && (
                            <SuccessText>
                                A new verification link has been sent to your
                                email address.
                            </SuccessText>
                        )}
                    </div>
                )}

                <Row>
                    <PrimaryButton disabled={processing}>Save</PrimaryButton>

                    <Transition
                        show={recentlySuccessful}
                        enter="transition ease-in-out"
                        enterFrom="opacity-0"
                        leave="transition ease-in-out"
                        leaveTo="opacity-0"
                    >
                        <SavedText>Saved.</SavedText>
                    </Transition>
                </Row>
            </Form>
        </Section>
    );
}
