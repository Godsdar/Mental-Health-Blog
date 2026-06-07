import DangerButton from '@/Components/DangerButton';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import Modal from '@/Components/Modal';
import SecondaryButton from '@/Components/SecondaryButton';
import TextInput from '@/Components/TextInput';
import { useForm } from '@inertiajs/react';
import { useRef, useState } from 'react';
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

const ModalForm = styled.form`
    display: flex;
    flex-direction: column;
    gap: 16px;
    padding: 24px;
`;

const ModalTitle = styled.h2`
    margin: 0;
    color: ${colorsPallete.white};
    font-size: 1.15rem;
    font-weight: 600;
`;

const ModalDescription = styled.p`
    margin: 0;
    color: ${colorsPallete.font};
    font-size: 0.9rem;
    line-height: 1.5;
`;

const ModalActions = styled.div`
    display: flex;
    justify-content: flex-end;
    gap: 12px;
    margin-top: 8px;
`;

const Field = styled.div`
    display: flex;
    flex-direction: column;
    gap: 6px;
`;

export default function DeleteUserForm({ className = '' }) {
    const [confirmingUserDeletion, setConfirmingUserDeletion] = useState(false);
    const passwordInput = useRef();

    const {
        data,
        setData,
        delete: destroy,
        processing,
        reset,
        errors,
        clearErrors,
    } = useForm({
        password: '',
    });

    const confirmUserDeletion = () => {
        setConfirmingUserDeletion(true);
    };

    const deleteUser = (e) => {
        e.preventDefault();

        destroy(route('profile.destroy'), {
            preserveScroll: true,
            onSuccess: () => closeModal(),
            onError: () => passwordInput.current.focus(),
            onFinish: () => reset(),
        });
    };

    const closeModal = () => {
        setConfirmingUserDeletion(false);
        clearErrors();
        reset();
    };

    return (
        <Section className={className}>
            <Header>
                <SectionTitle>Delete Account</SectionTitle>
                <SectionDescription>
                    Once your account is deleted, all of its resources and data
                    will be permanently deleted. Before deleting your account,
                    please download any data or information that you wish to
                    retain.
                </SectionDescription>
            </Header>

            <DangerButton onClick={confirmUserDeletion}>
                Delete Account
            </DangerButton>

            <Modal show={confirmingUserDeletion} onClose={closeModal}>
                <ModalForm onSubmit={deleteUser}>
                    <ModalTitle>
                        Are you sure you want to delete your account?
                    </ModalTitle>
                    <ModalDescription>
                        Once your account is deleted, all of its resources and
                        data will be permanently deleted. Please enter your
                        password to confirm you would like to permanently delete
                        your account.
                    </ModalDescription>

                    <Field>
                        <InputLabel
                            htmlFor="password"
                            value="Password"
                        />
                        <TextInput
                            id="password"
                            type="password"
                            name="password"
                            ref={passwordInput}
                            value={data.password}
                            onChange={(e) =>
                                setData('password', e.target.value)
                            }
                            className="block w-full"
                            isFocused
                            placeholder="Password"
                        />
                        <InputError message={errors.password} />
                    </Field>

                    <ModalActions>
                        <SecondaryButton onClick={closeModal}>
                            Cancel
                        </SecondaryButton>
                        <DangerButton disabled={processing}>
                            Delete Account
                        </DangerButton>
                    </ModalActions>
                </ModalForm>
            </Modal>
        </Section>
    );
}
