import React from "react";
import Image from "next/image";

const ClientList = ({details}) => {
  return (
    <section id="client-list" className=" bg-dark-blue-900 text-gray-400 py-36">
      <div className="container mx-auto px-8">
          <div className="mx-auto">
            {/* Service repeats */}
            <div className="flex flex-col justify-center items-center max-w-2xl mx-auto">
              <h2 className="flex flex-row justify-center text-4xl font-extrabold text-white">{details.title}</h2>
              <p className="flex flex-row justify-center text-center py-12">{details.introText}</p>
            </div>
              
            <div className="flex flex-wrap gap-4 max-w-6xl justify-center items-center mx-auto">
              {details.clients.map((client) => (
                <div key={client.id} className="flex p-4 rounded-md bg-white w-60 h-28">
                  <Image
                    src={client.logo.url}
                    alt={`Logo for ${client.title}`}
                    width={250}
                    height={150}
                  />
                </div>
              ))}
            </div>
          </div>
      </div>
    </section>
  );
};

export default ClientList;
