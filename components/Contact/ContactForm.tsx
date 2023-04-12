export const ContactForm = () => {
  return (
    <section className="mb-8 text-gray-800">
      <div className="flex flex-wrap ">
        <div className="grow-0 shrink-0 basis-auto mb-6 md:mb-0 w-full md:w-6/12 px-3 lg:px-6">
          <h2 className=" text-5xl font-thin tracking-wide uppercase transition-colors duration-300 hover:text-deep-purple-accent-400leading-6 text-slate-600 mb-6">Entre em contato</h2>
          <p className="font-light tracking-wide text-justify text-slate-600 mb-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Laudantium, modi accusantium ipsum corporis quia asperiores
            dolorem nisi corrupti eveniet dolores ad maiores repellendus enim
            autem omnis fugiat perspiciatis? Ad, veritatis.
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Laudantium, modi accusantium ipsum corporis quia asperiores
            dolorem nisi corrupti eveniet dolores ad maiores repellendus enim
            autem omnis fugiat perspiciatis? Ad, veritatis.
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Laudantium, modi accusantium ipsum corporis quia asperiores
            dolorem nisi corrupti eveniet dolores ad maiores repellendus enim
            autem omnis fugiat perspiciatis? Ad, veritatis.
          </p>
          <div className="lg:mt-20">
            <p className="font-light tracking-wide text-justify text-slate-600 uppercase mb-2">Cidade, País, 00000-000</p>
            <p className="font-light tracking-wide text-justify text-slate-600 uppercase mb-2">+ 55 (11) 1234-5678</p>
            <p className="font-light tracking-wide text-justify text-slate-600 uppercase mb-2">example@email.com</p>
          </div>
        </div>
        <div className="grow-0 shrink-0 basis-auto mb-12 md:mb-0 w-full md:w-6/12 px-3 lg:px-6">
          <form>
            <div className="form-group mb-6">
              <input type="text" className="form-control block
              w-full
              px-3
              py-1.5
              text-base
              font-normal
              text-gray-700
              bg-white bg-clip-padding
              border border-solid border-gray-300
              rounded
              transition
              ease-in-out
              m-0
              focus:text-gray-700 focus:bg-white focus:border-emerald-600 focus:outline-none" id="exampleInput7"
                placeholder="Name" />
            </div>
            <div className="form-group mb-6">
              <input type="email" className="form-control block
              w-full
              px-3
              py-1.5
              text-base
              font-normal
              text-gray-700
              bg-white bg-clip-padding
              border border-solid border-gray-300
              rounded
              transition
              ease-in-out
              m-0
              focus:text-gray-700 focus:bg-white focus:border-emerald-600 focus:outline-none" id="exampleInput8"
                placeholder="Email address" />
            </div>
            <div className="form-group mb-6">
              <textarea className="
              form-control
              block
              w-full
              px-3
              py-1.5
              text-base
              font-normal
              text-gray-700
              bg-white bg-clip-padding
              border border-solid border-gray-300
              rounded
              transition
              ease-in-out
              m-0
              focus:text-gray-700 focus:bg-white focus:border-emerald-600 focus:outline-none
            " id="exampleFormControlTextarea13" placeholder="Message" rows={6}></textarea>
            </div>
            <div className="form-group form-check text-center mb-6">
              <input type="checkbox"
                className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-emerald-300 checked:border-emerald-300 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain mr-2 cursor-pointer"
                id="exampleCheck87" defaultChecked />
              <label className="form-check-label inline-block font-light tracking-wide text-justify text-slate-600 ">Send me a copy of this
                message</label>
            </div>
            <button type="submit" className="
            w-full
            px-6
            py-2.5
            bg-emerald-300
            text-slate-600
            font-medium
            text-xs
            leading-tight
            uppercase
            rounded
            shadow-md
            hover:bg-emerald-600 hover:shadow-lg
            focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
            active:bg-blue-800 active:shadow-lg
            transition
            duration-150
            ease-in-out">Send</button>
          </form>
        </div>
      </div>
    </section>

  )
}