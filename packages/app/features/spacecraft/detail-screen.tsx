import { Button, Paragraph, YStack, ScrollView, ListItem, Card } from '@my/ui'
import React from 'react'
import { useQuery } from "@tanstack/react-query";


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
    return <Paragraph>Loading...</Paragraph>;
  }
  
  if (isError) {
    console.log("error");
    return <Paragraph>Error</Paragraph>;
  }

  return (
    <ScrollView>
      <YStack s={4} padding={4}>
        {data.map((starship, index) => (
          <Card key={index} br="md" borderWidth={1} padding={4}>
            <Paragraph fw="bold" fontSize="lg">Name: {starship.name}</Paragraph>
            <Paragraph>Model: {starship.model}</Paragraph>
            <Paragraph>Manufacturer: {starship.manufacturer}</Paragraph>
            <Paragraph>Hyperdrive Rating: {starship.hyperdrive_rating}</Paragraph>
            <Paragraph>Cost in Credits: {starship.cost_in_credits}</Paragraph>
            {/* Render other properties as needed */}
          </Card>
        ))}
      </YStack>
    </ScrollView>
  );
}

