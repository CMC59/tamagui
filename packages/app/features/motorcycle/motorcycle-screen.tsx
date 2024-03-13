import { YStack, Text, Card } from "tamagui";
import { Button, Paragraph, ScrollView, ListItem } from '@my/ui'
import React from 'react'
import { useQuery } from "@tanstack/react-query";
import { BadgeEuro } from "@tamagui/lucide-icons";
import {useEmoji} from "../../hook/useEmoji";

async function fetchData() {
  const result = await fetch(`https://emojihub.yurace.pro/api/all`);
  const json = await result.json();
  return json.results;
}

export default function MotorcycleScreen() {

  const { isLoading, isError, data, error } = useEmoji();
    console.log(data)

  React.useEffect(() => {
  },[data])
  console.log('data',data);

  if (isLoading){
    console.log("loading");

    return <Paragraph>Loading...</Paragraph>
  }
  if (isError){
    console.log("error");

    return <Paragraph>Error</Paragraph>
  }

  return (
    <ScrollView>
      <YStack padding={4}>
        {data.map((emoji, index) => (
          <Card key={index} borderWidth={1} padding={14} margin={20}>
            <Paragraph fw="bold" fontSize="lg">Name: {emoji.name}</Paragraph>
            <Paragraph>Category: {emoji.category}</Paragraph>
            <Paragraph>Group: {emoji.group}</Paragraph>
            <Text>Unicode Code: {emoji.unicode}</Text>
          </Card>
        ))}
      </YStack>
    </ScrollView>
  );
}