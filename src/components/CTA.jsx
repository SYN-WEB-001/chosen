import React, { forwardRef } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import LoginSchemas from "../schemas/LoginSchemas.js";

const CTA = forwardRef((props, ref) => {

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    trigger
  } = useForm({
    resolver: yupResolver(LoginSchemas),
    mode: "all",
  });

  const submitHandler = (data) => {
    alert(
      `Angemeldet mit:
Name: ${data.name}
E-Mail: ${data.email}
Interessen: ${data.interests}

Danke für dein Interesse!`
    );
    reset();
  };

  return (
    <div ref={ref}>

      <div>
        <h1 className="text-2xl md:text-4xl font-bold text-center mb-2 mt-40">
          Wenn du dabei sein willst jetzt anmelden, bevor die letzten Plätze weg sind.
        </h1>
        <p className="text-xl text-center font-bold mt-2">
          Wir befinden uns mitten in der Testphase. Die Nachfrage ist hoch, sichere dir einen der letzten freien Plätze.
        </p>
      </div>

      <div className="bg-gradient-to-br from-pink-500 to-purple-600 text-white p-6 md:p-10 lg:p-12 rounded-3xl shadow-2xl max-w-6xl mx-auto my-10 border-4">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">

          <div className="flex flex-col space-y-6">
            <h1 className="text-4xl sm:text-5xl lg:text-5xl font-extrabold leading-tight">
              Early Access sichern!
            </h1>

            <h2>
              <span className="block text-white mt-2 text-4xl">
                Werde eine*r der ersten Nutzer*innen.
              </span>
            </h2>

            <div className="text-lg md:text-xl opacity-90">
              <p className="mb-4">
                Wir verbringen mehr Zeit online als je zuvor – und trotzdem fühlen sich viele Menschen isolierter an.
                <strong className="block mt-2 text-white">CHOSEN bringt die echten Begegnungen zurück.</strong>
              </p>
              <p>
                Die App zeigt dir Menschen, die zur gleichen Zeit am gleichen Ort sind wie du.
                Kein Swipen. Kein Bot. Einfach echt.
              </p>
            </div>
          </div>

          <div className="p-6 bg-gradient-to-br from-pink-500 to-purple-600/70 rounded-2xl self-stretch">

            <form onSubmit={handleSubmit(submitHandler)} className="flex flex-col space-y-4">

              <div>
                <input
                  type="text"
                  placeholder="Dein Name"
                  {...register("name", {
                    onChange: () => trigger("name"),
                  })}
                  className="w-full bg-white text-gray-800 placeholder:text-gray-400 border-none text-base p-4 rounded-xl focus:ring-2 focus:ring-amber-400 outline-none"
                />
                {errors.name && (
                  <p className="text-yellow-300 text-sm">{errors.name.message}</p>
                )}
              </div>

              <div>
                <input
                  type="email"
                  placeholder="E-Mail Adresse"
                  {...register("email", {
                    onChange: () => trigger("email"),
                  })}
                  className="w-full bg-white text-gray-800 placeholder:text-gray-400 border-none text-base p-4 rounded-xl focus:ring-2 focus:ring-amber-400 outline-none"
                />
                {errors.email && (
                  <p className="text-yellow-300 text-sm">{errors.email.message}</p>
                )}
              </div>

              <div>
                <input
                  type="text"
                  placeholder="Dein Interesse (z.B. Sport, Kunst, Reisen...)"
                  {...register("interests", {
                    onChange: () => trigger("interests")
                  })}
                  className="w-full bg-white text-gray-800 placeholder:text-gray-400 border-none text-base p-4 rounded-xl focus:ring-2 focus:ring-amber-400 outline-none"
                />
              </div>

              <button
                type="submit"
                className="w-full text-lg font-bold text-white bg-gradient-to-br from-pink-500 to-purple-600/70 border-0 py-4 mt-4 rounded-xl shadow-lg uppercase tracking-wider hover:shadow-xl hover:scale-[1.01] active:scale-95 transition-all duration-200"
              >
                Jetzt Registrieren
              </button>

            </form>

          </div>

        </div>
      </div>

    </div>
  );
});

export default CTA;
