'use client'
import { useState, useEffect } from 'react'
import {
    DialogContent,
    DialogHeader,
    DialogBody,
    DialogFooter,
    Button,
    Input,
    DialogRoot,
    DialogTitle,
    DialogBackdrop,
    DialogPositioner
} from '@chakra-ui/react'

import { redirect } from 'next/navigation'
import { Field } from '../chakraUI/field'
import { CloseButton } from '../chakraUI/close-button'

enum SubmitButtonText {
    UPDATE = 'Update',
    UPDATED = 'Updated!',
    ENTER = 'Enter!'
}

export default function UserInfoModal() {
    const [isDialogOpen, setDialogOpen] = useState(false)
    const [username, setUsername] = useState('')
    const [jobTitle, setJobTitle] = useState('')
    const [saveBtnText, setSaveBtnText] = useState<SubmitButtonText>(SubmitButtonText.ENTER)
    const savedUsername = localStorage.getItem('username')
    const savedJobTitle = localStorage.getItem('jobTitle')
    const hasRequiredInfo = savedUsername && savedJobTitle

    useEffect(() => {
        if (!hasRequiredInfo) setDialogOpen(true)
        if (savedUsername && savedJobTitle) {
            setUsername(savedUsername)
            setJobTitle(savedJobTitle)
            setSaveBtnText(SubmitButtonText.UPDATE)
            setDialogOpen(false)
        }
    }, [])

    const handleSubmit = () => {
        localStorage.setItem('username', username)
        localStorage.setItem('jobTitle', jobTitle)
        setSaveBtnText(SubmitButtonText.UPDATED)
        if (!hasRequiredInfo) {
            setDialogOpen(false)
            setSaveBtnText(SubmitButtonText.UPDATE)
        }
        redirect('/page/1')
    }
    const handleClose = () => {
        if (savedUsername && savedJobTitle) {
            setUsername(savedUsername)
            setJobTitle(savedJobTitle)
        }
        setSaveBtnText(SubmitButtonText.UPDATE)
        setDialogOpen(false)
    }

    return (
        <DialogRoot open={isDialogOpen}>
            <DialogBackdrop />
            <Button variant="solid" colorPalette="blue" onClick={() => setDialogOpen(true)}>
                My Info
            </Button>

            <DialogPositioner>
                <DialogContent position="absolute" mt="50" color={'white'} width="100%">
                    <DialogHeader
                        display="flex"
                        flexDirection="row"
                        justifyContent="space-between"
                        alignContent="center"
                    >
                        <DialogTitle alignContent="center">
                            {hasRequiredInfo
                                ? 'Update your details'
                                : 'Please enter your info below to access this awesome site'}
                        </DialogTitle>
                        {hasRequiredInfo && <CloseButton variant="plain" onClick={handleClose} />}
                    </DialogHeader>
                    <DialogBody>
                        <Field label="Username" errorText="Username can not be empty." required>
                            <Input
                                placeholder="Username"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                            />
                        </Field>
                        <Field label="Job Title" errorText="Job title can not be empty." required mt="5">
                            <Input
                                placeholder="Job Title"
                                value={jobTitle}
                                onChange={(e) => setJobTitle(e.target.value)}
                            />
                        </Field>
                    </DialogBody>
                    <DialogFooter>
                        {hasRequiredInfo && (
                            <Button variant="outline" onClick={handleClose}>
                                Cancel
                            </Button>
                        )}
                        <Button onClick={handleSubmit} disabled={!username || !jobTitle}>
                            {saveBtnText}
                        </Button>
                    </DialogFooter>
                </DialogContent>
            </DialogPositioner>
        </DialogRoot>
    )
}
