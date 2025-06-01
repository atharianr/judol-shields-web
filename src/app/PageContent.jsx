export default function PageContent() {
    return (
        <div className="flex h-screen w-screen">
            {/* TOP */}
            <div className="fixed w-screen p-3 shadow-sm">
                <img src="./assets/JudolShieldsLogoText.svg" alt="Judol Shields Logo" draggable="false" className="h-12 w-fit" />
            </div>

            {/* CONTENT */}
            <div className="flex flex-col w-max justify-center">
                <h1 className="text-6xl text-[#2F3396] font-bold ml-36">Ooops....</h1>
                <p className="text-[#6B6FC2] text-xl mt-6 ml-36">Wah, konten di halaman ini terindikasi kurang cocok. Yuk, jelajahi halaman lainnya!</p>
                <button
                    onClick={() => window.history.back()}
                    className="w-fit bg-[#2F3396] text-white text-xl font-medium px-12 py-3 mt-8 ml-36 rounded-2xl cursor-pointer hover:bg-[#2F3396]/80 hover:shadow-sm duration-200"
                >
                    Kembali
                </button>
                {/* <button className="w-fit text-[#6B6FC2] text-sm ml-36 mt-4 underline cursor-pointer">
                    Laporkan jika halaman ini bukan Judol — <span className="font-bold">klik di sini</span>.
                </button> */}
            </div>
            <div className="flex w-full items-center justify-center">
                <img src="./assets/OnlineGamblingIllustration.svg" alt="Online Gambling Illustration" draggable="false" className="h-[500px] w-fit" />
            </div>
        </div>
    )
}