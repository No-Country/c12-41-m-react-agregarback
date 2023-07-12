const Transfer = () => {
  return (
    <div className="">
      <div className="rounded-lg bg-gray h-full p-10">
        <div className="bg-dark mx-auto max-w-sm shadow-lg rounded-lg overflow-hidden">
          <div className="sm:flex sm:items-center px-2 py-4">
            <div className="flex-grow">
              <h2 className="font-bold px-2 py-3 leading-tight">
                Transferencias
              </h2>
              <h3 className="font-normal px-1 py-3">
                Transferí a un contacto de la agenda o a un nuevo destinatario
              </h3>
              <input
                type="text"
                placeholder="Buscar en la agenda"
                className="my-2 w-full text-sm bg-grey-light text-gray rounded h-10 p-3 focus:outline-none"
              />
              <div className="w-full">
                <div className="flex cursor-pointer my-1 hover:bg-blue-lightest rounded">
                  <div className="w-8 h-10 text-center py-1">
                    <p className="text-3xl p-0 text-green-dark">&bull;</p>
                  </div>
                  <div className="w-4/5 h-10 py-3 px-1">
                    <p className="hover:text-blue-dark font-semibold text-left">
                      Kevin Durant
                    </p>
                    <p className="text-sm text-grey-dark text-left">
                      CBU/CVU 2145879645032145874523
                    </p>
                  </div>
                </div>
                <div className="flex cursor-pointer my-1 hover:bg-blue-lightest rounded">
                  <div className="w-8 h-10 text-center py-1">
                    <p className="text-3xl p-0 text-grey-dark">&bull;</p>
                  </div>
                  <div className="w-4/5 h-10 py-3 px-1">
                    <p className="hover:text-blue-dark font-semibold text-left">
                      James Harden
                    </p>
                    <p className="text-sm text-grey-dark text-left">
                      CBU/CVU 3478521964031785132465
                    </p>
                  </div>
                </div>
                <div className="flex cursor-pointer my-1 hover:bg-blue-lightest rounded">
                  <div className="w-8 h-10 text-center py-1">
                    <p className="text-3xl p-0 text-green-dark">&bull;</p>
                  </div>
                  <div className="w-4/5 h-10 py-3 px-1">
                    <p className="hover:text-blue-dark font-semibold text-left">
                      Michael Jordan
                    </p>
                    <p className="text-sm text-grey-dark font-semibold text-left">
                      Alias Mich.Bolt
                    </p>
                  </div>
                </div>
                <div className="flex cursor-pointer my-1 hover:bg-blue-lightest rounded">
                  <div className="w-8 h-10 text-center py-1">
                    <p className="text-3xl p-0 text-green-dark">&bull;</p>
                  </div>
                  <div className="w-4/5 h-10 py-3 px-1">
                    <p className="hover:text-blue-dark font-semibold text-left">
                      Diane Prince
                    </p>
                    <p className="text-sm text-grey-dark text-left">
                      Alias Wonder.Woman
                    </p>
                  </div>
                </div>
                <div className="flex cursor-pointer my-1 hover:bg-blue-lightest rounded">
                  <div className="w-8 h-10 text-center py-1">
                    <p className="text-3xl p-0 text-green-dark">&bull;</p>
                  </div>
                  <div className="w-4/5 h-10 py-3 px-1">
                    <p className="hover:text-blue-dark font-semibold text-left">
                      Bruno Diaz
                    </p>
                    <p className="text-sm text-grey-dark text-left">
                      CBU/CVU 2745216983452745569887
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="sm:flex bg-grey-light sm:items-center px-2 py-4">
            <div className="flex-grow text-center">
              <button className="inline-flex items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-orange hover:bg-yellow hover:text-dark focus:shadow-outline focus:outline-none">
                Nuevo Destinatario
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Transfer;
