import React, { useEffect, useState } from "react";
import useAxios from "../../hooks/useAxios";
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import PickCard from "./PickBy/PickCard";
import { NavLink } from "react-router-dom";
import "../../Shared/nav.css";
const categories = [
  {
    name: "Recent",
    posts: [
      {
        id: 1,
        title: "Does drinking coffee make you smarter?",
        date: "5h ago",
        commentCount: 5,
        shareCount: 2,
      },
      {
        id: 2,
        title: "So you've bought coffee... now what?",
        date: "2h ago",
        commentCount: 3,
        shareCount: 2,
      },
    ],
  },
  {
    name: "Popular",
    posts: [
      {
        id: 1,
        title: "Is tech making coffee better or worse?",
        date: "Jan 7",
        commentCount: 29,
        shareCount: 16,
      },
      {
        id: 2,
        title: "The most innovative things happening in coffee",
        date: "Mar 19",
        commentCount: 24,
        shareCount: 12,
      },
    ],
  },
  {
    name: "Trending",
    posts: [
      {
        id: 1,
        title: "Ask Me Anything: 10 answers to your questions about coffee",
        date: "2d ago",
        commentCount: 9,
        shareCount: 5,
      },
      {
        id: 2,
        title: "The worst advice we've ever heard about coffee",
        date: "4d ago",
        commentCount: 1,
        shareCount: 2,
      },
    ],
  },
];

function Types() {
  const axiosBase = useAxios();
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const { data } = await axiosBase("pickedBooks");
      setBooks(data);
    };
    getData();
  }, []);

  const beforeActive =
    "underline-transition mt-3 hover:no-underline hover:text-yellow";
  const afterActive =
    "text-black dark:text-beige underline-transition hover:no-underline";

  return (
    <div>
      <h1 className="text-4xl font-bold text-center">
        Discover Yor next <span className="italic text-yellow">Book</span>!
      </h1>
      <p className="text-center font-thin mt-2">
        Novel Nest Is Best Choice For Learners
      </p>
      <div className="flex w-full justify-center pt-12 px-4">
        <div className="w-full max-w-6xl mx-auto">
          <TabGroup>
            <TabList className="flex gap-4 justify-center my-9 *:bg-sage  *:text-yellow *:dark:bg-beige *:shadow-xl *:px-4 *:py-2 ">
              <Tab className="hover:text-yellow hover:underline hover:transition hover:duration-200">New Release</Tab>
              <Tab>Award Winners</Tab>
              <Tab>Best Sellers</Tab>
            </TabList>
            <TabPanels className="mt-3">
              <TabPanel className="grid grid-cols-3 gap-12 max-w-7xl">
                {books
                  .filter((book) => book.types === "new release")
                  .map((b) => (
                    <PickCard book={b}></PickCard>
                  ))}
              </TabPanel>
              <TabPanel className="grid grid-cols-3 max-w-7xl">
                {books
                  .filter((book) => book.types === "award winners")
                  .map((b) => (
                    <PickCard book={b}></PickCard>
                  ))}
              </TabPanel>
              <TabPanel className="grid grid-cols-3 gapy-7 gap-12 max-w-7xl">
                {books
                  .filter((book) => book.types === "best seller")
                  .map((b) => (
                    <PickCard book={b}></PickCard>
                  ))}
              </TabPanel>
            </TabPanels>
          </TabGroup>
        </div>
      </div>
    </div>
  );
}

export default Types;
