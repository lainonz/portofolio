const Index = () => {
  return (
    <>
      <h1 className="text-center text-secondary text-opacity-70 text-3xl font-bold mb-6">
        Certificate
      </h1>
      <section className="flex flex-col md:flex-row items-center justify-center gap-4 flex-wrap">
        <div className="rounded-md">
          <img
            src="/cert/kpk.png"
            alt="Csirt Komisi Pemberantasan Korupsi"
            width={600}
            height={500}
            className="rounded-md mx-auto"
          />
          {/* <h1 className="text-center text-2xl font-bold mt-2">
            Certificate of Appreciation From KPK
          </h1> */}
          {/* <p className="w-[80%] text-center mx-auto">
            Menemukan kerentanan information disclosure pada subdomain milik{" "}
            <a
              href="https://www.kpk.go.id"
              target="_blank"
              className="text-blue-500 underline"
            >
              kpk.go.id
            </a>
          </p> */}
        </div>
        <div className="rounded-md">
          <img
            src="/cert/bmkg.png"
            alt="Csirt Komisi Pemberantasan Korupsi"
            width={600}
            height={500}
            className="rounded-md mx-auto"
          />
          {/* <h1 className="text-center text-2xl font-bold mt-2">
            Certificate of Appreciation From KPK
          </h1> */}
          {/* <p className="w-[80%] text-center mx-auto">
            Menemukan kerentanan information disclosure pada subdomain milik{" "}
            <a
              href="https://www.kpk.go.id"
              target="_blank"
              className="text-blue-500 underline"
            >
              kpk.go.id
            </a>
          </p> */}
        </div>
        <div className="rounded-md">
          <img
            src="/cert/itb.jpeg"
            alt="Institut Teknologi Bandung"
            width={600}
            height={500}
            className="rounded-md mx-auto"
          />
          {/* <h1 className="text-center text-2xl font-bold mt-2">
            Certificate of Appreciation From KPK
          </h1> */}
          {/* <p className="w-[80%] text-center mx-auto">
            Menemukan kerentanan information disclosure pada subdomain milik{" "}
            <a
              href="https://www.kpk.go.id"
              target="_blank"
              className="text-blue-500 underline"
            >
              kpk.go.id
            </a>
          </p> */}
        </div>
      </section>
    </>
  );
};

export default Index;
