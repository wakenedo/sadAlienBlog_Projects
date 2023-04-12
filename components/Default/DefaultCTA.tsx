export const DefaultCTA = () => {
  return (
    <div className="px-4 py-16 mb-8 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-8 bg-[#FDFFA6] rounded-b-lg">
      <div className="grid gap-10 lg:grid-cols-2">
        <div className="lg:flex flex-col justify-center md:pr-8 xl:pr-0 lg:max-w-lg">

          <div className="max-w-xl  bg-[#6590FF] p-4  h-[400px] justify-between">
            <div className="justify-between">
              <div className="text-center">
                <h2 className="max-w-lg mb-6  text-5xl font-semibold tracking-tight uppercase transition-colors duration-300 hover:text-deep-purple-accent-400leading-6 text-slate-100">
                  Why humans so sad?
                </h2>
              </div>
              <div className="px-2">
                <p className="mb-6 text-base font-regular tracking-tight text-justify text-slate-100 md:text-lg">
                  Humans get really upset when they're get rich quick schemes don't work out! There is no thing as free lunch yall!
                </p>
              </div>
              <div className="lg:mt-[185px] text-center items-center">
                <div className="bg-[#FDFFA6] rounded-b-lg shadow">
                  <h3 className=" text-2xl font-semibold tracking-tight uppercase text-sky-900 p-0.5">
                    <a href="/" className="px-[0.35rem] hover:text-[#FDFFA6] hover:bg-[#6590FF] hover:rounded-b-md">
                      10 steps to get rich without working!
                    </a>
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center -mx-4 lg:pl-8">
          <div className="flex flex-col items-end px-3">
            <img
              className="object-cover mb-6 rounded shadow-lg h-28 sm:h-48 xl:h-56 w-28 sm:w-48 xl:w-56"
              src="https://www.imagemhost.com.br/images/2023/02/06/SHULogo.png"
              alt=""
            />
            <img
              className="object-cover w-20 h-20 rounded shadow-lg sm:h-32 xl:h-40 sm:w-32 xl:w-40"
              src="https://www.imagemhost.com.br/images/2023/02/06/SHULogo.png"
              alt=""
            />
          </div>
          <div className="px-3">
            <img
              className="object-cover w-40 h-40 rounded shadow-lg sm:h-64 xl:h-80 sm:w-64 xl:w-80"
              src="https://www.imagemhost.com.br/images/2023/02/06/SHULogo.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};