export default function Offer(){
    return (
        <div style={{ backgroundImage: `url("https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/2bbcfa99737217.5ef9be3dbb9a9.jpg")`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    height: "25rem",
                    width: "auto",
                    display: 'flex',
                    flexDirection: 'column',
                    
                 }}
                className="flex flex-col text-center max-h-[35rem] justify-center">
                    <button className="text-black bg-white hover:bg-slate-200 font-semibold max-w-sm mx-auto px-8 py-2 rounded-md border-0 mt-auto mb-5">Shop Now</button>
                </div>
    )
}