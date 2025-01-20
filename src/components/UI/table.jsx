import React from "react";
import { LuUserSearch } from "react-icons/lu";
import Link from "next/link";

export const TableHead = () => {
  return (
    <thead>
      <tr className="bg-slate-200 text-left text-base font-semibold">
        <th className="px-3 py-2 text-center">No</th>
        <th className="min-w-52 px-3 py-2">Nama Lengkap</th>
        <th className="px-3 py-2">Posisi</th>
        <th className="min-w-44 px-3 py-2">Status</th>
        <th className="px-3 py-2">Detail</th>
      </tr>
    </thead>
  );
};

export const TableListBody = ({ index, name, status, position }) => {
  return (
    <tr className="group border-b border-b-slate-200 text-left text-base font-normal">
      <td className="px-3 py-2">{index + 1}</td>
      <td className="px-3 py-2 group-hover:underline">{name}</td>
      <td className="px-3 py-2">{position}</td>
      <td className="px-3 py-2">{status}</td>
      <td className="px-3 py-2">
        <Link
          href={`/guru/${name}`}
          className="group-hover:font-bold group-hover:text-primaryColor"
        >
          <LuUserSearch size={20} />
        </Link>
      </td>
    </tr>
  );
};
