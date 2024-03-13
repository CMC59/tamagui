import { useQuery } from "@tanstack/react-query";

async function fetchData() {
    const result = await fetch(`https://emojihub.yurace.pro/api/all`);
    const json = await result.json();
    return json;
}

export function useEmoji() {
    return useQuery({ queryKey: ["emoji"], queryFn: fetchData} );
}