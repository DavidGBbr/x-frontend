import Button from "@/components/ui/button";
import { GeneralHeader } from "@/components/ui/general-header";
import { user } from "@/data/user";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import React from "react";

const Page = () => {
  const isMe = true;

  return (
    <div className="bg-black text-white min-h-screen">
      <GeneralHeader backHref="/">
        <div className="font-bold text-lg">{user.name}</div>
        <div className="text-xs text-gray-500">{user.postCount} posts</div>
      </GeneralHeader>

      <section className="border-b-2 border-gray-900">
        <div
          className="bg-gray-500 h-28 bg-no-repeat bg-cover bg-center"
          style={{ backgroundImage: `url(${user.cover})` }}
        ></div>

        <div className="relative -mt-12 px-6 flex justify-between items-end">
          <img
            src={user.avatar}
            alt={`${user.name}'s avatar`}
            className="size-24 rounded-full border-4 border-black"
          />
          <div className="w-32">
            {isMe ? (
              <Link href={`/${user.slug}/edit`} aria-label="Editar Perfil">
                <Button label="Editar Perfil" size={2} />
              </Link>
            ) : (
              <Button label="Seguir" size={2} />
            )}
          </div>
        </div>

        <div className="px-6 mt-4">
          <div className="text-xl font-bold">{user.name}</div>
          <div className="text-gray-500">@{user.slug}</div>
          {user.bio && (
            <div className="py-5 text-lg text-gray-500">{user.bio}</div>
          )}

          {user.link && (
            <div className="flex gap-2 items-center">
              <FontAwesomeIcon icon={faLink} className="size-5 text-gray-400" />
              <Link
                href={user.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:underline"
                aria-label={`Visitar ${user.link}`}
              >
                {user.link}
              </Link>
            </div>
          )}

          <div className="my-5 flex gap-6">
            <div className="text-xl text-gray-500">
              <span className="text-white">99</span> Seguindo
            </div>
            <div className="text-xl text-gray-500">
              <span className="text-white">99</span> Seguidores
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Page;
