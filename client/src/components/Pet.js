import React from "react";
import axios from "axios";
import { Link } from "@reach/router";
import Container from "./Container";

const Pet = ({ id }) => {
  const [petInfo, setPetInfo] = React.useState({});
  React.useEffect(() => {
    document.title = "Find My Pet - View";
    axios
      .get(`http://localhost:8888/pet/${id}`)
      .then((data) => setPetInfo(data.data.pet));
  }, []);
  return (
    <Container>
      <div className="rounded-lg overflow-hidden md:w-6/12 lg:w-4/12 shadow-lg sm:ml-0 mb-4 mt-4 md:ml-4 border-4 border-blue-700 p-5">
        <img
          className="w-full object-cover"
          src={petInfo.image}
          alt="Lost pet"
          height="400"
          width="650"
        />
        <div className="bg-white">
          <h3 className="font-semibold uppercase text-lg text-center py-1">
            {petInfo.name}
          </h3>
          <hr />
          <div className="px-5 py-4">
            <p className="uppercase text-gray-800 font-semibold text-sm">
              Breed: {petInfo.breed}
            </p>
            <p className="uppercase text-gray-800 font-semibold text-sm">
              Last known location: {petInfo?.address}
            </p>
            <p className="uppercase text-gray-800 font-semibold text-sm">
              <a
                href={`https://maps.google.com/?q=${petInfo?.address}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-800"
              >
                Open in google maps
              </a>
            </p>
            <p className="uppercase text-gray-800 font-semibold text-sm">
              Last seen: {petInfo.lastSeen}
            </p>
            <p className="uppercase text-gray-800 font-semibold text-sm mb-3">
              Additional Info:{" "}
              {petInfo.additionalInfo
                ? petInfo.additionalInfo
                : "No additional info."}
            </p>
            <hr />
            <div>
              <p className="font-semibold uppercase text-lg text-center mt-2 mb-2">
                Contact
              </p>
              <hr />
              <p className="uppercase text-gray-800 font-semibold text-sm mt-3">
                E-mail: {petInfo.postedBy?.contactInfo?.email}
              </p>
              <p className="uppercase text-gray-800 font-semibold text-sm">
                Phone Number: {petInfo.postedBy?.contactInfo?.phone}
              </p>
            </div>
            <div className="flex items-end">
              <Link
                to={"/"}
                className="bg-blue-900 w-full p-1 mt-2 rounded hover:bg-blue-700 text-white block text-center focus:text-white focus:outline-none"
              >
                Back
              </Link>
            </div>
          </div>
          <hr />
          <span className="text-xs ml-auto py-3 inline-block font-bold text-gray-600 text-center w-full">
            Updated: {petInfo.updatedAt}
          </span>
        </div>
      </div>
    </Container>
  );
};

export default Pet;
