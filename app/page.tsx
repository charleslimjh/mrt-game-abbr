"use client";

import CardListColumn from "@/components/oneColCards";

const gameModes = [
  {
    name: "All Lines",
    description: `Identify as many stations from their abbreviations in 90 seconds, 
      with stations from all lines included.
      Skipping a station costs you 10 seconds.`,
    link: "/alllines",
  },
  {
    name: "North South Line",
    description: `Identify as many stations from their abbreviations in 90 seconds, 
      with stations from the North South Line (Red Line).
      Skipping a station costs you 10 seconds.`,
    link: "/nsl",
  },
  {
    name: "East West Line",
    description: `Identify as many stations from their abbreviations in 90 seconds, 
      with stations from the East West Line (Green Line).
      Skipping a station costs you 10 seconds.`,
    link: "/ewl",
  },
  {
    name: "North East Line",
    description: `Identify as many stations from their abbreviations in 90 seconds, 
      with stations from the North East Line (Purple Line).
      Skipping a station costs you 10 seconds.`,
    link: "/nel",
  },
  {
    name: "Circle Line",
    description: `Identify as many stations from their abbreviations in 90 seconds, 
      with stations from the North South Line (Yellow Line).
      Skipping a station costs you 10 seconds.`,
    link: "/ccl",
  },
  {
    name: "Downtown Line",
    description: `Identify as many stations from their abbreviations in 90 seconds, 
      with stations from the Downtown Line (Blue Line).
      Skipping a station costs you 10 seconds.`,
    link: "/dtl",
  },
  {
    name: "Thomson-East Coast Line",
    description: `Identify as many stations from their abbreviations in 90 seconds, 
      with stations from the Thomson-East Coast Line (Brown Line).
      Skipping a station costs you 10 seconds.`,
    link: "/tel",
  },
];

export default function Page() {
  return (
    <div className="pb-10">
      <h1 className="text-5xl pb-10">MRT Abbreviation Game</h1>

      <CardListColumn cardItems={gameModes} />
    </div>
  );
}
