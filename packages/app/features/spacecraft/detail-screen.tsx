import { Button, Paragraph, YStack, ScrollView, ListItem, Card, Spinner } from '@my/ui'
import React from 'react'
import { useQuery } from "@tanstack/react-query";
import { Airplay, BadgeEuro } from '@tamagui/lucide-icons';


async function fetchData() {
  const result = await fetch(`https://swapi.py4e.com/api/starships/`);
  const json = await result.json();
  return json.results;
}

export function StarshipFeedScreen() {
  const { isLoading, isError, data } = useQuery({ queryKey: ["starships"], queryFn: fetchData });

  React.useEffect(() => {
    console.log('data', data);
  }, [data]);

  if (isLoading) {
    console.log("loading");
    return (
    <YStack s={4} padding={4}>
    <Spinner size="large" color="$purple10" />
    </YStack>
    )
  }
  
  if (isError) {
    console.log("error");
    return <Paragraph>Error</Paragraph>;
  }

  return (
    <ScrollView>
      <YStack s={4} padding={4}>
        {data.map((starship, index) => (
          <Card key={index} br="md" borderWidth={1} padding={14} margin={20}>
            <Paragraph fw="bold" fontSize="lg">Name: {starship.name}</Paragraph>
            <Paragraph>Model: {starship.model}</Paragraph>
            <Paragraph>Manufacturer: {starship.manufacturer}</Paragraph>
            <Paragraph>Hyperdrive Rating: {starship.hyperdrive_rating}</Paragraph>
            <Paragraph>Cost in Credits: {starship.cost_in_credits}</Paragraph>
            {/* Render other properties as needed */}
            <Button bc="#6750a4" color="white" icon={<BadgeEuro size="$3" />}>
            Buy it now !
      </Button>
          </Card>
        ))}
      </YStack>
    </ScrollView>
  );
}

