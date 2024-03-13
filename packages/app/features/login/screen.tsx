import {
  Anchor,
  Button,
  H1,
  Paragraph,
  Separator,
  Sheet,
  useToastController,
  TextArea,
  Input,
  XStack,
  YStack,
} from '@my/ui'
import { ChevronDown, ChevronUp } from '@tamagui/lucide-icons'
import { useState } from 'react'
import { useLink } from 'solito/link'

export default function LoginScreen() {
  const linkProps = useLink({
    href: '/spacecraft',
  })

  return (
    <>
      <YStack f={1} jc="center" ai="center" >
        <XStack f={1} jc="center" ai="center" w="100%" bg="#6750a4">
          <H1 ta="center" col="white">SPACECRAFT</H1>
          </XStack>
          <YStack f={1} jc="center" ai="center" >
          
          <Input size="$3" mb={20} bw={2} bbc="grey" w={250}  defaultValue="User Name" />
          <Input size="$3" mb={100} bw={2} bbc="grey" w={250}  defaultValue="Password" />

          <XStack>
            <Button {...linkProps} size="$4" bg="#6750a4" color="white" w={250}>Login</Button>
          </XStack>
        </YStack>
      </YStack>
    </>

  )
}
