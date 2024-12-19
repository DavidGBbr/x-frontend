import Button from "@/components/ui/button";
import { GeneralHeader } from "@/components/ui/general-header";
import { Input } from "@/components/ui/input";
import Textarea from "@/components/ui/textarea";
import { user } from "@/data/user";
import { faCamera, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Page = () => {
  const isMe = true;

  return (
    <div className="bg-black text-white min-h-screen">
      <GeneralHeader backHref="/">
        <div className="font-bold text-lg">Editar perfil</div>
      </GeneralHeader>

      <section className="border-b-2 border-gray-900">
        <div
          className="flex justify-center items-center gap-4 bg-gray-500 h-28 bg-no-repeat bg-cover bg-center"
          style={{ backgroundImage: `url(${user.cover})` }}
        >
          <div className="cursor-pointer bg-black/80 flex justify-center items-center size-12 rounded-full">
            <FontAwesomeIcon icon={faCamera} className="size-6" />
          </div>
          <div className="cursor-pointer bg-black/80 flex justify-center items-center size-12 rounded-full">
            <FontAwesomeIcon icon={faXmark} className="size-6" />
          </div>
        </div>
        <div className="-mt-12 px-6">
          <img
            src={user.avatar}
            alt={`${user.name}'s avatar`}
            className="size-24 rounded-full"
          />
          <div className="-mt-24 size-24 flex justify-center items-center">
            <div className="cursor-pointer bg-black/80 flex justify-center items-center size-12 rounded-full">
              <FontAwesomeIcon icon={faCamera} className="size-6" />
            </div>
          </div>
        </div>
      </section>
      <section className="p-6 flex flex-col gap-4">
        <label>
          <p className="text-lg text-gray-500 mb-2">Nome</p>
          <Input placeholder="Digite seu nome" value={user.name} />
        </label>
        <label>
          <p className="text-lg text-gray-500 mb-2">Bio</p>
          <Textarea
            placeholder="Descreva você mesmo"
            rows={4}
            value={user.bio}
          />
        </label>
        <label>
          <p className="text-lg text-gray-500 mb-2">Link</p>
          <Input placeholder="Digite um link" value={user.link} />
        </label>

        <Button label="Salvar alterações" size={1} />
      </section>
    </div>
  );
};

export default Page;
