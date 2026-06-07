import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { Transition } from '@headlessui/react';
import { useForm } from '@inertiajs/react';
import { useRef } from 'react';
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

export default function UpdatePasswordForm({ className = '' }) {
    const passwordInput = useRef();
    const currentPasswordInput = useRef();

    const {
        data,
        setData,
        errors,
        put,
        reset,
        processing,
        recentlySuccessful,
    } = useForm({
        current_password: '',
        password: '',
        password_confirmation: '',
    });

    const updatePassword = (e) => {
        e.preventDefault();

        put(route('password.update'), {
            preserveScroll: true,
            onSuccess: () => reset(),
            onError: (errors) => {
                if (errors.password) {
                    reset('password', 'password_confirmation');
                    passwordInput.current.focus();
                }

                if (errors.current_password) {
                    reset('current_password');
                    currentPasswordInput.current.focus();
                }
            },
        });
    };

    return (
        <Section className={className}>
            <Header>
                <SectionTitle>Update Password</SectionTitle>
                <SectionDescription>
                    Ensure your account is using a long, random password to stay
                    secure.
                </SectionDescription>
            </Header>

            <Form onSubmit={updatePassword}>
                <div>
                    <InputLabel
                        htmlFor="current_password"
                        value="Current Password"
                    />
                    <TextInput
                        id="current_password"
                        ref={currentPasswordInput}
                        value={data.current_password}
                        onChange={(e) =>
                            setData('current_password', e.target.value)
                        }
                        type="password"
                        className="block w-full"
                        autoComplete="current-password"
                    />
                    <InputError message={errors.current_password} />
                </div>

                <div>
                    <InputLabel htmlFor="password" value="New Password" />
                    <TextInput
                        id="password"
                        ref={passwordInput}
                        value={data.password}
                        onChange={(e) => setData('password', e.target.value)}
                        type="password"
                        className="block w-full"
                        autoComplete="new-password"
                    />
                    <InputError message={errors.password} />
                </div>

                <div>
                    <InputLabel
                        htmlFor="password_confirmation"
                        value="Confirm Password"
                    />
                    <TextInput
                        id="password_confirmation"
                        value={data.password_confirmation}
                        onChange={(e) =>
                            setData('password_confirmation', e.target.value)
                        }
                        type="password"
                        className="block w-full"
                        autoComplete="new-password"
                    />
                    <InputError
                        message={errors.password_confirmation}
                    />
                </div>

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
