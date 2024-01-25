import { Button, Paragraph, YStack, ScrollView, ListItem } from '@my/ui'
import React from 'react'
import { useQuery } from "@tanstack/react-query";


async function fetchData() {
  const result = await fetch(`https://swapi.py4e.com/api/starships/`);
  const json = await result.json();
  return json.results;
}

export function StarshipFeedScreen() {

  const {isLoading, isError, data} = useQuery({queryKey:["starships"], queryFn: fetchData});

  React.useEffect(() => {
    console.log('data',data)
  },[data])

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
  <YStack>
<Paragraph>test</Paragraph>
    </YStack>
    </ScrollView>

  )
}
