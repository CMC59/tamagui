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

export function LoginScreen() {
  const linkProps = useLink({
    href: '/user/spacecraft',
  })

  return (
    <>
      <YStack f={1} jc="center" ai="center" >
        <XStack f={1} jc="center" ai="center" w="100%" bg="#6750a4">
          <H1 ta="center" col="white">SPACECRAFT</H1>
          </XStack>
          <YStack f={1} jc="center" ai="center" >
          
          <Input size="$3" mb={20} bw={2} bbc="grey"/>
          <Input size="$3" mb={100} bw={2} bbc="grey"/>

          <XStack>
            <Button {...linkProps} size="$4" bg="#6750a4" col="white" w={250}>Login</Button>
          </XStack>
        </YStack>
      </YStack>
    </>

  )
}

function SheetDemo() {
  const [open, setOpen] = useState(false)
  const [position, setPosition] = useState(0)
  const toast = useToastController()

  return (
    <>
      <Button
        size="$6"
        icon={open ? ChevronDown : ChevronUp}
        circular
        onPress={() => setOpen((x) => !x)}
      />
      <Sheet
        modal
        animation="medium"
        open={open}
        onOpenChange={setOpen}
        snapPoints={[80]}
        position={position}
        onPositionChange={setPosition}
        dismissOnSnapToBottom
      >
        <Sheet.Overlay animation="lazy" enterStyle={{ opacity: 0 }} exitStyle={{ opacity: 0 }} />
        <Sheet.Frame ai="center" jc="center">
          <Sheet.Handle />
          <Button
            size="$6"
            circular
            icon={ChevronDown}
            onPress={() => {
              setOpen(false)
              toast.show('Sheet closed!', {
                message: 'Just showing how toast works...',
              })
            }}
          />
        </Sheet.Frame>
      </Sheet>
    </>
  )
}
