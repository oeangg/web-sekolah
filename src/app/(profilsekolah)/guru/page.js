import { TableHead, TableListBody } from "@/components/UI/table";
import React from "react";

export const teachers = [
  {
    id: 1,
    name: "Asep Sunandar",
    birthyear: "1970",
    position: "Guru",
    gender: "Laki-laki",
    status: "PNS",
    address: "Kuningan",
    profil:
      "Kami percaya bahwa pendidikan adalah investasi terbaik untuk masa depan Oleh karena itu, kami terus berupaya meningkatkan kualitas pendidikan di sekolah kami. Terima kasih atas kunjungan Anda. Semoga website ini bermanfaat bagi kita semua",
  },
  {
    id: 2,
    name: "Dadang Supriatna",
    birthyear: "1972",
    position: "Guru",
    gender: "Laki-laki",
    status: "PNS",
    address: "Kuningan",
    profil:
      "Kami percaya bahwa pendidikan adalah investasi terbaik untuk masa depan. Oleh karena itu, kami terus berupaya meningkatkan kualitas pendidikan di sekolah kami. Terima kasih atas kunjungan Anda. Semoga website ini bermanfaat bagi kita semua.",
  },
  {
    id: 3,
    name: "Ati Suharti",
    birthyear: "1983",
    position: "Guru",
    gender: "Perempuan",
    status: "PNS",
    address: "Kuningan",
    profil:
      "Kami percaya bahwa pendidikan adalah investasi terbaik untuk masa depan. Oleh karena itu, kami terus berupaya meningkatkan kualitas pendidikan di sekolah kami. Terima kasih atas kunjungan Anda. Semoga website ini bermanfaat bagi kita semua.",
  },
  {
    id: 4,
    name: "Eman Sulaeman",
    birthyear: "1970",
    position: "Guru",
    gender: "Laki-laki",
    status: "PNS",
    address: "Kuningan",
    profil:
      "Kami percaya bahwa pendidikan adalah investasi terbaik untuk masa depan. Oleh karena itu, kami terus berupaya meningkatkan kualitas pendidikan di sekolah kami. Terima kasih atas kunjungan Anda. Semoga website ini bermanfaat bagi kita semua.",
  },
  {
    id: 5,
    name: "Euis Nurhayati",
    birthyear: "1981",
    position: "Guru",
    gender: "Perempuan",
    status: "PNS",
    address: "Kuningan",
    profil:
      "Kami percaya bahwa pendidikan adalah investasi terbaik untuk masa depan. Oleh karena itu, kami terus berupaya meningkatkan kualitas pendidikan di sekolah kami. Terima kasih atas kunjungan Anda. Semoga website ini bermanfaat bagi kita semua.",
  },
  {
    id: 6,
    name: "Muhammad Ali",
    birthyear: "1984",
    position: "Guru",
    gender: "Laki-laki",
    status: "PNS",
    address: "Kuningan",
    profil:
      "Kami percaya bahwa pendidikan adalah investasi terbaik untuk masa depan. Oleh karena itu, kami terus berupaya meningkatkan kualitas pendidikan di sekolah kami. Terima kasih atas kunjungan Anda. Semoga website ini bermanfaat bagi kita semua.",
  },
  {
    id: 7,
    name: "Nurul Hidayah",
    birthyear: "1970",
    position: "Guru",
    gender: "Perempuan",
    status: "PNS",
    address: "Kuningan",
    profil:
      "Kami percaya bahwa pendidikan adalah investasi terbaik untuk masa depan. Oleh karena itu, kami terus berupaya meningkatkan kualitas pendidikan di sekolah kami. Terima kasih atas kunjungan Anda. Semoga website ini bermanfaat bagi kita semua.",
  },
  {
    id: 8,
    name: "Neneng Nurul",
    birthyear: "1970",
    position: "Keuangan",
    gender: "Perempuan",
    status: "PPPK",
    address: "Kuningan",
    profil:
      "Kami percaya bahwa pendidikan adalah investasi terbaik untuk masa depan. Oleh karena itu, kami terus berupaya meningkatkan kualitas pendidikan di sekolah kami. Terima kasih atas kunjungan Anda. Semoga website ini bermanfaat bagi kita semua.",
  },
  {
    id: 9,
    name: "Ujang Ahmad",
    birthyear: "1970",
    position: "Tata Usaha",
    gender: "Laki-laki",
    status: "PPPK",
    address: "Kuningan",
    profil:
      "Kami percaya bahwa pendidikan adalah investasi terbaik untuk masa depan. Oleh karena itu, kami terus berupaya meningkatkan kualitas pendidikan di sekolah kami. Terima kasih atas kunjungan Anda. Semoga website ini bermanfaat bagi kita semua.",
  },
  {
    id: 10,
    name: "Siti Aminah",
    birthyear: "1970",
    position: "Guru",
    gender: "Perempuan",
    status: "PNS",
    address: "Kuningan",
    profil:
      "Kami percaya bahwa pendidikan adalah investasi terbaik untuk masa depan.Oleh karena itu, kami terus berupaya meningkatkan kualitas pendidikan di sekolah kami. Terima kasih atas kunjungan Anda. Semoga website ini bermanfaat bagi kita semua.",
  },
];

export default function Home() {
  return (
    <div className="space-y-6">
      <h1 className="text-xl font-bold md:text-2xl">
        Daftar Guru dan Tenaga Kependidikan
      </h1>
      <table>
        <TableHead />
        <tbody>
          {teachers.map((teach, index) => (
            <TableListBody
              key={index}
              index={index}
              name={teach.name}
              birthyear={teach.birthyear}
              status={teach.status}
              position={teach.position}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}
