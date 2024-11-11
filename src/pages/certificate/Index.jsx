const Index = () => {
  return (
    <>
      <section className="text-secondary text-opacity-70 flex flex-col items-center justify-center">
        <h1 className="text-center text-3xl font-bold mb-6">Certificate</h1>
        <div className="rounded-md">
          <img
            src="/cert/kpk.png"
            alt="Csirt Komisi Pemberantasan Korupsi"
            width={400}
            height={300}
            className="rounded-md mx-auto"
          />
          <h1 className="text-center text-2xl font-bold mt-2">
            CSIRT From Komisi Pemberantasan Korupsi
          </h1>
          <p className="w-[80%] text-center mx-auto">
            Menemukan kerentanan information disclosure pada subdomain milik{" "}
            <a
              href="https://www.kpk.go.id"
              target="_blank"
              className="text-blue-500 underline"
            >
              kpk.go.id
            </a>
          </p>
        </div>
      </section>
    </>
  );
};

export default Index;
