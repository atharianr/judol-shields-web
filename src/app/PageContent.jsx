import Link from "next/link";

export default function PageContent() {
    const activityArray = [
        "Ngobrol santai sambil ngopi atau ngeteh bareng keluarga di teras rumah.",
        "Main kartu remi, gaple, atau UNO bareng teman-teman dekat.",
        "Masak bareng menu khas Indonesia, seperti nasi goreng, soto, atau bakwan.",
        "Nobar sinetron, film Indonesia, atau pertandingan bola bareng keluarga.",
        "Main catur, congklak, atau ular tangga bareng adik atau orang tua.",
        "Jalan-jalan sore keliling komplek sambil ngobrol sama tetangga.",
        "Bersih-bersih rumah sambil putar dangdut atau lagu nostalgia.",
        "Bikin sambal bareng keluarga dengan level pedas sesuai selera.",
        "Main Mobile Legends atau Free Fire bareng teman satu geng.",
        "Ngelapak (nongkrong) di warung kopi sambil diskusi isu ringan.",
        "Belajar ngaji bareng keluarga atau ikut pengajian online.",
        "Ngasih makan kucing liar bareng anak-anak di sekitar rumah.",
        "Bikin video lucu untuk TikTok atau Reels bareng saudara.",
        "Bikin kerajinan tangan dari barang bekas, kayak botol atau kardus mie instan.",
        "Masak bareng menu sahur atau buka puasa pas bulan Ramadan.",
        "Ziarah kubur atau jalan-jalan ke tempat bersejarah lokal bareng keluarga.",
        "Main layangan atau bantu adik bikin layang-layang sendiri.",
        "Mancing di sungai, kolam pemancingan, atau di sawah.",
        "Bikin es campur, es buah, atau takjil bareng keluarga.",
        "Nonton bareng channel YouTube edukatif buatan anak bangsa.",
        "Belanja bareng di pasar tradisional, sekalian belajar tawar-menawar.",
        "Nyuci motor/mobil bareng ayah atau adik sambil main air.",
        "Bikin nasi bungkus buat dibagiin ke warga yang membutuhkan.",
        "Main tebak-tebakan receh khas Indonesia bareng teman.",
        "Nulis quotes bijak dan tempel di dinding kamar bareng keluarga.",
        "Jalan-jalan ke alun-alun kota sambil jajan cilok dan pentol.",
        "Main truth or dare ala anak kos di ruang tamu atau teras.",
        "Piknik dadakan di halaman rumah sambil bawa tikar dan gorengan.",
        "Nonton film Warkop atau Srimulat bareng keluarga buat nostalgia.",
        "Bikin konten edukasi bahasa daerah bareng teman.",
        "Ngobrolin masa kecil sambil buka album foto lama keluarga.",
        "Belajar masak sambal matah, rica-rica, atau rendang bareng ibu.",
        "Main sepak bola di lapangan kosong dekat rumah bareng tetangga.",
        "Ikut gotong royong atau kerja bakti bersihin lingkungan.",
        "Main game tradisional kayak gobak sodor, benteng, atau engklek.",
        "Berburu kuliner kaki lima bareng sahabat di malam minggu.",
        "Ikut lomba 17-an bareng teman, walau cuma latihan di rumah.",
        "Bikin acara potluck mini bareng tetangga di gang rumah.",
        "Masak mi instan tapi dimodifikasi jadi menu unik bareng teman.",
        "Tukar-tukaran playlist dangdut koplo atau lagu indie lokal.",
        "Diskusi ringan soal berita viral di media sosial bareng keluarga.",
        "Main kembang api atau petasan kecil saat malam takbiran.",
        "Belajar rebana atau alat musik tradisional bareng komunitas.",
        "Coba bisnis kecil-kecilan online bareng teman.",
        "Main ke rumah saudara sambil bantu mereka beresin rumah.",
        "Bantu orang tua di kebun atau sawah (kalau tinggal di desa).",
        "Bikin drama pendek atau sketsa lucu bareng teman sekolah.",
        "Ngobrolin mimpi dan cita-cita sambil duduk di pinggir jalan.",
        "Latihan presentasi atau public speaking bareng teman kampus.",
        "Ngerakit atau bongkar motor/mobil bareng saudara buat belajar.",
        "Bikin mini perpustakaan keluarga dan baca bareng tiap sore.",
        "Ngisi waktu bareng teman dengan belajar bikin desain atau editing.",
    ];

    return (
        <div className="flex h-screen w-screen">
            {/* TOP */}
            <div className="fixed w-screen p-3 shadow-sm">
                <img src="./assets/JudolShieldsLogoText.svg" alt="Judol Shields Logo" draggable="false" className="h-12 w-fit" />
            </div>

            {/* CONTENT */}
            <div className="flex flex-col w-full justify-center">
                <h1 className="text-6xl text-[#2F3396] font-bold ml-36">Ooops....</h1>
                <p className="text-[#6B6FC2] text-l mt-6 ml-36">Wah, konten di halaman ini terindikasi kurang cocok.</p>
                <p className="text-[#6B6FC2] text-l mt-2 ml-36">Tenang, <em>MinShield</em> punya beberapa <strong>aktivitas seru</strong> yang bisa kamu lakukan <strong>bareng keluarga atau teman</strong>:</p>
                <ul className="list-disc pl-10 mt-2 ml-36">
                    {
                        activityArray
                            .sort(() => 0.5 - Math.random()) // shuffle
                            .slice(0, 3) // take first 3
                            .map((data, index) => (
                                <li key={index} className="text-[#6B6FC2] text-l6">
                                    {data}
                                </li>
                            ))
                    }
                </ul>
                <p className="text-[#6B6FC2] text-l mt-2 ml-36">
                    Lagi butuh bantuan soal judi online?
                    {" "}Langsung{" "}
                    <Link
                        href="/chat"
                        className="font-bold underline hover:text-[#4c50a3]"
                    >
                        konsultasi bareng MinShield di sini
                    </Link>{" "}
                    atau hubungi{" "}
                    <a href="tel:081110015080" className="font-bold underline hover:text-[#4c50a3]">
                        0811-1001-5080
                    </a>{" "}
                    atau cek{" "}
                    <a
                        href="https://aduankonten.id"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-bold underline hover:text-[#4c50a3]"
                    >
                        aduankonten.id
                    </a>
                </p>
                <button
                    onClick={() => window.history.back()}
                    className="w-fit bg-[#2F3396] text-white text-xl font-medium px-12 py-3 mt-8 ml-36 rounded-2xl cursor-pointer hover:bg-[#2F3396]/80 hover:shadow-sm duration-200"
                >
                    Kembali
                </button>
            </div>
            <div className="flex w-full items-center justify-center">
                <img src="./assets/OnlineGamblingIllustration.svg" alt="Online Gambling Illustration" draggable="false" className="h-[400px] w-fit" />
            </div>
        </div>
    )
}