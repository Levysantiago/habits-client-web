import { Check } from "phosphor-react";

export function NewHabitForm() {
  return (
    <form>
      <label htmlFor="title" className="font-semibold leading-tight">
        Qual seu comprometimento?
      </label>

      <input
        type="text"
        id="title"
        placeholder="ex.: Exercícios, dormir, etc..."
        autoFocus
        className="p-4 rounded-lg mt-3 bg-zinc-800 text-white placeholder:text-zinc-400 w-full"
      />

      <label htmlFor="" className="font-semibold leading-tight mt-4 block">
        Qual a recorrência?
      </label>

      <button
        type="submit"
        className="mt-6 rounded-lg p-4 flex items-center justify-center gap-3 font-semibold bg-green-600 hover:bg-green-500 w-full"
      >
        <Check size={20} weight="bold" />
        Confirmar
      </button>
    </form>
  );
}
