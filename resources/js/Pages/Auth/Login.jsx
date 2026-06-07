import Checkbox from '@/Components/Checkbox';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import GuestLayout from '@/Layouts/GuestLayout';
import { Head, Link, useForm } from '@inertiajs/react';
import styled from 'styled-components';

const Form = styled.form`
    display: flex;
    flex-direction: column;
    margin: 8px 0;
    padding: 0;
`;

const Field = styled.div`
    margin-bottom: 18px;

    &:last-of-type {
        margin-bottom: 0;
    }
`;

const Row = styled.div`
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 12px;
    margin-top: 12px;

    & > a {
        margin-right: auto;
    }
`;

const RememberRow = styled.label`
    display: flex;
    align-items: center;
    gap: 8px;
    margin: 6px 0 18px 0;
    color: rgba(255, 255, 255, 0.85);
    font-size: 0.9rem;
    cursor: pointer;
`;

const InlineLink = styled(Link)`
    color: rgba(255, 255, 255, 0.85);
    font-size: 0.85rem;
    text-decoration: underline;
    margin-right: auto;
    &:hover { opacity: 0.85; }
`;

export default function Login({ status, canResetPassword }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: '',
        password: '',
        remember: false,
    });

    const submit = (e) => {
        e.preventDefault();
        post(route('login'), {
            onFinish: () => reset('password'),
        });
    };

    return (
        <GuestLayout
            title="Welcome back"
            subtitle="Sign in to continue your wellness journey"
        >
            <Head title="Log in" />

            {status && (
                <div style={{ marginBottom: 16, color: '#a5d6a7', fontSize: '0.9rem' }}>
                    {status}
                </div>
            )}

            <Form onSubmit={submit}>
                <Field>
                    <InputLabel htmlFor="email" value="Email" />
                    <TextInput
                        id="email"
                        type="email"
                        name="email"
                        value={data.email}
                        className="block w-full"
                        autoComplete="username"
                        isFocused={true}
                        onChange={(e) => setData('email', e.target.value)}
                    />
                    <InputError message={errors.email} />
                </Field>

                <Field>
                    <InputLabel htmlFor="password" value="Password" />
                    <TextInput
                        id="password"
                        type="password"
                        name="password"
                        value={data.password}
                        className="block w-full"
                        autoComplete="current-password"
                        onChange={(e) => setData('password', e.target.value)}
                    />
                    <InputError message={errors.password} />
                </Field>

                <RememberRow>
                    <Checkbox
                        name="remember"
                        checked={data.remember}
                        onChange={(e) => setData('remember', e.target.checked)}
                    />
                    <span>Remember me</span>
                </RememberRow>

                <Row>
                    {canResetPassword && (
                        <InlineLink href={route('password.request')}>
                            Forgot your password?
                        </InlineLink>
                    )}
                    <PrimaryButton disabled={processing}>Log in</PrimaryButton>
                </Row>
            </Form>
        </GuestLayout>
    );
}
