import InputError from '@/Components/InputError';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import GuestLayout from '@/Layouts/GuestLayout';
import { Head, useForm } from '@inertiajs/react';
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

const Row = styled.div`
    display: flex;
    justify-content: flex-end;
    margin-top: 8px;
`;

const Status = styled.div`
    margin-bottom: 16px;
    color: #a5d6a7;
    font-size: 0.9rem;
`;

export default function ForgotPassword({ status }) {
    const { data, setData, post, processing, errors } = useForm({
        email: '',
    });

    const submit = (e) => {
        e.preventDefault();
        post(route('password.email'));
    };

    return (
        <GuestLayout
            title="Forgot your password?"
            subtitle="No worries, we will send you reset instructions."
        >
            <Head title="Forgot Password" />

            <Description>
                Just let us know your email address and we will email you a
                password reset link that will allow you to choose a new one.
            </Description>

            {status && <Status>{status}</Status>}

            <Form onSubmit={submit}>
                <div>
                    <TextInput
                        id="email"
                        type="email"
                        name="email"
                        value={data.email}
                        placeholder="you@example.com"
                        className="block w-full"
                        isFocused={true}
                        onChange={(e) => setData('email', e.target.value)}
                    />
                    <InputError message={errors.email} />
                </div>

                <Row>
                    <PrimaryButton disabled={processing}>
                        Email Password Reset Link
                    </PrimaryButton>
                </Row>
            </Form>
        </GuestLayout>
    );
}
